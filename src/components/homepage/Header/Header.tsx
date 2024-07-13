import { images } from "@/constants";
import "./Header.css";
import Image from "next/image";
import SubHeading from "./SubHeading";

const Header = () => (
  <div
    className="c-auto p-16 app__header app__wrapper section__padding flex justify-between"
    id="home"
  >
    <div className="app__wrapper_info w-1/2 p-5 flex justify-center items-center">
      <div>
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1 text-6xl text-yellow-500">
          The Key To Fine Dining
        </h1>
        <p className="p__opensans text-sm text-justify" style={{ margin: "2rem 0" }}>
          Welcome to Favor and Sip, where every meal is a celebration of taste
          and every sip is a journey of delight. Our commitment to culinary
          excellence is reflected in each dish we serve, crafted with the finest
          ingredients and a passion for flavor.
        </p>
        <button
          type="button"
          className="border-main px-3 py-2 rounded-md text-yellow-500"
        >
          Explore Menu
        </button>
      </div>
    </div>

    <div className="app__wrapper_img w-1/2 p-5 flex justify-center items-center">
      <Image height={500} width={500} alt="hero image" src={images.welcome} />
    </div>
  </div>
);

export default Header;
