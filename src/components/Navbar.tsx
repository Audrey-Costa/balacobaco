import PathLink from "./PathLink";
import "../app/style/Navbar.css"

export default function Navbar() {
  return (
    <nav className="absolute z-10 right-16 top-9">
      <ul className="flex gap-8 flex-row">
        <li><PathLink href={"/"}><h2 className="text-2xl no-underline hover:underline decoration-4 underline-offset-4 hover:decoration-hover-color">Home</h2></PathLink></li>
        <li><PathLink href={"/sobre-nos"}><h2 className="text-2xl no-underline hover:underline decoration-4 underline-offset-4 hover:decoration-hover-color">Sobre Nós</h2></PathLink></li>
        <li><PathLink href={"/projeto"}><h2 className="text-2xl no-underline hover:underline decoration-4 underline-offset-4 hover:decoration-hover-color">Projeto</h2></PathLink></li>
        <li><PathLink href={"/contato"}><h2 className="text-2xl no-underline hover:underline decoration-4 underline-offset-4 hover:decoration-hover-color">Contato</h2></PathLink></li>
        <li><PathLink href={"/loja"}><h2 className="text-2xl no-underline hover:underline decoration-4 underline-offset-4 hover:decoration-hover-color">Loja</h2></PathLink></li>
      </ul>
    </nav>
  )
}