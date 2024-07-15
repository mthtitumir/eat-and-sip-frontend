const Footer = () => (
  <div className="c-auto grid grid-cols-3 p-8 md:py-24">
    <div className="col-span-3 md:col-span-1 text-center p-5 text-xs">
      <h1 className="text-2xl text-amber-600">Contact Us</h1>
      <p>4567 Dhaka Street, Apartment 101 Gulshan, Dhaka 1212, Bangladesh</p>
      <p>+880 (171) 123-4567</p>
      <p>+880 (171) 123-4568</p>
    </div>
    <div className="col-span-3 md:col-span-1 text-center p-3 text-xs flex flex-col gap-5">
      <h1 className="text-4xl text-amber-600">Eat & Sip</h1>
      <p className="uppercase">
        where every meal is a celebration of taste and every sip is a journey of
        delight
      </p>
      <p>
        {new Date().getFullYear()} Eat & Sip, Al right reserved by{" "}
        <a href="https://mth-titumir.vercel.app/">M. T. H. Titumir</a>
      </p>
    </div>
    <div className="col-span-3 md:col-span-1 text-center p-5 text-xs">
      <h1 className="text-2xl text-amber-600">Working Hours</h1>
      <p className="">Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="">Sat - Sun: 10:00 am - 03:00 am</p>
    </div>
  </div>
);

export default Footer;
