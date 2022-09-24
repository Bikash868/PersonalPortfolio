import React , { useState } from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const About = () => {
  const [value,setValue] = useState(0)
  return (
    <div className='flex w-full border-2 space-x-15 space-y-15 justify-evenly' style={{height:'530px'}}>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
  // return (
  //   <Swiper
  //     spaceBetween={50}
  //     slidesPerView={3}
  //     onSlideChange={() => console.log('slide change')}
  //     onSwiper={(swiper) => console.log(swiper)}
  //   >
  //     <SwiperSlide>Slide 1</SwiperSlide>
  //     <SwiperSlide>Slide 2</SwiperSlide>
  //     <SwiperSlide>Slide 3</SwiperSlide>
  //     <SwiperSlide>Slide 4</SwiperSlide>
  //     ...
  //   </Swiper>
  // );
}

export default About


