"use client";

import Link from "next/link";
import React from "react";

interface PathLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function PathLink({ href, children }: PathLinkProps) {
  return <Link href={href}>{children}</Link>;
}
