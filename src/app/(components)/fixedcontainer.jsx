"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import "./fixedcontainer.css";

gsap.registerPlugin(ScrollTrigger);

const FixedContainer = () => {
    const container = React.useRef();
    const gridContainerRef = React.useRef();
    const timeline = React.useRef();
    const [currentColor, setCurrentColor] = React.useState("#2E2A27");
    const [textColor, setTextColor] = React.useState("#E8E2DA");
    const [scrolllDirection, setScrollDirection] = React.useState("down");
    const [type, setType] = React.useState("");

    timeline.current = useGSAP(() => {
        const sections = gsap.utils.toArray("section");
        gsap.set("section", {
            zIndex: (i, target, targets) => targets.length - i,
        });
        gsap.timeline({
            defaults: {
                // duration : 3
            },
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: `+=${sections.length * 110}%`,
                pin: true,
                scrub: 3,
                onUpdate: (self) => {
                    // console.log(self.direction)
                    console.log(window.innerHeight);
                    const currentSection = Math.floor(
                        self.scroll() / window.innerHeight
                    );
                    console.log(currentSection);
                    updateBackgroundColor(currentSection, self.scroll());
                },
            },
        })
            .to(".second", {
                opacity: 0,
                delay: 20,
                autoAlpha: 0,
            })
            .to(".third", {
                opacity: 0,
                delay: 20,
                autoAlpha: 0,
            })
            .to(".fourth", {
                opacity: 0,
                delay: 20,
                autoAlpha: 0,
            })
            .to(".fifth", {
                opacity: 0,
                delay: 20,
                autoAlpha: 0,
            });

        gsap.fromTo(
            ".gridd",
            {
                yPercent: 100,
            },
            {
                yPercent: -sections.length * 200,
                scrollTrigger: {
                    trigger: gridContainerRef.current,
                    start: "top top",
                    end: `+=${sections.length * 200}%`,
                    scrub: 2.5,
                    pin: false,
                },
            }
        );
    }, {});

    const updateBackgroundColor = (currentIndex, scrollPosition) => {
        const newScrollDirection =
            scrollPosition > gsap.getProperty(container.current, "y")
                ? "down"
                : "up";
        setScrollDirection(newScrollDirection);

        switch (currentIndex) {
            case 3:
                setCurrentColor("#2E2A27");
                break;
            case 4:
                setCurrentColor(
                    scrolllDirection === "down" ? "#E8E2DA" : "#2E2A27"
                );
                break;
            case 5:
                setCurrentColor(
                    scrolllDirection === "down" ? "#2E2A27" : "#E8E2DA"
                );
                break;
            case 6:
                setCurrentColor(
                    scrolllDirection === "down" ? "#E8E2DA" : "#2E2A27"
                );
                break;
            case 7:
                setCurrentColor(
                    scrolllDirection === "down" ? "#2E2A27" : "#E8E2DA"
                );
                break;
            default:
                setCurrentColor("#2E2A27");
        }
    };

    const changeStyle = () => {
        gsap.to([document.body, ".second", ".third", ".fourth", ".fifth"], {
            backgroundColor: currentColor,
            color: currentColor === "#2E2A27" ? "#E8E2DA" : "#2E2A27",
        });
    };

    React.useEffect(() => {
        // document.body.style.backgroundColor = currentColor
        changeStyle();
    }, [currentColor]);

    return (
        <>
            <div
                className="relative mt-[700px] bg-transparent text-[17vw] leading-tight tracking-tighter font-bold mx-auto"
                ref={container}
            >
                <div
                    className="absolute w-full min-h-[200vh] space-y-16 top-0 left-0 grid1 z-[1000] container1 text-xl leading-normal tracking-normal"
                    ref={gridContainerRef}
                >
                    {/* <ImageGrid />
          <ImageGrid />
          <ImageGrid />
          <ImageGrid />
          <ImageGrid /> */}
                </div>
                <section class="second panel absolute z-[1000] flex items-end justify-start text-customWhite h-[100vh] w-full red bg-customGray max-w-[90%] top-0 left-1/2 -translate-x-1/2">
                    <h1 className="">Furniture</h1>
                </section>
                <section class="third panel absolute z-[1000] flex items-end justify-start text-customWhite h-[100vh] w-full orange bg-customGray max-w-[90%] top-0 left-1/2 -translate-x-1/2">
                    <h1>Decor</h1>
                </section>
                <section class="fourth panel absolute z-[1000] flex items-end justify-start text-customWhite h-[100vh] w-full purple bg-customGray max-w-[90%] top-0 left-1/2 -translate-x-1/2">
                    <h1>Office</h1>
                </section>
                <section class="fifth panel absolute z-[1000] flex items-end justify-start text-customWhite h-[100vh] w-full green bg-customGray max-w-[90%] top-0 left-1/2 -translate-x-1/2">
                    <h1>Tech</h1>
                </section>
            </div>
        </>
    );
};

export default FixedContainer;
