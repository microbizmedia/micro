"use client";
import Link  from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";

const Footer = () => {
  const gitHubUrl = '/web/';
  const pathname = usePathname();
  const showRoutes = [
    gitHubUrl,
    '/',
    gitHubUrl + "work",
    gitHubUrl + "services",
    gitHubUrl + "process",
    gitHubUrl + "about",
  ];
  return (
    <>
      {showRoutes.includes(pathname) ? (
        <div className='global-container relative jos text-center pt-4 mb-8 md:mb-12  z-40'>
          <h2 className=' pb-6'>Let's Start Your Story</h2>
          <Link href='contact' className='button-micro  hover:border-violet-400' >
            Start A Free Consultation
          </Link>
        </div>
      ) : <div className='h-[1px] w-[96%] m-auto bg-[#DBD6CF] opacity-25 ' />}

      <footer className=' relative '>
        {/* Footer Top pictures */}
        {showRoutes.includes(pathname) ? (
          <div className='relative'>
            <Image src='/footer_bg.png' alt='background image' width={2000} height={20}
            className='absolute z-10 bottom-[0%] w-full max-h-[110vh]  mx-auto left-1/2 -translate-x-1/2 ' />
            <Image src='/footer_graphic.png' alt='footer graphic website images'  width={1000} height={20}
            className='relative   w-[100%] bottom-[100%] bg-bottom z-20' />
          </div>
        ) : null}

        {/* Footer Top */}
        <div className='global-container pt-8 '>
          <div className='flex flex-wrap mb-4 md:justify-between'>
            <div className='flex flex-col mt-2 gap-y-4 p-3 md:max-w-60'>
              <Link href='/' className='inline-block'>
                <Image
                  src='/logo_standard.svg'
                  alt='logo'
                  width={150}
                  height={24}
                />
              </Link>
              <li className='list-none leading-[1.8rem]'>
                Our mission is to empower businesses by providing
                innovative online solutions that enhance their digital presence.
              </li>

            </div>

            <div className='flex flex-col gap-y-6 p-3'>
              <h4 className='text-[26px] text-bold capitalize'>
                Menu
              </h4>
              <ul className='flex flex-col  gap-y-3 text-[18px]'>
                {/* <li> <HashLink to={gitHubUrl + 'services#target-pricing'}> Pricing </HashLink> </li> */}
                <li><Link href='work' > Work</Link> </li>
                <li><Link href='services' >Services </Link></li>
                <li><Link href='process' > Process</Link></li>
                <li> <Link href='careers' >Careers </Link> </li>
                <li> <Link href='about' > About Us </Link>  </li>
              </ul>
            </div>

            <div className='flex flex-col gap-y-6 p-3'>
              <h4 className='text-[26px] text-bold capitalize '>
                Legal
              </h4>
              <ul className='flex flex-col gap-y-3 text-[18px]'>
                {/* <li><Link to={gitHubUrl + 'FAQ'} >&nbsp;</Link></li> */}
                <li><Link href='FAQ' > FAQ </Link></li>
                <li> <Link href='affiliate' > Affilliate Program </Link> </li>
                <li><Link href='contact'> Customer Service</Link> </li>
                <li><Link href='privacy'>Privacy Policy</Link></li>
                <li><Link href='termsofservice'>Terms Of Service</Link></li>
              </ul>
            </div>

            <div className='flex flex-col gap-y-6 p-3'>

              <h4 className='text-[26px] text-bold capitalize mr-10'>
                Social Links
              </h4>
              <div className='flex justify-between'>
                <Image
                  src='/threads_icon.png'
                  alt='threads icon'
                  width={20}
                  height={20}
                  className='  size-10'
                />
                <Image
                  src='/x_icon.png'
                  alt='x icon'
                  width={20}
                  height={20}
                  className='  size-10'
                />
                <Image
                  src='/instagram_icon.png'
                  alt='instagram icon'
                  width={20}
                  height={20}
                  className='  size-10'
                />
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
