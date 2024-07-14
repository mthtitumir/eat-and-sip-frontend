"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { Icon } from "@/icons";
import SubHeading from "../Header/SubHeading";
import { images } from "@/constants";

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
    <div className="flex flex-col lg:flex-row items-center bg-black py-16 px-6 lg:pl-24">
      <div className="flex-1 flex flex-col justify-center items-start min-w-[500px] pr-8 mb-8 lg:mb-0">
        <SubHeading title="Instagram" />
        <h1 className="font-cormorant text-4xl text-white mb-8">Photo Gallery</h1>
        <p className="font-opensans text-gray-400 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button mt-4">
          View More
        </button>
      </div>
      <div className="flex-1 flex flex-row max-w-[50%] relative">
        <div
          className="flex flex-row overflow-x-scroll overflow-hidden"
          ref={scrollRef}
        >
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div
              className="relative min-w-[301px] h-[447px] mr-8 flex justify-center items-center"
              key={`gallery_image-${index + 1}`}
            >
              <Image src={image} alt="gallery_image" layout="fill" objectFit="cover" className="transition-opacity duration-500 opacity-100 hover:opacity-35" />
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
      </div>
    </div>
  );
};

export default Gallery;
