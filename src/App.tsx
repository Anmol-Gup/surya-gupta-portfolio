import './App.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/child/CustomCursor';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  },[])

  return (<>
    <div className='bg-[#0b132b] w-full min-h-screen cursor-none'>
      <CustomCursor />
      <Header />
      <section className='bg-[#0b132b]'>
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <ScrollToTop />
      </section>
      <Footer />
    </div>
  </>
  )
}

export default App
