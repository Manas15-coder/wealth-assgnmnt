import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class TestimonialSlider extends Component {
   
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const testimonials = [
        {
          id: 1,
          photo: '14.png',
          name:'Simrin Sirur',
          title:'Journalist',
          company:'The Print, Gurugram',
          text: '"I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money."'
        },
        {
          id: 2,
          photo: '14.png',
          name:'Simrin Sirur',
          title:'Journalist',
          company:'The Print, Gurugram',
          text: '"I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money."'
        },
        {
          id: 3,
          photo: '14.png',
          name:'Simrin Sirur',
          title:'Journalist',
          company:'The Print, Gurugram',
          text: '"I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money."'
        }
      ];
    return (
        <Slider {...settings}>
      {testimonials.map(testimonial => (
        <div className=" flex items-center justify-center" key={testimonial.id}>
            <div className="grid grid-cols-2 gap-1">
                <span className="image">
                <Image src='/14.png' height={100} width={100} alt="image"/>
                </span>
                <span className="review">
                <h3>{testimonial.name}</h3>
                <h3>{testimonial.title}</h3>
                <h3>{testimonial.company}</h3>
                </span>

            </div>
     <p>{testimonial.text}</p>
        </div>
      ))}
    </Slider>
    );
  }
}