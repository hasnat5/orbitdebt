'use client'
import React, { useState, useEffect } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const MenuOn = () => {
        const handleLinkClick = () => {
            setTimeout(function () {
                setOpen(false); // Change the state when the link is clicked
            }, 500);
            // setOpen(false); // Change the state when the link is clicked
        };
        return (
            <div className={`${isOpen ? "block" : "hidden"} overflow-y-auto w-full h-full min-h-screen bg-[#0A090F] overflow-hidden max-h-full`}>
                <div className='w-full h-full'>

                    <ul className='px-6 grid divide-y divide-[#353539]'>
                        <li className='py-4'><Link onClick={handleLinkClick} href={'/'} className='inline-block font-mono capitalize text-white text-xs '>home</Link></li>
                        <li className='py-4'><Link onClick={handleLinkClick} href={'/repayment'} className='inline-block font-mono capitalize text-white text-xs '>repayment</Link></li>
                        <li className='py-4'><Link onClick={handleLinkClick} href={'/appropriateness'} className='inline-block font-mono capitalize text-white text-xs '>appropriateness</Link></li>
                        <li className='py-4'><Link onClick={handleLinkClick} href={'/about'} className='inline-block font-mono capitalize text-white text-xs '>about us</Link></li>
                    </ul>
                </div>
            </div>
        )
    }


    return (
        <nav className='w-full fixed top-0 z-50'>
            <div className={`flex py-1.5 items-center justify-between pl-6 pr-3 transition duration-300 
            ${scrolling || isOpen ? 'bg-[#0A090F] border-b border-[#353539]' : ''}`}>
                <a href="/" className='z-10'>
                    <Image
                        src="/assets/images/partnership/upgradia.svg"
                        alt="OrbitDebt Logo"
                        className="h-8 w-auto"
                        width={220}
                        height={220}
                        priority
                    />
                </a>

                <div className='z-10 flex items-center'>
                    {/* <span className={`${isOpen ? 'text-white' : 'text-primary'} uppercase text-[10px]`}>{isOpen ? "close" : "menu"}</span> */}
                    <Hamburger
                        hideOutline={false}
                        size={24}
                        toggle={setOpen}
                        toggled={isOpen}
                        color={`${isOpen ? '#FFF' : '#efefe599'}`}
                    />
                </div>
            </div>
            <MenuOn />
        </nav>
    )
}

export default Navbar