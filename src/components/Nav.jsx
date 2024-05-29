import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className='padding-x py-8 w-full bg-white z-50'>
            <nav className='flex justify-between items-center max-container relative'>
                <a href="/">
                    <img 
                        src={headerLogo} 
                        alt='logo'
                        width={130}
                        height={29}
                    />
                </a>
                <ul className={`lg:flex justify-center items-center gap-16 ${isOpen ? 'hidden' : 'flex'}`}>
                    {navLinks.map((item) => (
                        <li key={item.label} className="hidden lg:block">
                            <a 
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-cherry-red cursor-pointer'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='lg:hidden'>
                    <button 
                        aria-label="Toggle navigation menu"
                        onClick={toggleMenu}
                        className='cursor-pointer'
                    >
                        <img 
                            src={hamburger} 
                            alt='hamburger menu icon'
                            width={25} 
                            height={25} 
                        />
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className='absolute top-0 left-0 w-full bg-white z-40 p-8 flex flex-col items-start space-y-4'>
                    <button 
                        onClick={closeMenu}
                        className='text-lg font-bold text-gray-500 hover:text-red-500 absolute top-4 right-4'
                    >
                        Close
                    </button>
                    {navLinks.map((item) => (
                        <a 
                            key={item.label}
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray hover:text-cherry-red cursor-pointer'
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Nav;
