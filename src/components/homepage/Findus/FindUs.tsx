import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import SubHeading from "../Header/SubHeading";

const FindUs = () => (
  <div className="c-auto flex flex-col md:flex-row gap-8 p-8" id="contact">
    <div className="flex justify-center items-center w-1/2">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="text-3xl text-amber-600">
          Find Us
        </h1>
        <div className="">
          <p className="my-5">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p
            className="text-[#DCCA87] my-3"
          >
            Opening Hours
          </p>
          <p className="">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button
          type="button"
          className="button-main my-3"
        >
          Visit Us
        </button>
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image src={images.findus} alt="gallery_image" height={500} width={500} />
    </div>
  </div>
);

export default FindUs;
