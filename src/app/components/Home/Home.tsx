import TitleMessage from '@/app/components/constants/title-message';
import ServicesIcons from '@/app/components/constants/services-icons';
import TextVideoWindow from '@/app/components/constants/text-video-window';
import StartAFreeConsultationButton from '@/app/components/constants/meeting-button';
import Reviews from '@/app/components/constants/reviews';
import Image from 'next/image';
const Hero = () => {
  return (
    <>
      {/*...::: Hero Section Start  :::... */}
      <div className='absolute insert-0 w-full z-0 overflow-hidden h-[200vh]'>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#240454] to-colorBackground h-[200vh] w-full"></div>
        <div className='blue-gradient-1 z-0  absolute -left-[0%] top-[-10vh]  h-[100vh] w-[30%] rounded-[0] -rotate-[15.022deg] '></div>
        <div className='puple-light-gradient-3 z-0  absolute right-[0%] top-[10vh]  h-[30%] w-[45%] rounded-[400px] -rotate-[6.022deg] '></div>
        <div className='purple-gradient-angle z-0  absolute right-[10%] top-[10vh] lg:right-[10%] lg:top-[40vh] xxl:right-[18%] xxl:top-[30vh]   h-[40%] w-[55%] rounded-[40px] -rotate-[0.022deg] '></div>
      </div>
      <div id='section-home' className='global-container z-20' >

        <TitleMessage
          header='Your Digital Marketing Agency'
          paragraph='Take full control of your potential through our expert levels of design,
                development and marketing for your brand and business.'
          className=' max-w-[600px] m-auto'
        />
        <TextVideoWindow
          header="Browse Our Catalog"
          paragraph='View some of the amazing work we already made for our existing partners.'
          button="See More"
        />

        <ServicesIcons title="Our Services" />

        <section id='consultation-window-section'
          className=' overflow-hidden rounded-[40px]  bg-gradient-to-t from-[#0c1015] to-[#746eb8] max-w-[1024px] 
              flex flex-col-reverse mx-auto lg:flex-row mb-6 lg:mb-16  py-8  ' data-aos='zoom-in'
        >
          <div className='flex flex-col justify-center px-6 py-10 lg:pl-[76px] lg:max-w-[50%]'>
            <h2>Book Your Free Consultation</h2>
            <p className='lg:mt-6 lg:mb-10 mt-4 mb-8 text-base '>Choose a convenient time and let’s start planning your project together.</p>
            <StartAFreeConsultationButton buttonName="Free Consultation ➤" className=' button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md' />
          </div>


          <a href="mailto:info@microbizmedia.com?subject=General Inquiry&body=Hello,%0D%0A%0D%0AI have a question regarding your services. Here are the details:%0D%0A%0D%0A[Please describe your concern here]%0D%0A%0D%0AThank you." target="_blank"
            className=' relative lg:right-[40px] flex-1 flex justify-center items-center     '>
            <Image
              loading='lazy'
              src='/icon_images/email_us_icon.png'
              width={200}
              height={300}
              alt='letter_image'
              className='float-animation  transform scale-x-150 px-3 md:px-0 pt-10 lg:pt-0'
            /> 
          </a>
        </section>


        <Reviews />
        
      </div>
    </>
  );
};

export default Hero;
