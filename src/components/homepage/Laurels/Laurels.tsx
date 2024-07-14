import { images, data } from '@/constants';
import Image from 'next/image';
import SubHeading from '../Header/SubHeading';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="col-span-2 md:col-span-1 flex justify-start items-center ">
    <Image src={imgUrl} alt="awards" width={50} height={50} className="w-12 h-12" />
    <div className="ml-4 flex flex-col">
      <p className="text-[#DCCA87]">{title}</p>
      <p className="">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="c-auto flex flex-col md:flex-row justify-between items-center gap-8 p-8 md:py-24">
    <div className="flex-1 flex flex-col justify-center items-start">
      <SubHeading title="Awards & recognition" />
      <h1 className="text-2xl md:text-4xl text-white mb-8">Our Laurels</h1>

      <div className="grid grid-cols-2 gap-x-5 gap-y-5">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="flex justify-center items-center">
      <Image src={images.laurels} alt="laurels_img" width={500} height={500}/>
    </div>
  </div>
);

export default Laurels;
