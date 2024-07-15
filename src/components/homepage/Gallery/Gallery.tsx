import SubHeading from "../Header/SubHeading";
import PhotoSlide from "./PhotoSlide";

const Gallery = () => {
  return (
    <div className="c-auto flex flex-col md:flex-row items-center gap-8 p-8 md:py-24">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-start gap-5">
          <SubHeading title="Instagram" />
          <h1 className=" text-2xl md:text-4xl text-yellow-500">
            Photo Gallery
          </h1>
          <p className="text-justify">
            Welcome to the Favor and Sip gallery, where every picture tells a
            story of culinary passion and artistry. Browse through our
            collection of vibrant images showcasing our exquisite dishes, cozy
            ambiance, and delightful moments shared by our guests. Each
            photograph captures the essence of our commitment to quality and
            hospitality. Whether it&apos;s a beautifully plated entrée, a
            refreshing drink, or a festive gathering, our gallery offers a
            glimpse into the unforgettable experiences we create at Favor and
            Sip.
          </p>
          <button type="button" className="button-main">
            View More
          </button>
        </div>
      </div>
      <PhotoSlide />
    </div>
  );
};

export default Gallery;
