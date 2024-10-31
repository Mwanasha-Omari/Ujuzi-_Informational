"use client";
import React from 'react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div id='home' className='relative h-screen'>
      <div className='absolute inset-0'>
        <Image 
          src="/Images/SISU IMAGE.jpg" 
          alt="Landing Image" 
          fill
          priority
          className="object-cover"/>
      </div>
      <div className="relative h-full bg-primary-blue/70 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Get Started Today<br />
            Discover about CBC training and management
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            Join us to learn more about the future of education.
          </p>
          <button className="border-2 border-primary-amber text-primary-amber 
                           px-8 py-4 text-lg sm:text-xl font-semibold rounded-md 
                           hover:bg-primary-amber hover:text-white 
                           transition-colors duration-300 
                           transform hover:scale-105">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;