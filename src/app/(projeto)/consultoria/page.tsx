import { Bebas_Neue } from "next/font/google";

const bebas_Neue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Consultoria() {
  return (
    <main className="flex flex-col justify-start items-center">
      <h2 className="__className_6a3ae9 text-8xl tracking-widest my-20">
        consultoria
      </h2>
      <div className="grid grid-flow-row grid-cols-3 gap-7">
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-red-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-blue-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-purple-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-yellow-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-green-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-gray-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-orange-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-cyan-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-lime-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-sky-500" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4 text-xl">apartamento MB</h3>
          <div className="w-96 h-96 bg-rose-500" />
        </div>
      </div>
    </main>
  );
}
