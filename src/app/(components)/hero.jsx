"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "../gsap";
import Header from "./header";

const Hero = () => {
    const container = useRef();
    const hero = useRef();
    useGSAP(
        () => {
            console.log(hero.current.clientHeight);
            gsap.from(".text1", {
                fontSize: "13vw",
                y: "-120px",
                duration: 5,
                position: "absolute",
                left: "0%",
                // transformOrigin : "50% 50%",
                scrollTrigger: {
                    scrub: 2.5,
                    trigger: container.current,
                    start: "top top",
                    end: () => "+=" + hero.current.clientHeight,
                },
            });
        },
        {
            scope: container,
        }
    );

    return (
        <div className="" ref={container}>
            <div
                className="min-h-screen w-full border-red-500 bg-[url(/images/hero.jpeg)] bg-no-repeat bg-cover bg-center"
                ref={hero}
            />
            <Header />
            {/* <div className='d min-h-svh w-full bg-customGray'></div> */}
        </div>
    );
};

export default Hero;
