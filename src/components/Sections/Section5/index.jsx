import Section from "../../SectionLayout";
import cafeteira from "/assets/images/cafeteira.png";
import calendario from "/assets/images/calendario.png";
import losangulo from "/assets/images/grafismo_amarelo.png";


const Section5 = () => {

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
            <Section className="section bg-table bg-right-bottom sm:bg-cover bg-no-repeat bg-blue-800 flex flex-col items-center sm:items-start justify-start sm:justify-center relative">
                  <img
                        src={calendario}
                        alt="calendário"
                        className="w-[23rem] pb-[2rem]"
                  />
                  <div className="flex gap-[1rem] relative">
                        <div className="flex flex-col gap-[1rem] sm:w-[20rem]">
                              <div className="bg-white py-[2rem] rounded-3xl px-[0.5rem] sm:px-[1.5rem]">
                                    <p className="text-blue-800 font-title sm:text-xl">07 de setembro</p>
                                    <p className="text-gray-600 font-title sm:text-xl">9:00 am</p>
                              </div>
                              <div className="bg-yellow-500 py-[2rem] rounded-3xl px-[0.5rem] sm:px-[1.5rem]">
                                    <p className="text-blue-800 font-title sm:text-xl">07 de setembro</p>
                                    <p className="text-gray-600 font-title sm:text-xl">9:00 am</p>
                              </div>
                        </div>
                        <div className="flex flex-col gap-[1rem] sm:w-[20rem]">
                              <div className="bg-yellow-500 py-[2rem] rounded-3xl px-[0.5rem] sm:px-[1.5rem]">
                                    <p className="text-blue-800 font-title sm:text-xl">07 de setembro</p>
                                    <p className="text-gray-600 font-title sm:text-xl">9:00 am</p>
                              </div>
                              <div className="bg-yellow-500 py-[2rem] rounded-3xl px-[0.5rem] sm:px-[1.5rem]">
                                    <p className="text-blue-800 font-title sm:text-xl">07 de setembro</p>
                                    <p className="text-gray-600 font-title sm:text-xl">9:00 am</p>
                              </div>
                        </div>
                        <img
                              src={losangulo}
                              className="w-[1.5rem] h-[1rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                        />
                  </div>
                  <img
                        src={cafeteira}
                        className=" w-[10rem] sm:w-[25rem] absolute right-[50%] translate-x-1/2 sm:right-[20%] bottom-0 sm:bottom-[5%]"
                  />
            </Section>
      )
}

export default Section5