import { useState, useEffect } from 'react';
import Link from 'next/link';
import './menu.css'
// import threadsIcon from '../footer/social_media_icons/threads_icon.png'
// import xIcon from '../footer/social_media_icons/x_icon_b.png'
// import instagramIcon from '../footer/social_media_icons/instagram_icon_b.png'

type NavbarProps = {
    mobileMenu: boolean;
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar = ({ mobileMenu, setMobileMenu }: NavbarProps) => {
    const [mobileSubMenu, setMobileSubMenu] = useState('');

    const handleMenu = () => {
        setMobileMenu(false);
        setMobileSubMenu('');
    };

    return (
        <>
            <div onClick={handleMenu} className={`lg:hidden menu-overlay ${mobileMenu && 'active'}`} />
            <nav className={`menu-block ${mobileMenu && 'active'}`} id='append-menu-header'  >

                <ul className={`site-menu-main`}>
                    <li onClick={handleMenu}  > <Link href='work' className='nav-link-item '> Our Work</Link> </li>
                    <li onClick={handleMenu} > <Link href='' className='nav-link-item '>Services </Link></li>
                    <li onClick={handleMenu}  > <Link href='' className='nav-link-item'> Process </Link></li>
                    <li onClick={handleMenu} > <Link href='' className='nav-link-item '>Careers</Link>  </li>
                    <li onClick={handleMenu} > <Link href='' className='nav-link-item '> About Us </Link>  </li>
                </ul>

                {/* <div className='dropdown-menu-social-media-icons'>
          <img
            src={threadsIcon}
            alt='threads-icon'
            className='  size-10'
          />
          <img
            src={xIcon}
            alt='x-icon'
            className='  size-10'
          />
          <img
            src={instagramIcon}
            alt='instagram-icon'
            className='  size-10'
          />
        </div> */}
                <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
                    <div onClick={handleMenu} className='mobile-menu-close hidden rotate-[-90deg]'>
                        &#10095;
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;
