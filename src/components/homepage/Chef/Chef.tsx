import { images } from "@/constants";
import Image from "next/image";
import SubHeading from "../Header/SubHeading";

const Chef = () => (
  <div className="bg-black c-auto md:p-24">
    <div className="flex flex-col md:flex-row items-center ">
      <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-end">
        <Image
          src={images.chef}
          alt="chef_image"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col pl-20 gap-3">
        <div>
          <SubHeading title="Chef's world" />
          <h1 className="text-4xl font-bold text-white mb-4">
            What we believe in
          </h1>
        </div>
        <div className="w-full md:mr-12">
          <div className="flex items-end mb-8">
            <Image
              src={images.quote}
              alt="quote_image"
              width={47}
              height={40}
            />
            <p className="text-white text-lg ml-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>
          <p className="text-white text-lg">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-yellow-500 text-2xl font-normal mr-4 mb-4 md:mb-0">
            Kevin Luo
          </div>
          <p className="text-white text-lg">Chef & Founder</p>
          <Image
            src={images.sign}
            alt="sign_image"
            width={250}
            height={100}
            className="mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
