import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Approach from '@/components/Approach'
import { Skills } from '@/components/skill'
import React from 'react'
import Contact from '@/components/Contact'
import AboutMe from '@/components/AboutMe'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'


function Home() {
  return (
    <div>
      <Header/>
      <div id='home' className=' w-screen mt-20'>
        <Hero/>
      </div>
      <div id="portfolio" className="h-full mt-[16px] w-screen flex items-center justify-center">
        <Portfolio/>
      </div>
      <div id="about" className="h-full mt-[16px] w-screen flex items-center justify-center">
        <AboutMe/>
      </div>
      <div id="skills" className="h-full w-screen mt-[16px] flex items-center justify-center">
        <Skills/>
      </div>
      <div id="skills" className="h-full w-screen mt-[16px] flex items-center justify-center">
        <Approach/>
      </div>

      <div id="contact" className="h-full w-screen mt-[16px] flex items-center justify-center">
        <Contact/>
      </div>
      <div id="footer" className="h-full w-screen mt-[16px] flex items-center justify-center">
        <Footer/>
      </div>


    </div>
  )
}

export default Home

