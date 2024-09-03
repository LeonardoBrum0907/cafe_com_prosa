import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import brasileiroEmKaty from "/assets/images/brasileiro_katy.png";
import cafeteira from "/assets/images/cafeteira.png";
import cafezinho from "/assets/images/cafezinho.png";
import calendario from "/assets/images/calendario.png";
import grafismo from "/assets/images/grafismo_01.png";
import grafismo02 from "/assets/images/grafismo_02.png";
import losangulo from "/assets/images/grafismo_amarelo.png";
import icone01 from "/assets/images/icone_01.png";
import icone02 from "/assets/images/icone_02.png";
import icone03 from "/assets/images/icone_03.png";
import icone04 from "/assets/images/icone_04.png";
import imagem01 from "/assets/images/imagem_01.png";
import kingsland from "/assets/images/logo_01.png";
import kingslandInternational from "/assets/images/logo_02.png";
import nossasRedes from "/assets/images/nossas_redes.png";
import parceiros from "/assets/images/parceiros.png";
import quemSomos from "/assets/images/quem_somos.png";
import imagem03 from "/assets/images/Rectangle 10.png";
import imagem04 from "/assets/images/Rectangle 11.png";
import imagem05 from "/assets/images/Rectangle 12.png";
import imagem06 from "/assets/images/Rectangle 13.png";
import imagem07 from "/assets/images/Rectangle 23.png";
import imagem08 from "/assets/images/Rectangle 24.png";
import imagem09 from "/assets/images/Rectangle 25.png";
import imagem10 from "/assets/images/Rectangle 26.png";
import cafeComProsa from "/assets/images/selo01.png";

function App() {
  return (
    <main className="bg-green-main overflow-x-hidden">
      <Navbar />

      <Section>
        <div className="flex justify-center">
          <img
            src={cafeComProsa}
            alt="café com prosa"
            className="w-full max-w-[900px]"
          />
        </div>

        <div className="flex flex-col items-center sm:flex-row gap-8 sm:gap-16 mt-20">
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

      <section className="min-h-[100vh] px-4 sm:px-60 py-10 sm:py-0 bg-blue-700 flex flex-col items-center justify-center gap-9 relative">
        <div>
          <img src={parceiros} alt="Parceiros" className="w-80" />
        </div>
        <div className="flex flex-col w-4/5 sm:w-full sm:flex-row gap-20 text-white">
          <div className="flex items-center flex-col gap-8">
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
          <div className="flex items-center flex-col gap-8">
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
      </section>

      <section className="min-h-[100vh] px-4 sm:px-60 py-10 sm:py-0 sm:pt-[2rem] bg-white flex flex-col sm:flex-row gap-12 items-center justify-center ">
        <div className="flex flex-col gap-12 items-center w-4/5 sm:w-6/12 text-blue-800 ">
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
      </section>

      <section className="h-[100vh] flex sm:block">
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

      <section className="min-h-[100vh] px-4 sm:px-60 py-10 sm:py-0 bg-table bg-right-bottom sm:bg-cover bg-no-repeat bg-blue-800 flex flex-col items-center sm:items-start justify-start sm:justify-center relative">
        <img
          src={calendario}
          alt="calendário"
          className="w-[23rem] pb-[2rem]"
        />
        <div className="flex gap-[1rem] relative">
          <div className="flex flex-col gap-[1rem]">
            <div className="bg-white p-[1rem] sm:w-[13rem] rounded-[1rem] pl-[1.5rem]">
              <p className="text-blue-800">07 de setembro</p>
              <p className="text-gray-600">9:00 am</p>
            </div>
            <div className="bg-yellow-500 p-[1rem] rounded-[1rem] pl-[1.5rem]">
              <p className="text-blue-800">07 de setembro</p>
              <p className="text-gray-600">9:00 am</p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="bg-yellow-500 p-[1rem] w-[10rem] sm:w-[13rem] rounded-[1rem] pl-[1.5rem]">
              <p className="text-blue-800">07 de setembro</p>
              <p className="text-gray-600">9:00 am</p>
            </div>
            <div className="bg-yellow-500 p-[1rem] rounded-[1rem] pl-[1.5rem]">
              <p className="text-blue-800">07 de setembro</p>
              <p className="text-gray-600">9:00 am</p>
            </div>
          </div>
          <img
            src={losangulo}
            className="w-[1.5rem] h-[1rem] absolute top-[45%] sm:top-[46.5%] left-[45%] sm:left-[47%]"
          />
        </div>
        <img
          src={cafeteira}
          className=" w-[12rem] sm:w-[20rem] absolute right-[7%] sm:right-[10%] bottom-[8%] sm:bottom-[5%]"
        />
      </section>

      <section className="min-h-[100vh] px-4 sm:px-60 py-10 sm:py-0 bg-white flex justify-center items-center relative overflow-hidden">
        <div className="flex items-center gap-[1rem]">
          <div>
            <img src={nossasRedes} className="w-[15rem]" />
          </div>
          <div className="flex flex-col gap-[1rem]">
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
      </section>
    </main>
  );
}

export default App;
