import Image from "next/image";
import whatsapp from "../../public/WhatsApp_Logo.svg";
import instagram from "../../public/Instagram logo.svg";

export default function Footer (){
  return (
    <div className="bg-[#D8D8D8] h-96 flex flex-row items-center">
      <div className="w-1/3 h-full flex justify-center items-end">
        <a className="mb-10" href="mailto:estudiobalacobaco@gmail.com">estudiobalacobaco@gmail.com</a>
      </div>
      <div className="w-1/3 h-full flex justify-center items-center">
        LOGO
      </div>
      <div className="w-1/3 h-full flex flex-col justify-center items-center">
        <h3>Contato</h3>
        <div className="flex flex-row gap-8 mt-2">
          <Image src={instagram} alt="Instagram logo svg" width={50} height={50}/>
          <Image src={whatsapp} alt="Whatsapp  logo svg" width={50} height={50}/>
        </div>
      </div>
    </div>
  )
}