import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Scroller extends Component {
   
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay:true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const testimonials = [
        {
          id: 1,
          photo: '15.png',
          name:'Simrin Sirur',
          title:'Journalist',
          company:'The Print, Gurugram',
         
        },
        {
          id: 2,
          photo: '15.png',
          name:'Simrin Sirur',
          title:'Journalist',
          company:'The Print, Gurugram',
        
        },
        {
          id: 3,
          photo: '15.png',
          name:'Simrin Sirur',
          title:'Journalist',
          company:'The Print, Gurugram',
         
        }
      ];
    return (
        <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div className="bg-[#2eb1ac] flex flex-col items-center justify-center px-4 py-2" key={testimonial.id}>
            <div className="flex items-center justify-center">
              <Image src="/15.png" height={100} width={800} alt="image" />
            </div>
          </div>
        ))}
      </Slider>
      
    );
  }
}