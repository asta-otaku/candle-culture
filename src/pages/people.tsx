import React from "react";
import PeopleImage from "@/assets/people.png";
import leftQuotes from "@/assets/leftQuotes.svg";
import rightQuotes from "@/assets/rightQuotes.svg";
import Image from "next/image";
const People = () => {
  return (
    <main>
      <section className="px-6 sm:px-12 md:px-36 py-10 sm:py-16 md:py-20 bg-primary">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full">
            <Image
              src={PeopleImage}
              alt="people"
              className="rounded-[40px] border-4 border-bg-1 w-full "
            />
          </div>
          <div className="text-bg-1">
            <div className="gap-1 font-semibold hidden md:flex text-3xl md:text-4xl">
              <Image src={leftQuotes} alt="quotes" className="-mt-6" />
              <p className="">I’ve learned that people are cool</p>
              <Image src={rightQuotes} alt="quotes" className="-mt-6" />
            </div>

            <div className="gap-1 font-semibold flex justify-between md:hidden text-3xl md:text-4xl">
              <Image src={leftQuotes} alt="quotes" />
              <Image src={rightQuotes} alt="quotes" />
            </div>

            <p className="flex md:hidden text-center text-3xl md:text-4xl">
              I’ve learned that people are cool
            </p>

            <p className="pt-6 text-xl text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              mattis condimentum lorem, sollicitudin mollis libero dignissim
              vel. Praesent ac venenatis ipsum, eu laoreet odio.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default People;
