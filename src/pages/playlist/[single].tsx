import Image from "next/image";
import React from "react";
import ArrowRight from "@/assets/arrowRight.svg";
import DemoImage from "@/assets/image.png";
import ArrowBack from "@/assets/arrowBack.svg";
import arrowDown from "@/assets/arrowDown.svg";
import SlantArrow from "@/assets/slantArrow.svg";

const SinglePlaylist = () => {
  return (
    <main>
      <section className="px-6 sm:px-12 md:px-40 text-center py-10 sm:py-16 md:py-20 bg-bg-1">
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-36">
          <div className="flex flex-row md:flex-col gap-6 min-h-[inherit] justify-between">
            <div className="w-full md:w-[260px]">
              <div className="flex items-center justify-between w-full">
                <p className="uppercase font-medium">Next</p>
                <Image src={ArrowRight} alt="arrow right" />
              </div>
              <div className="rounded-[20px] mt-4">
                <div className="relative">
                  <Image
                    src={DemoImage}
                    alt="demo image"
                    className="rounded-[20px] border-4 border-black md:h-[240px]"
                  />
                  <div className="absolute bg-white rounded-[50%] w-[38px] p-3 md:w-[48px] h-[38px] md:h-[48px] flex bottom-3 right-3 justify-center items-center">
                    <Image
                      src={SlantArrow}
                      alt="slant arrow"
                      className="w-auto"
                    />
                  </div>
                </div>
                <div className="py-3 text-black">
                  <p className=" italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                    Soulful Sundays
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[260px]">
              <div className="flex items-center justify-between w-full">
                <p className="uppercase font-medium">PREV</p>
                <Image src={ArrowBack} alt="arrow back" />
              </div>
              <div className="rounded-[20px] mt-4">
                <div className="relative">
                  <Image
                    src={DemoImage}
                    alt="demo image"
                    className="rounded-[20px] border-4 border-black md:h-[240px]"
                  />
                  <div className="absolute bg-white rounded-[50%] w-[38px] p-3 md:w-[48px] h-[38px] md:h-[48px] flex bottom-3 right-3 justify-center items-center">
                    <Image
                      src={SlantArrow}
                      alt="slant arrow"
                      className="w-auto"
                    />
                  </div>
                </div>
                <div className="py-3 text-black">
                  <p className=" italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                    Soulful Sundays
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-5 items-center text-[20px]">
              <p className="">July 15, 2023</p>
              <span className="w-[9px] h-[9px] bg-black rounded-full"></span>
              <p>10 Songs</p>
            </div>
            <p className="italic text-black text-left text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
              Afrobeats
            </p>
            <div className="relative rounded-[20px] mt-6 w-full md:w-10/12">
              <Image
                src={DemoImage}
                alt="demo image"
                className="rounded-[40px] border-black border-[4px] w-full"
              />
              <div className="absolute bg-[#DF8010] rounded-[50%] w-[44px] p-3 md:w-[60px] h-[44px] md:h-[60px] flex -top-5 right-12 justify-center items-center">
                <Image src={arrowDown} alt="slant arrow" className="w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SinglePlaylist;
