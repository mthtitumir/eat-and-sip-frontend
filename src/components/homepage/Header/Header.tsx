import { images } from "@/constants";
import Image from "next/image";
import SubHeading from "./SubHeading";

const Header = () => (
  <div
    className="c-auto p-8 md:p-16 flex flex-col md:flex-row justify-between gap-8 md:gap-0"
  >
    <div className="w-full md:w-1/2 md:p-5 flex justify-center items-center">
      <div>
        <SubHeading title="Chase the new flavour" />
        <h1 className="text-3xl md:text-6xl text-yellow-600">
          The Key To Fine Dining
        </h1>
        <p className="text-xs md:text-sm text-justify" style={{ margin: "2rem 0" }}>
          Welcome to Favor and Sip, where every meal is a celebration of taste
          and every sip is a journey of delight. Our commitment to culinary
          excellence is reflected in each dish we serve, crafted with the finest
          ingredients and a passion for flavor.
        </p>
        <button
          type="button"
          className="button-main"
        >
          Explore Menu
        </button>
      </div>
    </div>

    <div className="w-full md:w-1/2 md:p-5 flex justify-center items-center">
      <Image height={500} width={500} alt="hero image" src={images.welcome} />
    </div>
  </div>
);

export default Header;
