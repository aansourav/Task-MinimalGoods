"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const StickyCircle = () => {
    const container = useRef();
    const timeline = useRef();

    useGSAP(() => {
        console.log(container.current);
        timeline.current = gsap.timeline({
            defaults: {
                ease: "power3.inOut",
            },
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: () => `+=${container.current.clientHeight}`,
                scrub: 2.5,
                pin: true,
                pinSpacing: false,
            },
        });

        timeline.current
            .to(".circle", {
                delay: 5,
                borderRadius: 0,
                backgroundSize: "auto",
                width: "100%",
                height: "100%",
            })
            .to("body", {
                backgroundColor: "#E8E2DA !important",
                // border : "1px solid black"
            });
    }, []);
    return (
        <div className="h-screen w-full">
            <div
                className="w-full h-full flex items-center justify-center overflow-hidden"
                ref={container}
            >
                <div className="w-[30rem] h-[30rem] rounded-full overflow-hidden circle relative flex items-center justify-center">
                    <img
                        className="-z-[1] min-w-[90vw] mx-auto w-[90vw] min-h-screen max-w-none h-screen object-cover object-center relative align-middle inline-block"
                        src="/images/chair.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default StickyCircle;
