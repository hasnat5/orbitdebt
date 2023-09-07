'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
    return (
        <footer className='container min-w-full bg-[#0A090F] bg-box-string bg-cover border-t border-[#353539] bg-center px-6 md:px-12 lg:px-32'>
            <div className='grid py-16 gap-y-20 items-start mx-auto w-full max-w-screen-xl lg:gap-y-0 lg:grid-cols-12 lg:justify-between'>
                {/* LOGO */}
                <section className='grid gap-10 lg:col-span-5'>
                    <div className='flex gap-x-4 items-center'>
                        <Image
                            src="/image/Logo-Upgradia-White.svg"
                            alt="Upgradia Logo"
                            width={48}
                            height={56}
                            priority
                        />
                        <h3 className='text-white'>OrbitDebt</h3>
                    </div>

                </section>

                {/* MENU */}
                <section className='grid gap-8 items-start w-full lg:grid-flow-col lg:col-span-7 lg:gap-10'>
                    <div className='grid gap-3 w-fit'>
                        <h4>PAGE</h4>
                        <a href="/" className='footerLink'>Home</a>
                        <a href="/" className='footerLink'>Repayment</a>
                        <a href="/" className='footerLink'>Appropriateness</a>
                        <a href="/about" className='footerLink'>About</a>
                    </div>
                    <div className='grid gap-3 w-fit'>
                        <h4>MEDIA SOSIAL</h4>
                        <a href="https://www.instagram.com/orbit4it/" target='_blank' className='footerLink flex items-start gap-3'>
                            <Icon icon="bxl:instagram-alt" className='text-xl' />
                            Instagram
                        </a>
                        <a href="https://www.linkedin.com/company/orbitsmkn4bdg/" target='_blank' className='footerLink flex items-start gap-3'>
                            <Icon icon="bxl:linkedin" className='text-xl' />
                            LinkedIn
                        </a>
                    </div>
                    <div className='grid gap-3'>
                        <h4>CONTACT US</h4>
                        <a href="mailto:orbit.smkn4bdg@gmail.com" target='_blank' className='footerLink flex items-start gap-3'>
                            <Icon icon="fluent:mail-16-filled" className='text-xl' />
                            <span className='w-full'>
                                orbit.smkn4bdg@gmail.com
                            </span>
                        </a>
                        <a href="https://goo.gl/maps/NvjghmBf6o63h7eBA" target='_blank' className='footerLink flex items-start gap-3'>
                            <Icon icon="fluent:location-16-filled" className='text-xl' />
                            <span className='w-full'>
                                Jalan Kliningan Nomor 6, Buah Batu, 40264, Kota Bandung
                            </span>
                        </a>
                    </div>
                </section>
            </div>

            <p className='py-4 text-sm text-center text-tertiary font-mono uppercase'>© 2023 OrbitDebt. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
