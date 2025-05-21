import React, { useState, useEffect } from 'react'
import fissureIcon from '../assets/FissureIcon.png'
import GlitchText from './TextAnimations/GlitchText/GlitchText'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200); // Header becomes sticky after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-4 z-50 w-full transition-all duration-300'>
      <div className='flex h-16 items-center w-full justify-center'>
        <nav className={`flex items-center py-2 rounded px-8 justify-between gap-2 w-[80%] transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/30 border-[1px] backdrop-blur-md shadow-lgi ' 
            : 'bg-transparent border-[1px]'
        }`}>
          <div className='flex w-1/5 gap-6 justify-between items-center relative'>
            <div className='flex items-center gap-4 '>
              <img src={fissureIcon} alt="Fissure Icon" className='h-14 w-14 animate-electricpulse'/>
              <GlitchText speed={1.5} enableShadows={true} enableOnHover={false}>Fissure</GlitchText>
            </div>
          </div>
        
          <ul className='text-white flex gap-2'>
            <li>Features</li>
            <li>Faq</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header