"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Icon } from "@/icons";
import SubHeading from "../Header/SubHeading";
import { images } from "@/constants";
import PhotoSlide from "./PhotoSlide";

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollLeft -= 300;
      } else {
        scrollRef.current.scrollLeft += 300;
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:py-24">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-start gap-5">
          <SubHeading title="Instagram" />
          <h1 className=" text-2xl md:text-4xl text-yellow-500">
            Photo Gallery
          </h1>
          <p className="text-justify">
            Welcome to the Favor and Sip gallery, where every picture tells a
            story of culinary passion and artistry. Browse through our
            collection of vibrant images showcasing our exquisite dishes, cozy
            ambiance, and delightful moments shared by our guests. Each
            photograph captures the essence of our commitment to quality and
            hospitality. Whether it&apos;s a beautifully plated entrée, a
            refreshing drink, or a festive gathering, our gallery offers a
            glimpse into the unforgettable experiences we create at Favor and
            Sip.
          </p>
          <button type="button" className="button-main">
            View More
          </button>
        </div>
      </div>
      {/* <div className="flex flex-row max-w-[50%] relative">
        <div
          className="flex flex-row overflow-x-scroll overflow-hidden"
          ref={scrollRef}
        >
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="relative min-w-[301px] h-[447px] mr-8 flex justify-center items-center"
              key={`gallery_image-${index + 1}`}
            >
              <Image
                src={image}
                alt="gallery_image"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500 opacity-100 hover:opacity-35"
              />
              <Icon.insta className="absolute text-white text-2xl opacity-0 transition-opacity duration-500 cursor-pointer hover:opacity-100 bg-transparent" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full flex justify-between items-center px-4">
          <Icon.arrowLeft
            className="text-golden text-2xl cursor-pointer bg-black rounded-md hover:text-white"
            onClick={() => scroll("left")}
          />
          <Icon.arrowRight
            className="text-golden text-2xl cursor-pointer bg-black rounded-md hover:text-white"
            onClick={() => scroll("right")}
          />
        </div>
      </div> */}
      <PhotoSlide />
    </div>
  );
};

export default Gallery;
