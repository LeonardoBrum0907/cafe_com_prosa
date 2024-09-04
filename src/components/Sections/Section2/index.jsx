import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import Section from '../../SectionLayout';
import grafismo from "/assets/images/grafismo_01.png";
import kingsland from "/assets/images/logo_01.png";
import kingslandInternational from "/assets/images/logo_02.png";
import parceiros from "/assets/images/parceiros.png";


const Section2 = () => {
      const el = React.useRef();
      const tl = React.useRef();

      React.useLayoutEffect(() => {
            gsap.registerPlugin(useGSAP, ScrollTrigger);

            gsap.to('.left', {
                  x: 0,
                  opacity: 1,
                  scrollTrigger: {
                        trigger: '.animation',
                        start: "top bottom",
                        end: "80% 90%",
                        scrub: true,
                        // markers: true,
                  },
            })

            const ctx = gsap.context(() => {
                  tl.current = gsap.timeline({
                        scrollTrigger: {
                              trigger: ".animation-timeline",
                              scrub: true,
                              // markers: true,
                              start: "top bottom",
                              end: "80% 90%",
                        }
                  })
                        .fromTo("#animation-item-1", {
                              opacity: 0,
                              y: 160,
                        }, {
                              opacity: 1,
                              y: 0,
                        })
                        .fromTo("#animation-item-2", {
                              opacity: 0,
                              y: 160,
                        }, {
                              opacity: 1,
                              y: 0,
                        })
                        // .fromTo("#animation-item-3", {
                        //       opacity: 0,
                        //       x: 160,
                        // }, {
                        //       opacity: 1,
                        //       x: 0,
                        // })
            }, el)

            return () => {
                  gsap.killTweensOf('.animation-timeline');
            }
      }, [])

      return (
            <Section id="section-2" className="bg-blue-700 flex flex-col items-center justify-center gap-9 relative">
                  <div className="animation flex justify-center">
                        <img src={parceiros} alt="Parceiros" className="w-2/3 sm:w-80 left" />
                  </div>
                  <div ref={el} className="flex flex-col w-full sm:flex-row gap-20 text-white">
                        <div id="animation-item-1" className="animation-timeline flex items-center flex-col gap-8 ease-in-out duration-200">
                              <img src={kingsland} alt="Kingsland" className="w-full" />
                              <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                                    mauris nisi. Phasellus sit amet interdum nunc. Integer id quam sed
                                    nibh volutpat lacinia. Sed egestas ligula in efficitur luctus.
                                    Suspendisse potenti. Vestibulum id placerat lacus. Donec ultricies
                                    condimentum faucibus. Integer congue ex nunc, vel pharetra felis
                                    dignissim sed.{" "}
                              </p>
                        </div>
                        <div id="animation-item-2" className="animation-timeline flex items-center flex-col gap-8 ease-in-out duration-200">
                              <img
                                    src={kingslandInternational}
                                    alt="Kingsland international people groups"
                                    className="w-full"
                              />
                              <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                                    mauris nisi. Phasellus sit amet interdum nunc. Integer id quam sed
                                    nibh volutpat lacinia. Sed egestas ligula in efficitur luctus.
                                    Suspendisse potenti. Vestibulum id placerat lacus. Donec ultricies
                                    condimentum faucibus. Integer congue ex nunc, vel pharetra felis
                                    dignissim sed.
                              </p>
                        </div>
                  </div>
                  <img
                        src={grafismo}
                        className="hidden sm:block sm:absolute sm:left-[-8%] sm:bottom-[-4%]"
                  />
                  <img
                        src={grafismo}
                        className="hidden sm:block sm:absolute sm:top-[-17%] sm:right-[-3%]"
                  />
            </Section>
      )
}

export default Section2