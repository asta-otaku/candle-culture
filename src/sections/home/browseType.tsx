import React from "react";
import Image from "next/image";
import ColorfulTape from "@/assets/ColorfulTape.svg";
import JoyCategory from "@/assets/joy.png";
import Flower from "@/assets/flower.svg";
import Star from "@/assets/star.svg";
import RightIcon from "@/assets/rightIcon.svg";
import Link from "next/link";

export const BrowseType = () => {
  const allCategory = [
    {
      name: "Playlists",
      link: "/playlist",
      icon: JoyCategory,
    },
    {
      name: "Podcasts",
      link: "/podcast",
      icon: Flower,
    },
    {
      name: "Poetry",
      link: "/poetry",
      icon: Star,
    },
  ];
  return (
    <section className="categorySection">
      <div className="px-6 sm:px-12 md:px-32 py-14 sm:py-18 md:py-28 innerCategorySection">
        <p className="text-3xl italic text-bg-1 text-center text-[36px] sm:text-[40px] md:text-[60px]">
          Browse by Category
        </p>
        <div className="flex flex-col md:flex-row  gap-6 pt-16 sm:pt-20 md:pt-24 md:gap-12 justify-center">
          {allCategory.map((el) => (
            <Link href={el.link} key={el.name}>
              <div className="relative">
                <div className="rounded-[20px] flex flex-col categoryCard z-20 relative items-center w-full md:w-[275px] bg-[#FDF0CD]  py-5 px-8">
                  <Image
                    src={ColorfulTape}
                    alt="category"
                    className="-top-4 absolute"
                  />
                  <div className="items-center flex w-full justify-between">
                    <Image src={el.icon} alt="category" />{" "}
                    <p className="text-xl md:text-2xl text-[#000]">{el.name}</p>
                    <Image src={RightIcon} alt="right icon" />
                  </div>
                </div>
                <div
                  className="rounded-[20px] flex flex-col items-center w-full md:w-[275px] top-2 -right-2 absolute h-full bg-black border-solid border border-[#FDF0CD] py-5 px-10"
                  key={el.name}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
