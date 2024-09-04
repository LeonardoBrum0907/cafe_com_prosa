import imagem03 from "/assets/images/Rectangle 10.png";
import imagem04 from "/assets/images/Rectangle 11.png";
import imagem05 from "/assets/images/Rectangle 12.png";
import imagem06 from "/assets/images/Rectangle 13.png";
import imagem07 from "/assets/images/Rectangle 23.png";
import imagem08 from "/assets/images/Rectangle 24.png";
import imagem09 from "/assets/images/Rectangle 25.png";
import imagem10 from "/assets/images/Rectangle 26.png";


const Section4 = () => {

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
            <section className="section h-[100vh] flex sm:block">
                  <div className="sm:h-[50%] sm:w-[100%] flex flex-col sm:flex-row relative">
                        <img
                              src={imagem03}
                              alt="pessoas bebendo café em uma cafeteria"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem04}
                              alt="grupo de mulheres amigas assistindo esportes em casa tomando bebida"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem05}
                              alt="equipe trabalhando junto em um projeto"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem06}
                              alt="pessoas bebendo café em uma cafeteria"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <p className="absolute top-[50%] sm:top-[48%] left-[20%] sm:left-[33.5%] text-white">
                              evento dia 07
                        </p>
                  </div>
                  <div className="sm:h-[50%] sm:w-[100%] flex flex-col sm:flex-row">
                        <img
                              src={imagem07}
                              alt="equipe trabalhando junto em um projeto"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem08}
                              alt="pessoas bebendo café em uma cafeteria"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem09}
                              alt="grupo de mulheres amigas assistindo esportes em casa tomando bebida"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem10}
                              alt="pessoas bebendo café em uma cafeteria"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                  </div>
            </section>
      )
}

export default Section4