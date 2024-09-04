import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Section from '../../SectionLayout';
import imagem01 from "/assets/images/imagem_01.png";
import quemSomos from "/assets/images/quem_somos.png";
import cafeComProsa from "/assets/images/selo01.png";

const Section1 = () => {
      useGSAP(() => {
            gsap.fromTo('.fade-in', {
                  opacity: 0,
                  y: 100,
                  delay: 0.5,
                  duration: 0.2,
            }, {
                  opacity: 1,
                  y: 0,
                  delay: 0.5,
                  duration: 0.2,
            })
      }, [])

      return (
            <>
                  <Section id="section-1" className="mt-[5rem]">
                        <div className="fade-in flex justify-center">
                              <img
                                    src={cafeComProsa}
                                    alt="café com prosa"
                                    className="w-full max-w-[900px]"
                              />
                        </div>

                        <div className="fade-in flex flex-col items-center sm:flex-row gap-8 sm:gap-16 mt-20">
                              <img src={quemSomos} alt="" className="w-[50%] sm:w-full" />

                              <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                                    mauris nisi. Phasellus sit amet interdum nunc. Integer id quam sed
                                    nibh volutpat lacinia. Sed egestas ligula in efficitur luctus.
                                    Suspendisse potenti. Vestibulum id placerat lacus. Donec ultricies
                                    condimentum faucibus. Integer congue ex nunc, vel pharetra felis
                                    dignissim sed. Sed et malesuada arcu. Maecenas a est malesuada quam
                                    lacinia dictum. Aenean mattis, augue vitae pellentesque tincidunt,
                                    orci justo placerat lectus, quis aliquet lectus leo eget mauris.
                                    Pellentesque fringilla, nisl id bibendum convallis, tellus purus
                                    mollis ante, sit amet auctor lacus eros vitae erat. Proin ut lectus
                                    nec libero faucibus luctus.
                              </p>
                        </div>
                  </Section>
                  <img src={imagem01} alt="café com prosa" className="w-full" />
            </>
      )
}

export default Section1