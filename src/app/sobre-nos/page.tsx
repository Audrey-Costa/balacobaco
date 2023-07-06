import { Bebas_Neue, Abel } from "next/font/google";

const bebas_Neue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const abel = Abel({ weight: "400", subsets: ["latin"] });
export default function SobreNos() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-8">
      <div className="flex flex-col">
        <h1 className="uppercase __className_6a3ae9 text-8xl">Balacobaco</h1>
        <div className="w-[960px] h-[1px] bg-black ml-80" />
      </div>
      <div className="flex">
        <div className="mt-64 w-10">
          <div className="uppercase __className_6a3ae9 text-8xl my-3">n</div>
          <div className="uppercase __className_6a3ae9 text-8xl my-2">ó</div>
          <div className="uppercase __className_6a3ae9 text-8xl my-1">s</div>
        </div>
        <div className="flex flex-col items-center mt-20 ml-16 p-10">
          <div className="flex">
            <div className="w-[500px] __Abel_95dadc text-2xl -ml-[500px]">
              Prazer, estúdio Balacobaco!
              <br />
              <br />
              Somos um grupo de quatro amigos que, apaixonados pelo design de
              interiores se juntaram e deram vida a um estúdio. Movidos pelo
              sonho de levar nossa paixão a todos que buscam um ambiente único e
              inspirador, no Estúdio Balacobaco acreditamos que cada cliente é
              especial e merece um design que reflita sua singularidade.
              <br />
              Nossa equipe é formada por indivíduos com histórias e experiências
              diversas, mas que compartilham a mesma paixão pelo Brasil e sua
              rica cultura. Acreditamos que a mistura de nossas perspectivas
              únicas nos permite criar designs inovadores e autênticos, que
              incorporam elementos da cultura nacional de forma criativa e
              harmoniosa.
            </div>
            <div className="relative ml-10">
              <div className="absolute top-20 rounded-3xl w-[500px] h-[500px] z-20 bg-green-800" />
              <div className="absolute bottom-2 left-28 rounded-3xl w-[480px] h-[420px] z-10 bg-blue-700" />
              <div className="absolute rounded-3xl left-56 w-[330px] h-[330px] z-0 bg-orange-500" />
            </div>
          </div>
          <h4 className="ml-72 my-10 __className_6a3ae9 text-end text-8xl tracking-[2rem] w-[800px]">
            O PURO SUCO DE BRASIL!
          </h4>
          <div className="flex gap-10 mt-20">
            <div className="w-[570px] h-[520px] bg-red-700 rounded-[64px]"></div>
            <div className="w-[500px] h-full mt-10 text-justify text-xl">
              Nosso maior valor é colocar você em primeiro lugar. Queremos ouvir
              sua história, entender seus desejos e necessidades, para criar
              espaços que sejam verdadeiras extensões de sua personalidade.
              Nossa abordagem é centrada em você, garantindo que cada detalhe
              seja cuidadosamente pensado e projetado para refletir sua
              essência.
              <br />
              Estamos empenhados em tornar o design de interiores acessível a
              todos. Independentemente do tamanho do seu espaço ou do seu
              orçamento, estamos aqui para ajudar. Valorizamos a transparência,
              a honestidade e a comunicação aberta ao longo de todo o processo,
              garantindo que você esteja sempre informado e envolvido em cada
              etapa do projeto.
            </div>
          </div>
          <div className="flex gap-12 mt-20">
            <div className="w-[500px] h-full mt-10 text-justify text-xl">
              No Estúdio Balacobaco, nosso objetivo é transformar seus sonhos em
              realidade, criando espaços que inspirem e proporcionem conforto.
              Queremos que você se sinta verdadeiramente em casa, rodeado por um
              design que celebra sua singularidade e honra a cultura brasileira.
            </div>
            <div className="w-[540px] h-[500px] bg-blue-300 rounded-[64px]"></div>
          </div>
          <h4 className="capitalize my-10 __className_6a3ae9 text-center text-8xl tracking-[2rem] w-full">
            O design ...
          </h4>
          <div className="w-[1px] h-44 bg-black my-10" />
          <h1 className="my-10 __className_6a3ae9 text-center text-8xl tracking-[2rem] w-full">
            ESTÚDIO
            <br />
            BALACOBACO
          </h1>
        </div>
      </div>
    </main>
  );
}
