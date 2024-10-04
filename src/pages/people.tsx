import React from "react";
// import PeopleImage from "@/assets/people.png";
import ceo from "@/assets/ceo.jpeg";
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
              src={ceo}
              alt="people"
              className="rounded-[40px] border-4 border-bg-1 w-full "
            />
          </div>
          <div className="text-bg-1">
            <div className="font-semibold flex text-2xl md:text-3xl">
              <Image src={leftQuotes} alt="quotes" className="-mt-6" />
              <p className="ml-2">
                Candle Culture is an answer to a question I had years ago: what
                does it mean to live in God’s light everyday?
              </p>
              <Image src={rightQuotes} alt="quotes" className="-mt-6" />
            </div>

            {/* <div className="gap-1 font-semibold flex justify-between md:hidden text-3xl md:text-4xl">
              <Image src={leftQuotes} alt="quotes" />
              <Image src={rightQuotes} alt="quotes" />
            </div> */}

            {/* <p className="flex md:hidden text-center text-3xl md:text-4xl">
              Candle Culture is an answer to a question I had years ago: what
              does it mean to live in God’s light everyday?
            </p> */}

            <p className="pt-6 text-xl text-center md:text-left">
              I have found that it is possible to encounter God in the music you
              listen to, the words you read, the work you do, the conversations
              you have with people. This journey of finding Jesus where many may
              not expect to do so has been so beautiful. I am sharing all my
              findings with you so that we can journey together.
            </p>

            <p className="pt-6 text-xl text-center md:text-left">
              Love,
              <br />
              Onyinye
              <br />
              Curator of Candle Culture
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default People;
