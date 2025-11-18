import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testimonial from './components/testimonial'
import ContactUs from './components/ContactUs'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className=' w-full overflow-y-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
    </div>
    
  )
}

export default App