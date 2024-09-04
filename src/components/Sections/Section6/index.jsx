import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from "react";
import Section from "../../SectionLayout";
import grafismo02 from "/assets/images/grafismo_02.png";
import icone01 from "/assets/images/icone_01.png";
import icone02 from "/assets/images/icone_02.png";
import icone03 from "/assets/images/icone_03.png";
import icone04 from "/assets/images/icone_04.png";
import nossasRedes from "/assets/images/nossas_redes.png";

const Section6 = () => {


      React.useLayoutEffect(() => {
            gsap.registerPlugin(useGSAP, ScrollTrigger);

            gsap.to('.fade-down-section-6', {
                  opacity: 1,
                  scrollTrigger: {
                        trigger: '.section-6',
                        start: "40% bottom",
                        end: "90% 90%",
                        scrub: true,
                        markers: true,
                  },
            })
      }, [])

      return (
            <Section className="section-6 bg-white flex justify-center items-center relative overflow-hidden">
                  <div className="fade-down-section-6 opacity-0 flex flex-col sm:flex-row items-center gap-[2rem]">
                        <div className="w-1/2 sm:w-1/3 shrink-0 flex justify-center">
                              <img src={nossasRedes}  />
                        </div>
                        <div className="flex flex-col gap-[1rem] ">
                              <div className="flex gap-[1rem]">
                                    <img src={icone01} className="w-[rem] h-[2.5rem]" />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                              </div>
                              <div className="flex gap-[1rem]">
                                    <img src={icone02} className="w-[2.5rem] h-[2.5rem]" />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                              </div>
                        </div>
                        <div className="flex flex-col gap-[1rem]">
                              <div className="flex gap-[1rem]">
                                    <img src={icone03} className="w-[2.5rem] h-[2.5rem]" />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                              </div>
                              <div className="flex gap-[1rem]">
                                    <img src={icone04} className="w-[2.5rem] h-[2.5rem]" />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                              </div>
                        </div>
                  </div>
                  <img
                        src={grafismo02}
                        className="hidden sm:block absolute top-[-12.5%] right-[-2%]"
                  />
                  <img
                        src={grafismo02}
                        className="hidden sm:block absolute bottom-[-10%] left-[-3%]"
                  />
            </Section>
      )
}

export default Section6