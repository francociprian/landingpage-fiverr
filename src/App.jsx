import React, { useState, useEffect } from 'react'
import './App.css'

//Data
import JsonData  from './data/data.json';
//Components
import Navigation from './components/Navigation'
import { Header } from './components/Header';
import  Features  from './components/Features';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Galery';
import { Testimonials } from './components/Testimonials';
import  Testimonios  from './components/Testimonios';
import { Footer } from './components/Footer'
import AboutUs from './components/AboutUs';
import Service from './components/Service';

function App() {

  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div >
      <Navigation/>
      <Header />
      <Features />
      <AboutUs />
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      <Service/>
      {/* <Gallery /> */}
      {/* <Testimonials data={landingPageData.Testimonials}/> */}
      <Testimonios data={landingPageData.Testimonials}/>
      <Footer />
    </div>
  )
}

export default App
