"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

const HeaderContainer = () => {
    const container = useRef();
    useGSAP(
        () => {
            const sections = gsap.utils.toArray(".text");
            sections.map((section, i) => {
                const splitText = new SplitText(section, {
                    type: "words,chars,lines",
                });
                gsap.to(splitText.words, {
                    y: 150,
                    duration: 3,
                    scrollTrigger: {
                        scrub: 2.5,
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        // markers : true
                    },
                });
            });
        },
        {
            scope: container,
        }
    );
    return (
        <>
            <div
                className="h-fit w-full text-[10vw] text-center pt-10 borde text-white leading-none"
                ref={container}
            >
                <h1 className="font-semibold !p-0 !m-0 block tracking-tighter leading-none animtext1 overflow-hidden text">
                    Discover
                </h1>
                <h1 className="font-normal tracking-tighter !p-0 !m-0 block leading-none italic animtext2 overflow-hidden text">
                    the best in
                </h1>
                <h1 className="font-semibold !p-0 !m-0 block tracking-tighter leading-none animtext overflow-hidden text animtext3">
                    minimal
                </h1>
                <h1 className="font-semibold !p-0 !m-0 block tracking-tighter leading-none animtext4 overflow-hidden text">
                    design
                </h1>
            </div>
            {/* <div className='min-h-screen w-full'></div> */}
        </>
    );
};

export default HeaderContainer;
