'use client'
import TitleMessage from "@/app/components/constants/title-message";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
type ValidationError = { msg: string };
const CustomerService = () => {

  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isSubmitted || validationErrors.length > 0) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 60000); // 1 minute
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, validationErrors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Disable button while submitting
    // Create FormData object for file upload
    const applicationData = new FormData();
    applicationData.append("clientName", formData.clientName);
    applicationData.append("email", formData.email);
    applicationData.append("message", formData.message);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Ensure JSON format
        body: JSON.stringify(Object.fromEntries(applicationData)),
      });
      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form data
        setFormData({
          clientName: "",  // Ensure no empty strings
          email: "",
          message: "",
        });

      } else {
        if (result.errors) {
          setIsSubmitted(false)
          setValidationErrors(result.errors || ["Failed to send message."]);
        } else {
          alert("Failed to submit application. Please try again.");
        }
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Re-enable button after submission
    }
  };

  return (

        <div id='affiliate-section' className='global-container'>
          <TitleMessage
            header="We&apos;re All Ears!"
            paragraph="Send us an email or fill up the form, we&apos;ll get right back to you."
          />

          <div
            className='overflow-hidden rounded-2xl  border-[12px] border-white/15
               mb-8 lg:mb-12 '
            data-aos='zoom-in'
          >
            <form className="w-full  rounded-lg px-4 lg:px-16 pt-8 md:pt-14 md:pb-4"
              onSubmit={handleSubmit}    >
              <h2 className="mb-8">Send Us a Message</h2>

              {/* Four placeholders */}
              <div className="flex flex-wrap gap-4 lg:grid grid-rows-1 grid-cols-2">
                <input
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                  type="text" spellCheck="false"
                  placeholder="Name *"
                  className="bg-[#746eb8]/70   border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  spellCheck="false"
                  placeholder="Email *"
                  className="bg-[#746eb8]/70   border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full "
                />
              </div>

              {/* Text area */}
              <div className="mt-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Questions, comments, or ideas? *"
                  className="bg-[#746eb8]/70 w-full border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  rows={4}
                ></textarea>
              </div>
              <p className='text-[#746eb8] sub-title tracking-wider  text-center  m-auto text-sm'>
                Fields that contain a *star*(*) are considered mandatory fields.
              </p>
              {/* Button */}
              <button
                type="submit"
                className="button mt-4 w-full py-2 px-4"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Contact'}
              </button>
              <p className='sub-title tracking-wider text-center  mx-auto mt-1.5 text-sm'>
                By continuing you agree to the terms of service & privacy policy of MicroBiz Media LLC.
              </p>
              {showMessage ? (
                isSubmitted ? (
                  <p className="text-green-500 text-center py-1 md:pt-3 md:pb-0">
                    Thank you for contacting us! We&apos;ll get back to you soon.</p>
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
          <div
            className=' overflow-hidden rounded-2xl  border-[12px] border-white/15
              flex flex-col-reverse
              mx-auto max-w-[1024px]
              lg:flex-row mb-8 lg:mb-12'
            data-aos='zoom-in'
          >
            <div className='flex flex-col justify-center flex-1 bg-colorBackground px-4 py-6 lg:pl-16'>
              <h2>Send us an email</h2>
              <p className='lg:mb-8 mt-4 mb-4 lg:max-w-[70%]'>Tell us what we can do for you.</p>
              <p className='text-[#746eb8]'><a href="mailto:info@microbizmedia.com?subject=General Inquiry&body=Hello,%0D%0A%0D%0AI have a question regarding your services. Here are the details:%0D%0A%0D%0A[Please describe your concern here]%0D%0A%0D%0AThank you." target="_blank">
                info@microbizmedia.com
              </a></p>
            </div>
            <a className='relative lg:right-[40px] flex-1 flex justify-center items-center pt-16 lg:pr-20   h-[240px] lg:pt-0 w-full ' href="mailto:info@microbizmedia.com?subject=General Inquiry&body=Hello,%0D%0A%0D%0AI have a question regarding your services. Here are the details:%0D%0A%0D%0A[Please describe your concern here]%0D%0A%0D%0AThank you." target="_blank">
              <Image
                src="/icon_images/email_us_icon.png"
                width={300}
                height={300}
                alt='letter-image'
                className=' size-6/12 float-animation '
                loading="lazy"
              /></a>
          </div>
        </div>

  );
};

export default CustomerService;

