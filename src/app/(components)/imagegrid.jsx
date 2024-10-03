"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Parallax } from './parallax'

gsap.registerPlugin(ScrollTrigger);


const ImageGrid = () => {
  return (
    <div className='flex flex-row h-full gridd'>
      <div className='w-[30%] h-full px-2 sm:px-5 pt-32'>
        <Parallax
        speed={-3}
        >
          <img src="/images/img1.jpeg" alt="" className="object-cover object-center w-full h-full img1" />
        </Parallax>
      </div>
      <div className='w-[25%] h-full px-2 sm:px-5 pt-48'>
        <Parallax
        speed={-2}
        >
          <img src="/images/img2.jpeg" alt="" className="object-cover object-center w-full h-full img2" />
        </Parallax>
      </div>
      <div className='w-[15%] h-full px-2 sm:px-5 pt-[6rem]'>
        <Parallax
        speed={-2.1}
        >
          <img src="/images/img3.jpeg" alt="" className="object-cover object-center w-full h-full img3" /> 
        </Parallax>
      </div>
      <div className='w-[30%] h-full px-2 sm:px-5 pt-32'>
        <Parallax
        speed={-3}
        >
          <img src="/images/img4.jpeg" alt="" className="object-cover object-center w-full h-full img1" />
        </Parallax>
      </div>
    </div>
  )
}

export default ImageGrid
