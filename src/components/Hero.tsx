import React from 'react';
import { TbBackground } from 'react-icons/tb'
import Navbar from './Navbar';
const Hero = () => {
  return (
    <div
      id='hero'
      className='min-h-screen bg-no-repeat bg-[url(/profile.jpeg)]  bg-cover'
      style={{ backgroundSize: "35%", backgroundPosition:"left 100px top 100px" }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-64px)]'>
         <div className='hidden lg:block'>
           
         </div> 
         <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p className='ext-xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500' data-aos="zoom-in-up">I, am</p>
            <p className='ext-xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500' data-aos="zoom-in-up">Mubashir</p>
            <p className='ext-xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500' data-aos="zoom-in-up">Abdullah</p>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Hero;
