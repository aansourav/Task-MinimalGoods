"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const Example = () => {
  const timeline = React.useRef()
  const container = React.useRef()

  const changeColor = (type) => {
    gsap.to(document.body, {
      backgroundColor : "#E8E2DA",
      scrollTrigger : {
        trigger : ".second",
        scrub : true
      }
      // scrollTrigger : 
    })
  }

  useGSAP(()=>{
    timeline.current = gsap.timeline({
      defaults : {
        ease : "none"
      }
    })
    .to(".second",{
      scrollTrigger : {
        onEnter : () => {
          console.log("enter")
          changeColor("first")
        }
      }
    })
  }, {
    scope : container
  })
  return (
    <div className='' ref={container}>
      <div className="w-full min-h-screen first"></div>
      <div className="w-full min-h-screen second"></div>
      <div className="w-full min-h-screen third"></div>
      <div className="w-full min-h-screen fourth"></div>
    </div>
  )
}

export default Example
