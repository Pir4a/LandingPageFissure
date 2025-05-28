import { useState, useEffect } from 'react'
import fissureIcon from '../assets/FissureIcon.png'
import GlitchText from './TextAnimations/GlitchText/GlitchText'
import apple from "../assets/2025-05-22-154459_hyprshot.png"
import android from "../assets/2025-05-22-154509_hyprshot.png"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200); // Header becomes sticky after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed top-4 z-50 w-full transition-all duration-300'>
      <div className='flex h-16 items-center w-full justify-center'>
        <nav className={`flex items-center py-2 rounded px-8 justify-between gap-2  w-[100%] xl:w-[80%] transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/30 border-[1px] border-[#6365f175] rounded-xl backdrop-blur-md shadow-lg ' 
            : 'bg-transparent  border-[1px] border-[#00000000] rounded-xl'
        }`}>
          <div className='flex w-1/5 gap-6 justify-between items-center relative'>
            <div className='flex items-center gap-4 '>
              <img src={fissureIcon} alt="Fissure Icon" className='h-14 w-14 animate-electricpulse'/>
              <GlitchText speed={1.5} enableShadows={true} enableOnHover={false}>Fissure</GlitchText>
            </div>
          </div>
        
          {/* Burger Menu Button */}
          <button 
            className='lg:hidden flex flex-col gap-1.5 p-2'
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex text-white gap-12 text-xl font-bold'>
            <li><a href='#features'>Features</a></li>
            <li><a></a></li>
            <li><a>Pricing</a></li>
          </ul>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden fixed top-24 left-0 w-full bg-background/95 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}>
            <ul className='flex flex-col items-center py-8 gap-8 text-white text-xl font-bold'>
              <li><a href='#features' onClick={toggleMenu}>Features</a></li>
              <li><a onClick={toggleMenu}>Faq</a></li>
              <li><a onClick={toggleMenu}>Pricing</a></li>
            </ul>
          </div>

          <a className='hidden xl:flex gap-4 cursor-pointer' href='#qr'>
            <img className='rounded-xl w-40 h-14 ' src={apple} />
            <img className='rounded-xl h-14 w-40 ' src={android} />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Header