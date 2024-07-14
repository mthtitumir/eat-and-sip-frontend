import React from 'react';
import SubHeading from '../Header/SubHeading';

const Newsletter = () => (
  <div className="p-8 md:py-24 c-auto border-main rounded flex flex-col md:flex-row items-center gap-5">
    <div className="w-full md:w-1/2">
      <SubHeading title="Newsletter" />
      <h1 className="text-2xl md:text-4xl my-4">Subscribe To Our Newsletter</h1>
      <p className="text-gray-400 mt-4">And never miss latest Updates!</p>
    </div>
    <div className="w-full md:w-1/2 flex flex-col items-center gap-3">
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="w-full border-main bg-inherit rounded p-3 text-base text-white"
      />
      <button type="button" className="md:w-full button-main">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
