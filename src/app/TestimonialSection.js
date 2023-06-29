'use client'
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import TestimonialSlider from './TestimonialSlider';




function TestimonialSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    
    <div className='bg-sky-700 flex flex-col items-center justify-center px-4 py-2'>
    <h2 className='text-white md:text-3xl text-center align-center font-bold mt-10'>Transforming Lives - Financially!</h2>
    <div className='grid grid-cols-2  text-white ml-10 sm:p-6 md:p-8 lg:p-10 justify-center items-center'>
      <TestimonialSlider/>
      <div className='gallery'>
      <Image src="/11.png" width={300} height={300}/>
      </div>
    </div>
  </div>

  )
}

export default TestimonialSection
