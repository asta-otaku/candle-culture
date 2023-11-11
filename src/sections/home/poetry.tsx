import React from "react";
import { TitleHeaders } from "@/components/titleHeaders";
import Image from "next/image";
import SlantArrow from "@/assets/slantArrow.svg";
import DemoImage from "@/assets/image.png";
import { DataType } from "@/pages";
import Link from "next/link";

export const PoetrySection = ({ data }: { data: DataType[] | null }) => {
  return (
    <section className="bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-28">
      <TitleHeaders
        title={"Poetry"}
        description={"Thoughts of life inspired by everyday encounters"}
        position={"left"}
      />
      <div className="w-full my-6 md:overflow-x-scroll no-scrollbar pl-6 sm:pl-10 md:pl-20 pr-6 sm:pr-10 md:pr-0">
        <div className="md:flex grid grid-cols-2 gap-6 md:w-fit">
          {data
            ?.filter((item) => item.type === "poetry")
            .map((el) => (
              <div className="rounded-[20px] w-full md:w-[260px]" key={el.id}>
                <div className="relative">
                  <img
                    src={el.bannerImage}
                    alt="demo image"
                    className="rounded-[20px] border-bg-1 w-full border-[4px] md:h-[240px]"
                  />
                  <div className="absolute bg-white rounded-[50%] w-[38px] p-3 md:w-[48px] h-[38px] md:h-[48px] flex bottom-3 right-3 justify-center items-center">
                    <Image
                      src={SlantArrow}
                      alt="slant arrow"
                      className="w-auto"
                    />
                  </div>
                </div>
                <div className="py-3">
                  <Link href={`/poetry/${el.id}`}>
                    {" "}
                    <p className="text-bg-1 italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                      {el.name}
                    </p>
                  </Link>

                  <p className="text-bg-1 text-base">Poetry {el.id}</p>
                  <p className="text-bg-1 mt-2 border-[0.89px] w-max text-sm rounded-[20px] capitalize border-bg-1 text-opacity-50 px-2 py-1">
                    {el.category}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
