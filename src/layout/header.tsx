import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/Logo.svg";
import Hamburger from "@/assets/hamburger.svg";
import Close from "@/assets/Close.svg";
import Modal from "@/sections/modal";
import axios from "axios";

export const Header = ({ children }: { children: React.ReactNode }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubscribe = async () => {
    if (!email) return;
    if (!email.match(regex)) {
      alert("Invalid Email Address");
    }

    const res = await axios.post(
      "/api/newsletter",
      { email },
      { headers: { "Content-Type": "application/json" } }
    );
    if (res.status === 200) {
      alert("Subscribed Successfully");
    } else {
      alert("An error occured");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className="bg-primary">
      {/* desktop view */}
      <nav className="justify-between hidden md:flex text-bg-1 text-lg items-center px-20 md:px-24 py-2 md:py-4">
        <Link href={"/people"}>
          <p>People</p>
        </Link>
        <Link href={"/podcast"}>
          <p>Podcast</p>
        </Link>
        <Link href={"/playlist"}>
          <p>Playlist</p>
        </Link>
        <Link href={"/"}>
          <Image src={Logo} alt={"logo"} className="w-[100px] h-[100px]" />
        </Link>
        <Link href={"/poetry"}>
          <p>Poetry</p>
        </Link>

        <p onClick={openModal} className="cursor-pointer">
          Prayer
        </p>

        <Link href={"/contact"}>
          <p>Contact</p>
        </Link>
      </nav>
      {/* mobile view */}
      <nav className="justify-between px-4 md:px-10 lg:px-20 w-full flex md:hidden py-2">
        <Link href={"/"}>
          {" "}
          <Image src={Logo} alt={"logo"} className="w-14 h-14" />
        </Link>{" "}
        <Image
          src={mobileNav ? Close : Hamburger}
          alt={"hamburger"}
          onClick={() => setMobileNav(!mobileNav)}
        />
      </nav>
      {mobileNav && (
        <nav className="h-calc flex flex-col text-center justify-around text-bg-1">
          {" "}
          <Link href={"/people"}>
            <p>People</p>
          </Link>
          <Link href={"/podcast"}>
            <p>Podcast</p>
          </Link>
          <Link href={"/playlist"}>
            <p>Playlist</p>
          </Link>
          <Link href={"/poetry"}>
            <p>Poetry</p>
          </Link>
          <p onClick={openModal} className="cursor-pointer">
            Prayer
          </p>
          <Link href={"/contact"}>
            <p>Contact</p>
          </Link>
        </nav>
      )}

      {children}
      {/* Newletter */}
      <section
        className="px-6 sm:px-12 md:px-32 py-10 sm:py-16 md:py-20 bg-primary"
        id="newsletter"
      >
        <p className="italic text-bg-1 text-center text-2xl md:text-3xl">
          Stay up to date on all things cc
        </p>
        <div className="flex border mt-6 justify-between bg-[#F2DEA71A] border-bg-1 p-1 rounded-[40px] h-[50px] mx-auto w-full md:w-[460px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="border-none rounded-l-[40px] text-[#FDF0CD] text-sm bg-transparent placeholder:text-[#fdf0cd9a] p-2 w-full focus-visible:border-none focus-visible:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-bg-1 w-full sm:w-[120px] py-2 text-center text-sm flex items-center justify-center rounded-[40px] focus:border-none focus-visible:border-none focus-visible:outline-none"
          >
            Sign Up
          </button>
        </div>
      </section>
      {/* Copyright */}
      <section className="py-3 bg-[#F2DEA71A]">
        <p className="text-bg-1 text-center text-xs">© Candle Culture 2023</p>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};
