import { images, data } from '@/constants';
import Image from 'next/image';
import SubHeading from '../Header/SubHeading';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="flex justify-start items-center ">
    <Image src={imgUrl} alt="awards" width={50} height={50} className="w-12 h-12" />
    <div className="ml-4 flex flex-col">
      <p className="text-[#DCCA87]">{title}</p>
      <p className="">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="c-auto bg-black flex flex-col md:flex-row justify-between items-center p-12">
    <div className="flex-1 flex flex-col justify-center items-start p-8">
      <SubHeading title="Awards & recognition" />
      <h1 className="font-cormorant text-4xl text-white mb-8">Our Laurels</h1>

      <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-5">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="flex-1 flex justify-center items-center p-8">
      <Image src={images.laurels} alt="laurels_img" width={500} height={500} className="w-full " />
    </div>
  </div>
);

export default Laurels;
