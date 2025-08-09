import Link from 'next/link';
import emailUsIcon from '../../assets/icon_images/email_us_icon.png'
import TextAndPictureWindow from '@/app/components/constants/text-video-window'
import TitleMessage from '@/app/components/constants/title-message';
import ServicesIcons from '@/app/components/constants/services-icons';
import TextVideoWindow from '@/app/components/constants/text-video-window';
import ourStoryImg from "../../assets/img/our-story-image.jpg"
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

        <div className='global-container relative z-20'>
          <section id='section-hero' >



            <TitleMessage
              header='Your Digital Agency'
              paragraph='Take full control of your potential through our expert levels of design,
                development and marketing for your brand and business.'
              className='sub-title max-w-[600px] m-auto'
            />

            <TextVideoWindow
              header="Browse Our Catalog"
              paragraph='View some of the amazing work we already made for our existing partners.'
              button="See More"
            />

            <ServicesIcons
              title="What We Offer" />

          </section>
          {/*...::: Hero Section End :::... */}

          {/*...::: Consultation window Section start :::... */}
          {/* <section id='consultation-window-section' >
            <div
              className='jos hHelloero-img overflow-hidden rounded-[40px]  bg-gradient-to-t from-colorBackground to-colorPurple  max-w-[1024px] 
              flex flex-col-reverse mx-auto lg:flex-row mb-6 lg:mb-16 pt-16 pb-4  lg:p-0'
            >
              <div className='flex flex-col justify-center   px-8 py-10 lg:pl-[76px] lg:max-w-[50%]'>
                <h2>Our consultations are always free</h2>
                <p className='lg:mt-6 lg:mb-10 mt-4 mb-8 text-base '>Give us an email and one of our agents will contact you as soon as we can.</p>
                <Link to='/web/contact' className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>Free Consultation &#x27a4;  </Link>
              </div>
              <a href="mailto:info@microbizmedia.com?subject=General Inquiry&body=Hello,%0D%0A%0D%0AI have a question regarding your services. Here are the details:%0D%0A%0D%0A[Please describe your concern here]%0D%0A%0D%0AThank you." target="_blank"
                className=' relative  flex justify-center items-center lg:right-[40px]'>
                <img
                  src={emailUsIcon}
                  alt='letter-image'
                  className='animate-float  size-5/12'
                />
              </a>
            </div>

            <TextAndPictureWindow
              header="Our Story"
              paragraph='Read more about us and what inspired us to do what we do for you.'
              aditionalClassName="scale-x-[-1] lg:pr-0 lg:pl-20"
              image={ourStoryImg}
              button='Learn More'
              link='/web/about'
            />
          </section> */}
          {/*...::: Consultation window Section end :::... */}
        </div>

    </>
  );
};

export default Hero;
