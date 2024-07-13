import AboutUs from '@/components/homepage/AboutUs/AboutUs'
import Footer from '@/components/homepage/Footer/Footer'
import Header from '@/components/homepage/Header/Header'
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
        <Footer />
    </div>
  )
}

export default MainHomePage
// colors 
// #DCCA87