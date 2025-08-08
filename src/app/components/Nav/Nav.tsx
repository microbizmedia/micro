import { useState } from 'react';
import Link from 'next/link';
import './menu.css'
// import threadsIcon from '../footer/social_media_icons/threads_icon.png'
// import xIcon from '../footer/social_media_icons/x_icon_b.png'
// import instagramIcon from '../footer/social_media_icons/instagram_icon_b.png'


// eslint-disable-next-line react/prop-types
const Navbar = ({ mobileMenu, setMobileMenu }: any) => {
    const [mobileSubMenu, setMobileSubMenu] = useState('');

    const handleMenu = () => {
        setMobileMenu(false);
        setMobileSubMenu('');
    };

    return (
        <div className='menu-block-wrapper'>

            <div onClick={handleMenu} className={`menu-overlay ${mobileMenu && 'active'}`} />

            <nav className={`menu-block ${mobileMenu && 'active'}`} id='append-menu-header'  >

                <ul className={`site-menu-main`}>
                    <li onClick={handleMenu} className='nav-item' >
                        <Link href='' className='nav-link-item '>   Our Work  </Link>
                    </li>
                    <li onClick={handleMenu} className='nav-item'>
                        <Link href='' className='nav-link-item '>  Services  </Link>
                    </li>
                    <li onClick={handleMenu} className='nav-item' >
                        <Link href='' className='nav-link-item'>    Process </Link>
                    </li>
                    <li onClick={handleMenu} className='nav-item ' >
                        <Link href='' className='nav-link-item '>     Careers  </Link>
                    </li>
                    <li className='nav-item' onClick={handleMenu}   >
                        <Link href='' className='nav-link-item '>   About Us </Link>
                    </li>
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
                    <div onClick={handleMenu} className='mobile-menu-close rotate-[-90deg]'>
                        &#10095;
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
