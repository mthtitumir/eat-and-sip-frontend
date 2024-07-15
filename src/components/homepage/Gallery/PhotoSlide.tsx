"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { images } from "@/constants";

const PhotoSlide = () => {
  const breakpoints = {
    // For mobile devices (1 card)
    320: {
      slidesPerView: 1,
      spaceBetween: 7, // Adjust the spacing as needed
    },
    // For larger screens (3 cards)
    768: {
      slidesPerView: 3,
      spaceBetween: 15, // Adjust the spacing as needed
    },
  };
  return (
    <div className="w-full md:w-1/2">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        breakpoints={breakpoints}
        className="mySwiper res"
      >
        {[
        //   images.gallery01,
          images.gallery02,
          images.gallery03,
          images.gallery02,
          images.gallery04,
        ].map((photo, index) => (
          <SwiperSlide className="res " key={index}>
            <Image
              height={200}
              width={500}
              src={photo}
              alt="food_image "
              className="rounded-md"
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSlide;
