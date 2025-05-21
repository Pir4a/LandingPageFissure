import React from 'react'
import fissureIcon from '../assets/FissureIcon.png'
import GlitchText from './TextAnimations/GlitchText/GlitchText'

function Header() {
  return (
    <div className='sticky top-6 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <nav className='flex items-center gap-2 px-12'>
          <div className='flex gap-6 justify-between items-center'>
          <img src={fissureIcon} alt="Fissure Icon" className='h-14 w-14 animate-electricpulse duration-[]'/>
          <GlitchText speed={2} enableShadows={true} enableOnHover={false}>Fissure</GlitchText></div>
        </nav>
      </div>
    </div>
  )
}

export default Header