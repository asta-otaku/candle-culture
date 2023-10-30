import React from "react";
import Image from "next/image";
import DemoImage from "@/assets/image.png";
import SlantArrow from "@/assets/slantArrow.svg";
const Playlist = () => {
  return (
    <main>
      {/* header */}
      <section className="px-6 sm:px-12 md:px-32 text-center py-10 sm:py-16 md:py-20 bg-[#000]">
        <p className="italic text-bg-1 text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
          Soulful Sundays
        </p>
        <p className="text-bg-1 text-opacity-70 text-base mt-4">
          Start each week with a new sound curated just for you
        </p>
      </section>

      <section className="bg-bg-1">
        {" "}
        <div className="flex justify-center">
          <div className="flex text-lg gap-2 px-10 bg-bg-1 w-full md:w-max md:-mt-8 mt-0 pb-2 relative">
            <div className="flex flex-col items-center text-black py-4 px-6">
              <p>All</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-black"></span>
            </div>
            <div className="flex flex-col items-center text-black py-4 px-6">
              <p>Theme</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-black"></span>
            </div>
            <div className="flex flex-col items-center text-black py-4 px-6">
              <p>Mood</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-black"></span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex text-lg gap-2 px-10 bg-black w-full md:w-max mt-0 md:-mt-8 pt-6 flex-wrap justify-center">
            <div className="flex flex-col items-center text-bg-1 py-4 px-6">
              <p>Faith</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-bg-1"></span>
            </div>
            <div className="flex flex-col items-center text-bg-1 py-4 px-6">
              <p>Hope</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-bg-1"></span>
            </div>
            <div className="flex flex-col items-center text-bg-1 py-4 px-6">
              <p>Peace</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-bg-1"></span>
            </div>
            <div className="flex flex-col items-center text-bg-1 py-4 px-6">
              <p>Joy</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-bg-1"></span>
            </div>
            <div className="flex flex-col items-center text-bg-1 py-4 px-6">
              <p>Spirit</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-bg-1"></span>
            </div>
            <div className="flex flex-col items-center text-bg-1 py-4 px-6">
              <p>Life</p>
              <span className="rounded-[80px] w-[10px] h-1 bg-bg-1"></span>
            </div>
          </div>
        </div>
        <div className="py-6 md:py-12">
          <div className="w-full my-6 md:overflow-x-scroll no-scrollbar pl-6 sm:pl-10 md:pl-20 pr-6 sm:pr-10 md:pr-0">
            <div className="md:flex grid grid-cols-2 gap-6 md:w-fit pb-10">
              {Array.from(Array(20).keys()).map((el) => (
                <div className="rounded-[20px] w-full md:w-[260px]" key={el}>
                  <div className="relative">
                    <Image
                      src={DemoImage}
                      alt="demo image"
                      className="rounded-[20px] border-bg-1 border-[4px] md:h-[240px]"
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
                    <p className="text-base">Playlist 106</p>
                    <p className="mt-2 border-[0.89px] w-max text-xs rounded-[20px] border-black text-opacity-50 px-2 py-1">
                      Afrobeats
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Playlist;
