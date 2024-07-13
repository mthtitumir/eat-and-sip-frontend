import Image from 'next/image';
import { images } from '@/constants';

const SubHeading = ({ title }: {title: string}) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="text-xl">{title}</p>
    <Image height={20} width={60} alt='spoon image' src={images.spoon} />
  </div>
);

export default SubHeading;
