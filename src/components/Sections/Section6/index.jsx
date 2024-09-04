import Section from "../../SectionLayout";
import grafismo02 from "/assets/images/grafismo_02.png";
import icone01 from "/assets/images/icone_01.png";
import icone02 from "/assets/images/icone_02.png";
import icone03 from "/assets/images/icone_03.png";
import icone04 from "/assets/images/icone_04.png";
import nossasRedes from "/assets/images/nossas_redes.png";


const Section6 = () => {

      // React.useLayoutEffect(() => {
      //       gsap.registerPlugin(useGSAP, ScrollTrigger);
      //       gsap.to('.left', {
      //             x: 0,
      //             opacity: 1,
      //             scrollTrigger: {
      //                   trigger: '.animation',
      //                   start: 'top center',
      //                   end: 'center 300px',
      //                   scrub: true,
      //                   markers: true,
      //             },
      //       })

      //       return () => {
      //             gsap.killTweensOf('.left');
      //       }
      // }, [])

      return (
            <Section className="section bg-white flex justify-center items-center relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center gap-[2rem]">
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