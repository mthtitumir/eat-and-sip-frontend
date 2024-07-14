import { images } from "@/constants";
import Image from "next/image";

const AboutUs = () => (
  <div className="p-8 md:py-24 c-auto">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
      <div className="flex flex-col items-center md:items-end gap-2 md:pl-24">
        <h1 className="text-xl md:text-3xl text-yellow-500">About Us</h1>
        <Image height={20} width={60} src={images.spoon} alt="about_spoon" />
        <p className="text-center md:text-right text-xs md:text-sm">
          At Favor and Sip, we bring you a delightful dining experience with
          every visit. Our passion for quality and taste is evident in every
          dish. Join us and savor the flavors that make every meal special.
        </p>
        <button type="button" className="button-main ">
          Know More
        </button>
      </div>

      <div className="hidden md:flex">
        <Image height={20} width={60} src={images.knife} alt="about_knife" />
      </div>

      <div className="flex flex-col items-center md:items-start gap-2 md:pr-24">
        <h1 className="text-xl md:text-3xl text-yellow-500">Our History</h1>
        <Image height={20} width={60} src={images.spoon} alt="about_spoon" />
        <p className="text-center md:text-left text-xs md:text-sm">
          At Favor and Sip, our story began with a simple love for food and
          community. We&apos;ve grown into a beloved dining spot, dedicated to
          serving memorable meals. Join us and become part of our journey.
        </p>
        <button type="button" className="button-main">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
