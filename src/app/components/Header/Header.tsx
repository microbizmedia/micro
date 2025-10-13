'use client'
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Nav/Nav';
import Image from 'next/image';
import Logo from '@/app/components/Header/logo'

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
    <header className=' z-50 flex items-center justify-between h-[65px]'>

     <Link href="/">
        <Image
          src="/logo_standard.svg"
          alt="Logo"
          width={135}
          height={65}
          className="h-auto w-[126px] hidden lg:block ml-[36px]"
          priority
        />
      <Logo/>
    </Link>

      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
    

      <div className='flex'>
        <Link href="/services#target-pricing" className=' py-[20.5px] px-[36px]  font-[600] 
             bg-[#746eb8]' aria-label='Link to price packages'  >
          Pricing
        </Link>
        {/* Responsive Off-canvas Menu Button */}
        <button onClick={() => setMobileMenu(true)} className='mobile-menu-trigger' aria-label='Dropdown menu'>
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;