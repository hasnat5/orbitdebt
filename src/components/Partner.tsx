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
            // autoplay
            navigation={true}
            modules={[Autoplay]}
        >
            {dataPartner.map((data, key) => {
                return (
                    <SwiperSlide
                        key={key}
                        style={{ width: 'fit-content', display: 'grid' }}
                    >
                        <Image
                            className='bg py-5 mx-4 self-center'
                            src={data.img}
                            width={data.width}
                            height={data.height}
                            alt="partner OrbitDebt"
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper >
    )
}

export default Partner