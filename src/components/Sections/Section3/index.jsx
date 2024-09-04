import Input from "../../Input";
import Section from '../../SectionLayout';
import brasileiroEmKaty from "/assets/images/brasileiro_katy.png";
import cafezinho from "/assets/images/cafezinho.png";


const Section3 = () => {

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
            <Section className="bg-yellow-50 flex flex-col sm:flex-row gap-12 items-center justify-center">
                  <div className="flex flex-col gap-12 items-center text-blue-800 sm:w-1/2">
                        <img
                              src={brasileiroEmKaty}
                              alt="Brasileiro morando em Katy?"
                              className="w-3/5"
                        />
                        <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                              efficitur turpis dolor, ut mattis ante eleifend sed. Sed gravida
                              nibh ut consectetur maximus. Integer volutpat vulputate risus sed
                              pulvinar. Quisque dictum quam quis quam sodales cursus. Nunc
                              volutpat bibendum est vel ultrices. In ex quam, ornare a
                              pellentesque ut, vestibulum at nulla. In efficitur est elit, in
                              facilisis neque ullamcorper sit amet. Class aptent taciti sociosqu
                              ad litora torquent per conubia nostra, per inceptos himenaeos.
                              Integer non.
                        </p>
                  </div>
                  <form className=" text-yellow-400 flex flex-col items-center gap-8 w-full sm:w-1/2">
                        <div className="bg-green-main sm:flex sm:flex-col sm:gap-y-[0.8rem] p-8 sm:px-[2.3rem] sm:pb-[2rem] sm:pt-[3.8rem] w-full shrink-0 rounded-2xl relative">
                              <Input label="NOME" />
                              <Input label="EMAIL" />
                              <Input label="TELEFONE" />
                              <Input label="INSTAGRAM" />
                              <img
                                    src={cafezinho}
                                    alt="xicara de café"
                                    className="absolute w-[5.8rem] sm:w-[7rem] top-0 left-[50%] -translate-x-1/2 -translate-y-1/2"
                              />
                        </div>

                        <button className=" bg-blue-700 hover:bg-blue-800 rounded-full sm:w-2/3 py-4 px-6 shadow-2xl hover:scale-105 ease-in-out duration-200">
                              QUERO PARTICIPAR!
                        </button>
                  </form>
            </Section>
      )
}

export default Section3