"use client";

import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import PathLink from "./PathLink";

export default function ProjetoList(): ReactElement {
  const [active, setActive]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const pathname: string = usePathname();

  useEffect(() => {
    if (
      !(
        pathname === "/residencial" ||
        pathname === "/comercial" ||
        pathname === "/consultoria" ||
        pathname === "/corporativo"
      )
    ) {
      deselected();
    }
  }, [pathname]);

  function selected() {
    setActive(true);
    setTimeout(() => {
      deselected();
    }, 5000);
  }

  function deselected() {
    setActive(false);
  }

  return (
    <li className="relative flex flex-col px-4 pb-1 items-start">
      <h2
        className="text-2xl no-underline hover:underline decoration-4 underline-offset-4 hover:decoration-hover-color active:no-underline"
        onClick={() => selected()}
      >
        Projeto
      </h2>
      {active ? (
        <div className="absolute -left-1 w-40 flex flex-col items-start pl-6 gap-2 mt-10 rounded-md bg-gradient-to-t from-[#e5e7eb] via-[#e5e7eb] via-95%">
          <PathLink href={"/residencial"}>
            <span
              className="hover:font-bold text-xl"
              onClick={() => deselected()}
            >
              Resindencial
            </span>
          </PathLink>
          <PathLink href={"/comercial"}>
            <span
              className="hover:font-bold text-xl"
              onClick={() => deselected()}
            >
              Comercial
            </span>
          </PathLink>
          <PathLink href={"/consultoria"}>
            <span
              className="hover:font-bold text-xl"
              onClick={() => deselected()}
            >
              Consultoria
            </span>
          </PathLink>
          <PathLink href={"/corporativo"}>
            <span
              className="hover:font-bold text-xl"
              onClick={() => deselected()}
            >
              Corporativo
            </span>
          </PathLink>
          <div className="absolute bg-hover-color w-1 h-44 left-3 bottom-1" />
        </div>
      ) : (
        <></>
      )}
    </li>
  );
}
