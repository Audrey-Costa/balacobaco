import { Suspense } from "react"
import { Bebas_Neue, Montserrat_Subrayada } from 'next/font/google'

const bebas_Neue = Bebas_Neue({weight: '400', subsets: ["latin"]});
const montserrat_subrayada = Montserrat_Subrayada({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-row">
      <div className="p-4 flex flex-col justify-start items-end w-40">
        <h1 className="text-black text-lg font-extrabold mb-4">Balacobaco</h1>
        <div className="h-full w-32 flex flex-row items-start content-start">
          <div className="w-20">
            <h1 className="ml-4 mt-4 tracking-widest -rotate-90 text-4xl h-[500px] w-[500px] flex flex-col text-end">Design de Interiores</h1>
          </div>
          <div className="flex flex-col w-3">
            <div className="bg-hover-color w-1 h-96"/>
            <div className="bg-[#F9EF12] w-2 h-2 my-5 rounded-full"/>
            <div className="bg-[#F9EF12] w-2 h-2 my-5 rounded-full"/>
            <div className="bg-[#F9EF12] w-2 h-2 my-5 rounded-full"/>
            <div className="bg-hover-color w-1 h-20"/>
          </div>
        </div>
      </div>
      <div className="w-full mt-24">
        <div className="w-full h-[560px] bg-[#3874CE] pt-20">
          <h1 className="__className_6a3ae9 ml-10">
            <p className="text-7xl tracking-[2rem]">Estúdio<br/></p>
            <p className="text-8xl tracking-[2rem]">balacobaco</p>
          </h1>
          <h4 className="mt-6 text-xl indent-80">Transformando espaços, Criando memórias.</h4>
          <h4 className="mt-52 ml-[600px] text-xl __className_4def21">Quando o aconchegô encontra a elegância</h4>
        </div>
        <div className="flex flex-col justify-center items-center font-extrabold my-20">
          <span className="text-4xl mb-20">Mais Recentes</span>
          <div className="flex justify-start items-start gap-6">
            <div className="w-80 h-80 bg-green-500"></div>
            <div className="w-80 h-80 bg-yellow-400"></div>
            <div className="w-80 h-80 bg-red-300"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
