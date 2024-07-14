import React from 'react';
import SubHeading from '../Header/SubHeading';

const Newsletter = () => (
  <div className="p-8 md:p-16 bg-black c-auto border-main">
    <div className="">
      <SubHeading title="Newsletter" />
      <h1 className="text-4xl md:text-5xl my-4">Subscribe To Our Newsletter</h1>
      <p className="text-gray-400 mt-4">And never miss latest Updates!</p>
    </div>
    <div className="flex flex-col items-center gap-5 mt-12">
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="w-full md:w-2/3 border border-golden rounded p-3 text-base text-white bg-black mr-0 md:mr-8 mb-4 md:mb-0"
      />
      <button type="button" className="button-main">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
