import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

    // if (!showPopup) return null; // Don't render if the popup is hidden

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString();
        setCurrentDate(formattedDate);
    }, []);

    return showPopup ? (
        <div className="absolute w-full min-h-screen">
            <div className="fixed inset-0 flex items-end bg-colorBackground bg-opacity-20 z-50 ">

                <div className="bg-colorBackground shadow-lg w-full ">
                    <div className='flex justify-end'>
                        <button
                            onClick={handleDecline}
                            className="pupup-close-symbol button rounded-md bg-colorPurple border-none text-3xl
                                     py-3 px-1 m-4  md:mb-0"
                        >
                            <span />
                        </button>
                    </div>

                    <div className='global-container pb-4  '>

                        <h2 className="mb-2">We care about your privacy!</h2>
                        <p className="mb-2 text-sm sub-title">Last Updated: {currentDate}</p>
                        <p className="hidden md:block mb-3 text-sm sub-title">
                            By clicking 'Agree and Continue,' you acknowledge that you have read, understood,
                            and agreed to the entirety of this Privacy Policy, exactly as specified by MicroBiz Media LLC.
                            By continuing to access or use our services, whether as a user, visitor, or client,
                            you agree to be bound by this policy, which constitutes a legally binding agreement.
                        </p>
                        <div className='flex flex-wrap gap-4 justify-end'>
                            <Link
                                onClick={handleDecline}
                                to='/web/privacy'
                                className="button flex  justify-center rounded-md bg-colorWhite border-none text-colorBackground w-full md:w-auto text-center "
                            >
                                Read Privacy Policy
                            </Link>
                            <button
                                onClick={handleAccept}
                                className="button flex  justify-center rounded-md bg-colorPurple border-none w-full md:w-auto"
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