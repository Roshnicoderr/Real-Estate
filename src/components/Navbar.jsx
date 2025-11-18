import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobilemenu, setShowMobilemenu] = useState(false);

  // Check if current page is homepage
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

  useEffect(() => {
    if (showMobilemenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobilemenu]);

  return (
    <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isHomePage ? 'bg-transparent' : 'bg-black bg-opacity-70 backdrop-blur-md shadow-md'}`}>
      <div className='container mx-auto flex justify-between items-center px-4 py-6 md:px-20 lg:px-32'>
        <img src={assets.logo} alt="logo" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white text-black px-8 py-2 rounded-4xl'>Sign up</button>
        <img src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="menu" onClick={() => setShowMobilemenu(true)} />
      </div>

      <div className={`md:hidden ${showMobilemenu ? 'fixed w-full h-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img src={assets.cross_icon} alt="close" className='w-6' onClick={() => setShowMobilemenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-2 mx-5 px-2 text-lg font-medium'>
          <a onClick={() => setShowMobilemenu(false)} href="#header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setShowMobilemenu(false)} href="#about" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMobilemenu(false)} href="#projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setShowMobilemenu(false)} href="#testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
