import gsap from "gsap"

import ScrollTrigger from "gsap/ScrollTrigger"
import Draggable from "gsap/Draggable"
import { TextPlugin } from "gsap/all"
import { SplitText } from "gsap-trial/SplitText"

gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin, SplitText)

export { gsap }