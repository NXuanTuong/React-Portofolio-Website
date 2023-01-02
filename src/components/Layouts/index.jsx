import About from '../about/About'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Home from '../home/Home'
import Portfolio from '../portfolio/Portfolio'
import Pricing from '../pricing/Pricing'
import Services from '../services/Services'
import Testimonials from '../testimonials/Testimonials'

const Layouts = () => {
  return (
    <>
        <Header />
      <Home />
      <About />
      <Services />
      <Experience />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default Layouts