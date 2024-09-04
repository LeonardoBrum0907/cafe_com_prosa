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
            <Section className="animation sm:pt-[2rem] bg-white flex flex-col sm:flex-row gap-12 items-center justify-center">
                  <div className="flex flex-col gap-12 items-center w-4/5 sm:w-6/12 text-blue-800 left">
                        <img
                              src={brasileiroEmKaty}
                              alt="Brasileiro morando em Katy?"
                              className="w-full sm:w-4/5"
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
                  <div className=" text-yellow-400 flex flex-col items-center gap-8">
                        <div className="bg-green-main sm:flex sm:flex-col sm:gap-y-[0.8rem] p-8 sm:px-[2.3rem] sm:pb-[2rem] sm:pt-[3.8rem] w-[20rem] sm:w-[23rem] rounded-2xl relative">
                              <div>
                                    <p>NOME</p>
                                    <Input />
                              </div>
                              <div>
                                    <p>EMAIL</p>
                                    <Input />
                              </div>
                              <div>
                                    <p>TELEFONE</p>
                                    <Input />
                              </div>
                              <div>
                                    <p>INSTAGRAM</p>
                                    <Input />
                              </div>
                              <img
                                    src={cafezinho}
                                    alt="xicara de café"
                                    className="absolute w-[5.8rem] sm:w-[7rem] top-[-13%] sm:top-[-14%] right-[18%] sm:right-[30%]"
                              />
                        </div>

                        <div className=" bg-blue-800 rounded-3xl w-[15rem] sm:w-44">
                              <p className="text-center py-2">QUERO PARTICIPAR!</p>
                        </div>
                  </div>
            </Section>
      )
}

export default Section3