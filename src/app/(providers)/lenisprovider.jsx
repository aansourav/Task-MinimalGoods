"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
export const LenisProvider = ({ children }) => {
  const lenisOptions = {
    lerp: 4,
    duration: 1.5,
    smoothTouch: true, //smooth scroll for touch devices
    smooth: true,

  };
  return (
    <ReactLenis
    root
    options={lenisOptions}
    >
      { children }
    </ReactLenis>
  )
}