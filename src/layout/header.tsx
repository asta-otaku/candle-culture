import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/Logo.svg";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#000000]">
      <nav className="justify-between hidden md:flex text-bg-1 text-lg items-center px-24 py-4">
        <Link href={"/"}>
          <p>People</p>
        </Link>
        <Link href={"/"}>
          <p>Podcast</p>
        </Link>
        <Link href={"/"}>
          <p>Playlist</p>
        </Link>
        <Image src={Logo} alt={"logo"} />
        <Link href={"/"}>
          <p>Poetry</p>
        </Link>
        <Link href={"/"}>
          <p>Prayer</p>
        </Link>
        <Link href={"/"}>
          <p>Contact</p>
        </Link>
      </nav>
      {children}
    </main>
  );
};
