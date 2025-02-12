"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image alt='' src="https://picsum.photos/400/200" width={400} height={200} />
        </div>
        <div>
          <Image alt='' src="https://picsum.photos/400/200" width={400} height={200} />
        </div>
        <div>
          <Image alt='' src="https://picsum.photos/400/200" width={400} height={200} />
        </div>
        <div>
          <Image alt='' src="https://picsum.photos/400/200" width={400} height={200} />
        </div>
      </Slider>
    </div>
  );
}