import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Team from './components/Team'
import Call from './components/Call'
import Recent from './components/Recent'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Templates() {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Clients/>
        <About/>
        <Services/>
        <Features/>
        <Portfolio/>
        <Pricing/>
        <Faq/>
        <Team/>
        <Call/>
        <Recent/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Templates