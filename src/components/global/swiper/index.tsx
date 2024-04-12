'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.scss';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={'assets/swiper/1.svg'} alt='Swiper' height={100} width={100} />
          <div className={styles.title}>
            Private Staking Partner
          </div>

          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={'assets/swiper/1.svg'} alt='Swiper' height={100} width={100} />
          <div className={styles.title}>
            Private Staking Partner
          </div>

          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={'assets/swiper/1.svg'} alt='Swiper' height={100} width={100} />
          <div className={styles.title}>
            Private Staking Partner
          </div>

          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={'assets/swiper/1.svg'} alt='Swiper' height={100} width={100} />
          <div className={styles.title}>
            Private Staking Partner
          </div>

          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
