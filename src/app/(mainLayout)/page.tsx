import Navbar from '@/components/shared/Navbar/Navbar'
import Footer from '@/components/shared/Footer/Footer'
import AboutUs from '@/components/homepage/AboutUs/AboutUs'
import Chef from '@/components/homepage/Chef/Chef'
import FindUs from '@/components/homepage/Findus/FindUs'
import Gallery from '@/components/homepage/Gallery/Gallery'
import Header from '@/components/homepage/Header/Header'
import Intro from '@/components/homepage/Intro/Intro'
import Laurels from '@/components/homepage/Laurels/Laurels'
import Newsletter from '@/components/homepage/NewsLetter/Newsletter'
import SpecialMenu from '@/components/homepage/SpecialMenu/SpecialMenu'

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
        <FindUs />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default MainHomePage
// colors 
// #DCCA87
//pink F7163E