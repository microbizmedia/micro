'use client'
import TitleMessage from '@/app/components/constants/title-message';
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from "next/navigation";

const jobTitles = [
    "full-stack-developer-intern-(javascript)",
    "frontend-developer-intern-(react.js)",
];

const CareersAplications = () => {
    const params = useParams(); // Get jobTitle from the URL
    const router = useRouter(); // For redirecting
    const jobTitle = params?.jobTitle as string | undefined;
    const formattedJobTitle = jobTitle
        ? jobTitle
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())
        : "";



    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState("Upload Resume*");
    const [validationErrors, setValidationErrors] = useState<{ msg: string }[]>([]);
    const [formData, setFormData] = useState({
        candidateName: '',
        yearsOfExperience: '',
        email: '',
        location: '',
        message: '',
        resume: null as File | null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (jobTitle && !jobTitles.includes(jobTitle)) {
            router.replace("/web/404"); // Redirect to 404
        }
    }, [jobTitle, router]);



    useEffect(() => {
        if (isSubmitted || validationErrors.length > 0) {
            setShowMessage(true);
            const timer = setTimeout(() => setShowMessage(false), 60000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted, validationErrors]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, resume: file }));
        setFileName(file ? file.name : "Upload Resume*");
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate file size before sending the request
        if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
            setValidationErrors([{ msg: "File size must be less than 5MB." }]);
            setIsLoading(false);
            return;
        }

        // Create FormData object for file upload
        const applicationData = new FormData();
        applicationData.append("positionName", formattedJobTitle);
        applicationData.append("candidateName", formData.candidateName);
        applicationData.append("email", formData.email);
        applicationData.append("location", formData.location);
        applicationData.append("yearsOfExperience", formData.yearsOfExperience);
        applicationData.append("message", formData.message);
        if (formData.resume) applicationData.append("resume", formData.resume);


        try {
            const response = await fetch("/api/apply", {
                method: "POST",
                body: applicationData,
            });
            if (response.status === 413) {
                setValidationErrors([{ msg: "File size must be less than 5MB." }]);
                setIsLoading(false);
                return;
            }
            const result = await response.json();
            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    candidateName: "",
                    yearsOfExperience: "",
                    email: "",
                    location: "",
                    message: "",
                    resume: null,
                });
                if (fileInputRef.current) fileInputRef.current.value = "";
                setFileName("Upload Resume*");
            } else {
                setIsSubmitted(false);
                if (result.errors) {
                    setValidationErrors(result.errors);
                } else if (result.error) {
                    setValidationErrors([{ msg: result.error }]);
                } else {
                    setValidationErrors([{ msg: 'Unknown error occurred.' }]);
                }
            }
        } catch (error) {
            console.error("Error submitting application:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <main className='main-wrapper  relative overflow-hidden'>
                {/*...::: 404 Section Start :::... */}
                <section id='affiliate-section' className='global-container'>
                    <TitleMessage
                        header="Join Our Team!"
                        paragraph="Apply today and take the next step in your career with us." />
                    <div data-aos='zoom-in' className=' overflow-hidden rounded-2xl  border-[12px] border-white/15  mb-8 lg:mb-12 ' >

                        <form className="w-full  rounded-lg px-4 lg:px-16 pt-8 md:pt-14 md:pb-4" onSubmit={handleSubmit}>
                            <h3 className="mb-8">Apply for {jobTitle ? formattedJobTitle : "a Position"}</h3>

                            {/* Four placeholders */}
                            <div className="flex flex-wrap gap-4 lg:grid grid-rows-2 grid-cols-2">
                                <input
                                    type="text"
                                    name="candidateName"
                                    value={formData.candidateName}
                                    onChange={handleChange}
                                    spellCheck="false"
                                    placeholder="Full Name*"
                                    className="bg-[#746eb8]/70  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    spellCheck="false"
                                    placeholder="Email Address*"
                                    className="bg-[#746eb8]/70   border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                                />
                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    type="text"
                                    spellCheck="false"
                                    placeholder="Location"
                                    className="bg-[#746eb8]/70   border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                                />
                                <input
                                    type="number"
                                    name="yearsOfExperience"
                                    value={formData.yearsOfExperience}
                                    onChange={handleChange}
                                    spellCheck="false"
                                    placeholder="Years of experience"
                                    className="bg-[#746eb8]/70  border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                                />
                            </div>
                            {/* Text area */}
                            <div className="mt-4 mb-2">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="What interests you about working for MicroBiz Media?*"
                                    className="bg-[#746eb8]/70  text-white/80 w-full border 
                                            border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                    rows={4}
                                    required
                                ></textarea>
                            </div>
                            {/* Button */}
                            <label
                                htmlFor="resume-upload"
                                className="bg-[#746eb8]/70  text-white/80 border border-gray-600
                                                rounded-lg flex items-center justify-center cursor-pointer
                                                text-center w-full h-[42px] max-w-full  "    >
                                {fileName}
                            </label>
                            <input
                                id="resume-upload"
                                type="file"
                                name="resume"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                ref={fileInputRef} // Attach the ref to the file input
                            />
                            <p className='text-[#746eb8] sub-title tracking-wider slide-from-bottom text-center  m-auto text-sm mt-1'>
                                Fields that contain a *star*(*) are considered mandatory fields.
                            </p>
                            <input
                                type="submit"
                                disabled={isLoading}
                                value={isLoading ? 'Sending...' : 'Submit'}
                                className=" button mt-4 w-full "
                            />
                            <p className='sub-title tracking-wider slide-from-bottom text-center  mx-auto mt-1 text-sm'>
                                By submitting your application, you agree to our Terms of Service and Privacy Policy.
                            </p>
                            {showMessage ? (
                                isSubmitted ? (
                                    <p className="text-green-500 text-center py-1 md:pt-3 md:pb-0">Thank you for applying! We&apos;ll review your application and reach out if there’s a fit.</p>
                                ) : validationErrors.length > 0 ? (
                                    <div className="text-red-500 text-center py-1 md:pt-3 md:pb-0">
                                        {validationErrors.map((error, index) => (
                                            <p key={index}>{error.msg}</p>
                                        ))}
                                    </div>
                                ) : null
                            ) : (
                                <p className="py-1 md:pt-3 md:pb-0 opacity-0">.</p> // Keeps the space occupied
                            )}
                        </form>
                    </div>
                    {/* Section Spacer */}
                </section>
            </main>
        </>
    );
};

export default CareersAplications;
