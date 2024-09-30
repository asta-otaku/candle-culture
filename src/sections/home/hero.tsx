import React from "react";
import Image from "next/image";
import LoveImage from "@/assets/loveImage.png";

export const Hero = () => {
  return (
    <section className="bg-primary flex flex-col md:flex-row px-4 sm:px-12 md:px-24 py-6 items-center justify-between gap-10">
      <div>
        <p className="text-bg-1 italic font-semibold text-[50px] sm:text-[80px] lg:text-[100px] leading-[55px] sm:leading-[70px] md:leading-[95px]">
          Faith, <br /> Creativity &
          {/* <span className="items-center w-max justify-center px-3 md:px-6 rounded-[40%] bg-gradient-to-br from-[#E2BF5C] to-[#735913]">
          &
        </span> */}
          <br /> Inspiration
        </p>
        <p className="text-bg-1 text-sm lg:text-base mt-4 sm:mt-6 md:mt-10 text-opacity-70">
          In God's light, we find our own light. (Psalm 36:9) <br /> Then, we
          can be a light to someone else.
        </p>
      </div>
      <div>
        <Image src={LoveImage} alt="love image" />
      </div>
    </section>
  );
};
