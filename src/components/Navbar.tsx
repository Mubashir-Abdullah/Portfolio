import React from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
      <div 
  className='text-xl font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out'
>
  Mubashir
</div>


        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink'>
            <a href='#hero' className='text-xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500'>Home</a>
          </li>
          <li className='menuLink'>
            <a href='#about' className='text-xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500'>About</a>
          </li>
          <li className='menuLink'>
            <a href='#projects' className='text-xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500'>Projects</a>
          </li>
          <li className='menuLink'>
            <a href='#skills' className='text-xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500'>Skills</a>
          </li>
          <li className='menuLink'>
            <a href='#contact' className='text-xl font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500'>Contact</a>
          </li>
        </ul>
        <div className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>
      </div>

      {isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden backdrop-blur-sm bg-white/50 p-4 rounded-lg'>
        <li className='menuLink'>
          <a href="#hero" onClick={toggleMenu}> Home</a>
        </li>
      
        <li className='menuLink'>
          <a href="#about" onClick={toggleMenu}> About</a>
        </li>
      
        <li className='menuLink'>
          <a href="#projects" onClick={toggleMenu}> Projects</a>
        </li>
      
        <li className='menuLink'>
          <a href="#skills" onClick={toggleMenu}> Skills</a>
        </li>
      
        <li className='menuLink'>
          <a href="#contact" onClick={toggleMenu}> Contact</a>
        </li>
      
        <li className='menuLink'>
          <a href="#hero" onClick={toggleMenu}> Home</a>
        </li>
      </ul>
      
      
      
      )}
    </div>
  );
}

export default Navbar;
