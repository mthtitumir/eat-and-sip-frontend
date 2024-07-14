import AboutUs from '@/components/homepage/AboutUs/AboutUs'
import Chef from '@/components/homepage/Chef/Chef'
import Footer from '@/components/homepage/Footer/Footer'
import Gallery from '@/components/homepage/Gallery/Gallery'
import Header from '@/components/homepage/Header/Header'
import Intro from '@/components/homepage/Intro/Intro'
import Laurels from '@/components/homepage/Laurels/Laurels'
import Navbar from '@/components/homepage/Navbar/Navbar'
import SpecialMenu from '@/components/homepage/SpecialMenu/SpecialMenu'
import React from 'react'

const MainHomePage = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <Footer />
    </div>
  )
}

export default MainHomePage
// colors 
// #DCCA87