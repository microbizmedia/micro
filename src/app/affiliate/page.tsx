import TitleMessage from '@/app/components/constants/title-message';
const Affiliate = () => {
    return (
        <div id='affiliate-section' className='global-container'>
            <TitleMessage header='Affiliate Program' paragraph='We are currently working on this. Stay Tuned!' />
            <div className=' overflow-hidden rounded-2xl  border-[12px] border-white/15 mb-8 lg:mb-12 mx-auto p-0' 
            data-aos='zoom-in' >
                <div className=' px-4 py-10 lg:py-14 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                    <h3>We are currently working on lunghing our affiliate program tell us about you so we can contact you!</h3>
                    <a href="mailto:info@microbizmedia.com?subject=Affiliate Program Inquiry&body=Hello,%0D%0A%0D%0AI have a question regarding your Affiliate Program. Here are the details:%0D%0A%0D%0A[Please describe your concern here]%0D%0A%0D%0AThank you." target="_blank">
                        <p className='pt-6 text-[#746eb8]'>info@microbizmedia.com</p> </a>
                </div>
            </div>

        </div>
    );
};

export default Affiliate;
