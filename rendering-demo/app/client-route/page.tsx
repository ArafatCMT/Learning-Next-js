"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function ClientRoute(){
const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/200/300/?blur" />
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
      </Slider>
    </div>
  )
}