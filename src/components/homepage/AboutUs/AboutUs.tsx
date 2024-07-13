import { images } from "@/constants";
import Image from "next/image";

const AboutUs = () => (
  <div className="relative w-full h-[500px] c-auto">
    <div className="relative w-full h-full flex justify-center items-center">
      <Image src={images.G} alt="G_overlay" width={200} height={500} />
    </div>

    <div className="absolute inset-0 flex items-center justify-center gap-8 bg-black bg-opacity-20 z-10">
      <div className="flex flex-col items-end gap-2 pl-24">
        <h1 className="text-3xl text-yellow-500">About Us</h1>
        <Image height={20} width={60} src={images.spoon} alt="about_spoon" />
        <p className="text-right text-sm">
          At Favor and Sip, we bring you a delightful dining experience with
          every visit. Our passion for quality and taste is evident in every
          dish. Join us and savor the flavors that make every meal special.
        </p>
        <button type="button" className="button-main ">
          Know More
        </button>
      </div>

      <div className="">
        <Image height={20} width={60} src={images.knife} alt="about_knife" />
      </div>

      <div className="flex flex-col items-start gap-2 pr-24">
        <h1 className="text-3xl text-yellow-500">Our History</h1>
        <Image height={20} width={60} src={images.spoon} alt="about_spoon" />
        <p className="text-left text-sm">
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
