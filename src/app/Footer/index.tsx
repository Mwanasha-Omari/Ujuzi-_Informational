"use client";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FooterContent = () => {
  return (
<div id="footer">
<div className="flex flex-col lg:flex-row justify-evenly mt-48 px-4">
<h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left mb-24">
  Join us in<br />
  making<span className="text-primary-amber"> CBC <br />more easier</span>
</h1>
<img src="/Images/SISU teachers image.jpg"className="w-full h-auto lg:w-96 lg:h-80 mt-3.5 lg:mt-0 object-cover rounded-lg mb-24" alt="CBC teacher"
/>
</div> 
    <footer className="bg-primary-blue text-white py-8 md:py-12 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-semibold mb-4 text-primary-amber text-xl">Get In Touch</h2>
            <div className="flex items-center mb-4"> 
              <FaPhone className="mr-4 w-6 h-6 md:w-7 md:h-7" />
              <p className="text-base md:text-lg">+254 792 804 646</p>
            </div>               
            <div className="flex items-center mb-4"> 
              <MdEmail className="mr-4 w-6 h-6 md:w-7 md:h-7" />
              <p className="text-base md:text-lg">ujuzi@gmail.com</p>
            </div>
          </div>
          
          <div className="text-left md:text-center">
            <h2 className="font-semibold mb-4 text-primary-amber text-xl">About Us</h2>
            <p className="mb-4 text-base md:text-lg">Mission</p> 
            <p className="mb-4 text-base md:text-lg">Vision</p> 
          </div>
          
          <div className="text-left md:text-right">
            <h2 className="font-semibold mb-4 text-primary-amber text-xl">Location</h2>
            <div className="flex items-center mb-4 justify-start md:justify-end"> 
              <FaLocationDot className="mr-4 w-6 h-6 md:w-7 md:h-7" />
              <p className="text-base md:text-lg">Karen Hardy 616 Korongo Road</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" /> 
      <div className="text-center px-4">
        <p className="text-sm md:text-base">© Copyright @2024 CBC Ujuzi. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}

export default FooterContent;