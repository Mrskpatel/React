import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Values'
import Countss from './components/Countss'
import Features from './components/Features'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Template() {
  return (
    <>
        <Nav/>
        <Hero/>
        <About/>
        <Values/>
      <Countss/>
      <Features/>
      <Services/>
      <Pricing/>
      <Faq/>
      <Portfolio/>
      <Team/>
      <Blog/>
      <Contact/>
      <Footer/> 
    </>
  )
}

export default Template