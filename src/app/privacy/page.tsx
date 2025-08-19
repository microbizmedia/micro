const PrivacyPolicy = () => {
    return (
        <div id='privacy-policy' className='global-container z-40'>
            <h1 className=' text-center pt-14'> Privacy Policy  </h1>
            <p className={`sub-title tracking-wider text-center  m-auto py-6 lg:py-8 `}>  Welcome to MicroBiz Media LLC. Your privacy is important to us.
                This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website and use our services.</p>

            <div className='px-4 py-4 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>1. Information We Collect</h3>
                <p className='pt-3 sub-title'>We may collect the following types of information when you interact with our website or services:</p>
                <p className='pt-2'>1.1 Personal Information:<span className='sub-title'> Name, email address, phone number, business details, and any other information you provide voluntarily.</span></p>
                <p className='pt-2'>1.2 Usage Data:<span className='sub-title'>  IP address, browser type, operating system, pages visited, and other analytics.</span></p>
                <p className='pt-2'>1.3 Cookies & Tracking Technologies:<span className='sub-title'> We use cookies to improve your browsing experience and analyze website traffic.</span></p>
            </div>

            <div className=' px-4 py-4 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>2. How We Use Your Information</h3>
                <p className='pt-3 sub-title'>We use your information for:</p>
                <p className='pt-2'>2.1<span className="sub-title"> Providing, maintaining, and improving our services.</span></p>
                <p className='pt-2'>2.2<span className="sub-title"> Responding to inquiries and customer support requests.</span></p>
                <p className='pt-2'>2.3<span className="sub-title"> Sending updates, promotions, or important notices ( if you opt-in ).</span></p>
                <p className='pt-2'>2.4<span className="sub-title"> Ensuring website security and preventing fraudulent activities.</span></p>
            </div>

            <div className=' px-4 py-4 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>3. How We Share Your Information</h3>
                <p className='pt-3'><span className="sub-title">We do</span> not <span className="sub-title">sell or rent your personal information. However, we may share it with:</span></p>
                <p className='pt-2'>3.1 Service Providers: <span className='sub-title'> Third-party tools that help us operate ( e.g., hosting services, payment processors ).</span></p>
                <p className='pt-2'>3.2 Legal Requirements: <span className='sub-title'>  If required by law or to protect our rights.</span></p>
            </div>

            <div className=' px-4 py-4 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>4. Cookies & Tracking Technologies</h3>
                <p className='pt-3 sub-title' >We use cookies and similar technologies to improve functionality and user experience.
                    You can manage cookie preferences in your browser settings.</p>
            </div>

            <div className=' px-4 py-4 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>5. Data Security</h3>
                <p className='pt-3 sub-title'>We implement security measures to protect your data,
                    but no method is 100% secure. Please use caution when sharing personal information online.</p>
            </div>

            <div className='px-4 py-4  lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>6. Your Rights & Choices</h3>
                <p className='pt-3 sub-title'>Depending on your location, you may have rights regarding your data, including:</p>
                <p className='pt-2'>2.1<span className="sub-title"> Accessing, correcting, or deleting your personal data.</span></p>
                <p className='pt-2'>2.2<span className="sub-title"> Opting out of marketing emails.</span></p>
                <p className='pt-2'>2.3<span className="sub-title"> Restricting certain types of data processing.</span></p>
            </div>

            <div className='px-4 py-4  lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>7. Third-Party Links</h3>
                <p className='pt-3 sub-title'>Our website may contain links to third-party sites.
                    We are not responsible for their privacy practices, so we encourage you to review their policies.</p>
            </div>

            <div className='px-4 py-4 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>8. Changes to This Policy</h3>
                <p className='pt-3 sub-title'>We may update this Privacy Policy occasionally.
                    Changes will be posted on this page with a revised &quot;Last Updated&quot; date.</p>
            </div>

            <div className=' px-4 pt-4 pb-8 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>9. Contact Us</h3>
                <p className='pt-3 sub-title'>If you have any questions about this Privacy Policy, you can contact us at:</p>
                <p className='pt-2'>Email: <span className="  text-[#746eb8]">
                    <a href="mailto:info@microbizmedia.com?subject=Privacy Policy Inquiry&body=Hello,%0D%0A%0D%0AI have a question regarding your Privacy Policy. Here are the details:%0D%0A%0D%0A[Please describe your concern here]%0D%0A%0D%0AThank you." target="_blank">
                        info@microbizmedia.com
                    </a>
                </span>
                </p>
                <p className='pt-3 '>Phone: <span className="text-[#746eb8]"><a href="tel:+4733378901">+1 303 847 8771</a></span></p>
            </div>

        </div>
    );
};

export default PrivacyPolicy;
