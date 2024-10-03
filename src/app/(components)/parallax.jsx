"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useWindowSize } from '@studio-freight/hamo'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export const Parallax = ({ children, className, speed = 1, id = "parallax" }) => {
  const trigger  = useRef();
  const target = useRef();
  const timeline = useRef();
  const { width: windowWidth } = useWindowSize()

  useGSAP(()=>{
    const y = windowWidth * speed * .1;
    // console.log(target.current)
    const targets = gsap.utils.toArray(target.current)
    // console.log(targets)
    const setY = gsap.quickSetter(target.current, "y", "px")

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current, // this is the element that will trigger the animation
        scrub: 6, // this will make the animation smooth and not jumpy when scrolling up and down the page
        start: "top bottom", // this means the animation will start when the top of the trigger element reaches the bottom of the viewport 
        end: "bottom top", // this means the animation will end when the bottom of the trigger element reaches the top of the viewport
        onUpdate: (e) => {
          // console.log(e.progress * y)
          setY(e.progress * y);
        },
        // markers : true
      },
    });

  }, {
    dependencies : [id, speed, windowWidth]
  })

  return (
    <div ref={trigger} className={className}>
      <div className='' ref={target}>
        { children }
      </div>
    </div>
  )
}
