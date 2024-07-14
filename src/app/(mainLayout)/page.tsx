import AboutUs from '@/components/homepage/AboutUs/AboutUs'
import Chef from '@/components/homepage/Chef/Chef'
import FindUs from '@/components/homepage/Findus/FindUs'
import Gallery from '@/components/homepage/Gallery/Gallery'
import Header from '@/components/homepage/Header/Header'
import Intro from '@/components/homepage/Intro/Intro'
import Laurels from '@/components/homepage/Laurels/Laurels'
import Navbar from '@/components/homepage/Navbar/Navbar'
import Newsletter from '@/components/homepage/NewsLetter/Newsletter'
import SpecialMenu from '@/components/homepage/SpecialMenu/SpecialMenu'
import FooterOverlay from '@/components/shared/Footer/FooterOverlay'
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
        {/* <Laurels />
        <Gallery />
        <FindUs />
        <Newsletter />
        <FooterOverlay /> */}
    </div>
  )
}

export default MainHomePage
// colors 
// #DCCA87