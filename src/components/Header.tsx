import React from 'react'
import fissureIcon from '../assets/FissureIcon.png'
import GlitchText from './TextAnimations/GlitchText/GlitchText'

function Header() {
  return (
    <div className='sticky top-6 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={fissureIcon} alt="Fissure Icon" className='h-12 w-12 animate-electricpulse duration-[]'/>
          <GlitchText speed={1.8} enableShadows={true} enableOnHover={false}>Fissure</GlitchText>
        </div>
      </div>
    </div>
  )
}

export default Header