import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion"

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  const nextProject = () => {
    if (currentIndex + cardsToShow < projectsData.length) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const preProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // Handle responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2)
      } else {
        setCardsToShow(4)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div 
    initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-800 mb-8 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies—Explore Our Portfolio.
      </p>

      {/* Slider Buttons */}
      <div className='flex justify-end mb-8'>
        <button
          onClick={preProject}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Previous Projects'
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button
          onClick={nextProject}
          className='p-3 bg-gray-200 rounded'
          aria-label='Next Projects'
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Slider */}
      <div className='overflow-hidden ' id='projects'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`, width: `${(projectsData.length * 100) / cardsToShow}%` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 lg:w-1/4 px-2'
              style={{ flexShrink: 0 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-72 object-cover rounded-md shadow mb-4'
              />
              <div className='bg-white px-4 py-2 shadow-md text-center'>
                <h2 className='text-xl font-semibold text-gray-800'>
                  {project.title}
                </h2>
                <p className='text-gray-500 text-sm'>
                  {project.price} <span>|</span> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Project
