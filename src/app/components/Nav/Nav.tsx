import { useState } from 'react';
import Link from 'next/link';
import './menu.css'
import Image from 'next/image';

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
                    <li onClick={handleMenu}  > <Link href='/work' className='nav-link-item '> Our Work</Link> </li>
                    <li onClick={handleMenu} > <Link href='/services' className='nav-link-item '>Services </Link></li>
                    <li onClick={handleMenu}  > <Link href='/process' className='nav-link-item'> Process </Link></li>
                    <li onClick={handleMenu} > <Link href='/careers' className='nav-link-item '>Careers</Link>  </li>
                    <li onClick={handleMenu} > <Link href='/about' className='nav-link-item '> About Us </Link>  </li>
                </ul>

                <div className='dropdown-menu-social-media-icons'>
                    <Image
                        src='/threads_icon.png'
                        alt='threads icon'
                        width={30}
                        height={20}
                         className='  size-10'
                        loading='lazy'
                    />
                    <Image
                        src='/x_icon.png'
                        alt='x icon'
                        width={30}
                        height={20}
                         className='  size-10'
                        loading='lazy'
                    />
                    <Image
                        src='/instagram_icon.png'
                        alt='instagram icon'
                        width={30}
                        height={20}
                         className='  size-10'
                        loading='lazy'

                    />
                </div>
                <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
                    <div onClick={handleMenu} className='mobile-menu-close lg:hidden rotate-[-90deg]'>
                        &#10095;
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;
