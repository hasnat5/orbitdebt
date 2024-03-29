'use client'
import Image from 'next/image';
import React from 'react'
import dataPartner from '../data/dataPartner.json';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

const Partner = () => {
    return (
        <Swiper
            className="mySwiper"
            loop={true}
            style={{ transitionTimingFunction: 'linear', width: '100%' }}
            speed={4000}
            slidesPerView={"auto"}
            spaceBetween={10}
            autoplay={{
                delay: 1,
                disableOnInteraction: false
            }}
            navigation={true}
            modules={[Autoplay]}
        >
            {dataPartner.map((data, key) => {
                return (
                    <SwiperSlide
                        key={key}
                        style={{ width: 'fit-content', display: 'grid' }}
                    >
                        <a className='py-8' target='_blank' href={data.link}>
                            <Image
                                className='mx-4 self-center transition duration-150 ease-in-out grayscale hover:grayscale-0'
                                src={data.img}
                                width={data.width}
                                height={data.height}
                                alt="partner OrbitDebt"
                            />
                        </a>
                    </SwiperSlide>
                )
            })}
        </Swiper >
    )
}

export default Partner