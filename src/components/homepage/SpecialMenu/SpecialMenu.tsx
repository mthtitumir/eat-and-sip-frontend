import { data, images } from "@/constants";
import Image from "next/image";
import SubHeading from "../Header/SubHeading";
import MenuItem from "../Menuitem/MenuItem";

const SpecialMenu = () => (
  <div
    className="c-auto flex flex-col items-center justify-center bg-black py-16"
    id="menu"
  >
    <div className="mb-8 text-left">
      <SubHeading title="Menu that fits your palate" />
      <h1 className="text-4xl font-semibold text-white">
        Today&apos;s Special
      </h1>
    </div>

    <div className="w-full flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/3 flex flex-col items-center">
        <p className="text-3xl font-semibold text-white mb-4">Wine & Beer</p>
        <div className="w-full">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/4 mx-4 my-8 md:my-0 flex justify-center">
        <Image
          src={images.menu}
          alt="about_knife"
          width={250}
          height={250}
          objectFit="cover"
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center">
        <p className="text-3xl font-semibold text-white mb-4">Cocktails</p>
        <div className="w-full">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-12">
      <button type="button" className="button-main">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
