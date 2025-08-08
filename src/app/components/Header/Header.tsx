'use client'
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Nav/Nav';
import Image from 'next/image';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     const element = document.getElementById(window.location.hash.substring(1));
  //     if (element) {
  //       element.classList.remove("jos-active"); // Remove animation class
  //       setTimeout(() => {
  //         element.classList.add("jos-active"); // Re-add animation class to trigger it
  //       }, 50);
  //     }
  //   };

  //   window.addEventListener("hashchange", handleHashChange);

  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, []);

  return (
    <header className='site-header z-50' id='sticky-menu' >
      <div className=' max-w-full m-auto lg:pl-[36px]  '>
        <div className='flex items-center justify-between h-[65px]'>




          {/* Header Logo */}
          <Link href="/web/">
            <picture>
              {/* Mobile image */}
              <source
                srcSet="/logo_mobile.png"
                media="(max-width: 1023px)"
              />
              {/* Desktop image */}
              <Image
                src="/logo_standard.png"
                alt="Logo"
                height={65}
                width={65}
                className='lg:w-[135px]'
                priority
              />
            </picture>
          </Link>

          <Navbar
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          />
          {/* price button */}

          <div className='flex items-center '>
            <Link href="/web/services#target-pricing" className=' py-[20.5px] px-[36px] ml-[50px] border-none 
             bg-[#746eb8] after:bg-violet-600  lg:inline-block'>
              Pricing
            </Link>


            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button onClick={() => setMobileMenu(true)} className={`mobile-menu-trigger `} >
                <span />
              </button>
            </div>
          </div>



        </div>
      </div>
    </header>
  );
};

export default Header;
