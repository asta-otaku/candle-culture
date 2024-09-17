import React, { useState } from "react";
import Image from "next/image";
import ColorfulTape from "@/assets/ColorfulTape.svg";
import Clipboard from "@/assets/clipboard-text.svg";
import Task from "@/assets/task-square.svg";
import AddCircle from "@/assets/add-circle.svg";
import PrayerIcon from "@/assets/device-message.svg";
import Prayer from "@/assets/Prayer.png";
// import Quotes from "@/assets/quotes.svg";
// import Line from "@/assets/line.svg";
import { TitleHeaders } from "@/components/titleHeaders";
import Link from "next/link";
import Modal from "../modal";
export const PrayerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="bg-primary relative py-16 sm:py-20 md:py-28 lg:py-28">
      <Image
        src={Prayer}
        alt="category"
        className="top-0 right-0 absolute md:block hidden"
      />
      <TitleHeaders title={"Prayer"} position={"right"} />
      <div className="flex flex-col md:flex-row gap-6 pt-10 sm:pt-12 md:pt-16 md:gap-12 justify-between px-6 sm:px-10 md:px-20">
        <div className="relative w-full flex justify-center">
          <div className="rounded-[20px] flex flex-col justify-center  categoryCard z-20 relative items-center w-full bg-[#FDF0CD]  py-6 px-8">
            <Image
              src={ColorfulTape}
              alt="category"
              className="-top-4 absolute"
            />
            <div className="flex w-full gap-6 md:gap-12 items-center justify-between">
              <div className="flex gap-2 items-start">
                <Image
                  src={Clipboard}
                  alt="category"
                  className="w-8 h-8 mt-1"
                />
                <div>
                  <p className="text-xl md:text-2xl text-[#000] italic">
                    Newsletter
                  </p>
                  <p className="text-[#000] text-sm mt-2">
                    Join hundreds of others finding light in their daily lives.
                  </p>
                </div>
              </div>
              <Link href={"#newsletter"}>
                <div className="p-1.5 bg-[#F6DDA0] w-[40px] rounded-full h-auto">
                  <Image src={AddCircle} alt="right icon" />
                </div>
              </Link>
            </div>
          </div>
          <div className="rounded-[20px] flex flex-col items-center w-full md:w-[275px] top-2 absolute h-full bg-black border-solid border border-[#FDF0CD] py-5 px-10"></div>
        </div>

        <div className="relative w-full flex justify-center">
          <div className="rounded-[20px] flex flex-col  justify-center  categoryCard z-20 relative items-center w-full bg-[#FDF0CD]  py-6 px-8">
            <Image
              src={ColorfulTape}
              alt="category"
              className="-top-4 absolute"
            />
            <div className="flex w-full gap-6 md:gap-12 items-center justify-between">
              <div className="flex gap-2 items-start">
                <Image src={Task} alt="category" className="w-8 h-8 mt-1" />
                <div>
                  <p className="text-xl md:text-2xl text-[#000] italic">
                    Guides
                  </p>
                  <p className="text-[#000] text-sm mt-2">All Guides</p>
                </div>
              </div>
              <div className="p-2 bg-[#F6DDA0] rounded-[80px] h-max w-max">
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] flex flex-col items-center w-full md:w-[275px] top-2 absolute h-full bg-black border-solid border border-[#FDF0CD] py-5 px-10"></div>
        </div>

        <div className="relative w-full flex justify-center">
          <div className="rounded-[20px] flex flex-col justify-center categoryCard z-20 relative items-center w-full bg-[#FDF0CD]  py-6 px-8">
            <Image
              src={ColorfulTape}
              alt="category"
              className="-top-4 absolute"
            />
            <div className="flex w-full gap-6 md:gap-12 items-center justify-between">
              <div className="flex gap-2 items-start">
                <Image
                  src={PrayerIcon}
                  alt="category"
                  className="w-8 h-8 mt-1"
                />
                <div>
                  <p className="text-xl md:text-2xl text-[#000] italic">
                    Prayer Request
                  </p>
                  <p className="text-[#000] text-sm mt-2">
                    Send in your prayer requests
                  </p>
                </div>
              </div>
              <div
                className="p-1.5 bg-[#F6DDA0] w-[40px] rounded-full h-auto cursor-pointer"
                onClick={openModal}
              >
                <Image src={AddCircle} alt="right icon" />
              </div>
            </div>
          </div>
          <div className="rounded-[20px] flex flex-col items-center w-full md:w-[275px] top-2 absolute h-full bg-black border-solid border border-[#FDF0CD] py-5 px-10"></div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
