"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import ConsultationButton from '../constants/meeting-button';

const Footer = () => {
  const pathname = usePathname();
  const showRoutes = ['/', "/work", "/services", "/process", "/about",];
  return (
    <>
      {showRoutes.includes(pathname) ? (
        <div className='global-container text-center pt-4 mb-8 md:mb-12  z-40' data-aos='zoom-in'>
          <h2 className='pb-6'>Let&apos;s Start Your Story</h2>
          <ConsultationButton buttonName="Start a Free Consultation" className=' button-micro hover:border-violet-400 ' />
        </div>
      ) : <div className='h-[1px] w-[96%] m-auto bg-[#DBD6CF] opacity-25 ' />}

      <footer className=' relative '>
        {/* Footer Top pictures */}
        {showRoutes.includes(pathname) ? (
          <div className='relative'>
            <Image src='/footer_bg.png' loading="lazy" alt='background image' width={2000} height={20}
              className='absolute z-10 bottom-[0%] w-full max-h-[110vh]  mx-auto left-1/2 -translate-x-1/2 ' />
            <Image src='/footer_graphic.png' loading="lazy" alt='footer graphic website images' width={1000} height={20}
              className='relative w-[100%] bottom-[100%] bg-bottom z-20' />
          </div>
        ) : null}

        {/* Footer Top */}
        <div className='global-container pt-8 '>
          <div className='flex flex-wrap md:mb-4 md:justify-between'>
            <div className='flex flex-col mt-1 gap-y-4 p-3 md:max-w-60'>
              <Link href='/' className='inline-block'>
                <Image
                  src='/logo_standard.svg'
                  alt='logo'
                  width={150}
                  height={24}
                  loading='lazy'
                />
              </Link>
              <p className=' leading-[1.8rem]'>
                Our mission is to empower businesses by providing
                innovative online solutions that enhance their digital presence.
              </p>

            </div>

            <ul className='flex flex-col  gap-y-3 p-3'>
              <li className='text-2xl font-medium mb-2'>Menu</li>
              <li><Link href='work' > Work</Link> </li>
              <li><Link href='services' >Services </Link></li>
              <li><Link href='process' > Process</Link></li>
              <li> <Link href='careers' >Careers </Link> </li>
              <li> <Link href='about' > About Us </Link>  </li>
            </ul>

            <ul className='flex flex-col  gap-y-3 p-3'>
              <li className='text-2xl font-medium mb-2'>Legal</li>
              <li><Link href='FAQ' > FAQ </Link></li>
              <li><Link href='affiliate' > Affilliate Program </Link> </li>
              <li><Link href='contact'> Customer Service</Link> </li>
              <li><Link href='privacy-policy'>Privacy Policy</Link></li>
              <li><Link href='terms-of-service'>Terms Of Service</Link></li>
            </ul>

            <div className='flex flex-col gap-y-4 p-3'>

              <h4 className='text-2xl text-bold mr-10'>
                Social Links
              </h4>
              <div className='flex justify-between gap-x-4'>

                <a href='https://www.fiverr.com/microbiz_media?public_mode=true' target='_blank' rel='noopener noreferrer'
                  className='flex flex-col   text-[#0c1015]'>
                  <Image
                    src='/fiverr_icon.png'
                    alt='Fiverr icon'
                    width={20}
                    height={20}
                    className=' size-12'
                    loading='lazy'
                  />
                  Fiverr
                </a>

                <a href='https://github.com/microbizmedia' target='_blank' rel='noopener noreferrer'
                  className='flex flex-col items-center  text-[#0c1015]'>
                  <Image
                    src='/linkedin_icon.png'
                    alt='Linkedin icon'
                    width={20}
                    height={20}
                    className='  size-12'
                    loading='lazy'
                  />
                  LinkedIn
                </a>

                <a href='https://github.com/microbizmedia' target='_blank' rel='noopener noreferrer'
                  className='flex flex-col items-center  text-[#0c1015]'>
                  <Image
                    src='/github_icon.png'
                    alt='Github icon'
                    width={20}
                    height={20}
                    className=' size-12'
                    loading='lazy'
                  />
                  GitHub
                </a>

              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className='h-[1px] w-[96%] m-auto bg-[#DBD6CF] opacity-25 ' />
        <p className='py-6 text-center text-sm'> © {new Date().getFullYear()} MicroBiz Media. All Rights Reserved. </p>

      </footer >
    </>
  );
};

export default Footer;
