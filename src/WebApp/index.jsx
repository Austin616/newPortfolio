import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import AboutMe from '../Components/AboutMe/AboutMe'
import Experience from '../Components/Experience/Experience'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'


export default function index () {
  return (
    <div>
      {/* <Header /> */}
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

