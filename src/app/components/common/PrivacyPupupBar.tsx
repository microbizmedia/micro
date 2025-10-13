'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const PrivacyPupup = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        // Check if terms have been previously accepted or declined
        const hasAcceptedTerms = localStorage.getItem('termsAccepted');
        if (!hasAcceptedTerms) {
            setShowPopup(true); // Show the popup only if no record exists
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('termsAccepted', 'true'); // Save acceptance in localStorage
        setShowPopup(false); // Hide the popup
    };

    const handleDecline = () => {
        localStorage.setItem('termsAccepted', 'false'); // Save decline in localStorage
        setShowPopup(false); // Hide the popup
    };

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString();
        setCurrentDate(formattedDate);
    }, []);

    return showPopup ? (
        <div className="absolute w-full min-h-screen">
            <div className="fixed inset-0 flex items-end  bg-[#0c1015]/20 z-50 " >

                <div className="bg-[#0c1015] shadow-lg w-full ">
                    <div className='flex justify-end'>
                        <button
                            onClick={handleDecline}
                            aria-label="Close privacy popup bar"
                            className="pupup-close-symbol rounded-md bg-[#746eb8] border-none 
                                     py-3 px-1 mx-4 my-5  md:mb-0"
                        >
                            <span />
                        </button>
                    </div>

                    <div className='global-container py-4  '>

                        <h2 className="mb-2">We care about your privacy!</h2>
                        <p className="mb-2  sub-title">Last Updated: {currentDate}</p>
                        <p className="hidden md:block mb-3 sub-title">
                            By clicking &apos;Agree and Continue&apos;, you acknowledge that you have read, understood,
                            and agreed to the entirety of this Privacy Policy, exactly as specified by MicroBiz Media LLC.
                            By continuing to access or use our services, whether as a user, visitor, or client,
                            you agree to be bound by this policy, which constitutes a legally binding agreement.
                        </p>
                        <div className='flex flex-wrap gap-4 justify-end my-4'>
                            <Link
                             aria-label="Navigate to read privacy policy"
                                onClick={handleDecline}
                                href='privacy-policy'
                                className="button w-full sm:w-auto"
                            >
                                Read Privacy Policy
                            </Link>
                            <button
                                onClick={handleAccept}
                                  aria-label="Agree and close privacy popup bar"
                                className="flex text-[#ffffff] justify-center items-center rounded-md bg-[#746eb8] py-[10px]
                                 px-[30px] font-semibold opacity-[0.9] cursor-pointer w-full sm:w-auto"
                            >
                                Agree and Continue &#x27a4;
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ) : null;
}

export default PrivacyPupup;