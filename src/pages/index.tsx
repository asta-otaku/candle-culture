import Image from "next/image";
import LoveImage from "@/assets/loveImage.png";
import DemoImage from "@/assets/image.png";
import SlantArrow from "@/assets/slantArrow.svg";
import JoyCategory from "@/assets/joy.png";
import RightIcon from "@/assets/rightIcon.svg";
import ColorfulTape from "@/assets/ColorfulTape.svg";
import Clipboard from "@/assets/clipboard-text.svg";
import AddCircle from "@/assets/add-circle.svg";
import Prayer from "@/assets/Prayer.png";
// import Quotes from "@/assets/quotes.svg";
// import Line from "@/assets/line.svg";
import { TitleHeaders } from "@/components/titleHeaders";

export default function Home() {
  return (
    <main>
      {/*  hero */}
      <section className="bg-black flex flex-col md:flex-row px-6 sm:px-12 md:px-24 py-6 items-center justify-between gap-10">
        <div>
          <p className="text-bg-1 italic font-semibold text-[50px] sm:text-[80px] lg:text-[100px] leading-[55px] sm:leading-[70px] md:leading-[95px]">
            Faith, <br /> Creativity &
            {/* <span className="items-center w-max justify-center px-3 md:px-6 rounded-[40%] bg-gradient-to-br from-[#E2BF5C] to-[#735913]">
              &
            </span> */}
            <br /> Inspiration
          </p>
          <p className="text-bg-1 text-sm lg:text-base mt-4 sm:mt-6 md:mt-10 text-opacity-70">
            In God’s light, we find our own light. (Psalm 36:9) <br /> Then, we
            can be a light to someone else.
          </p>
        </div>
        <div>
          <Image src={LoveImage} alt="love image" />
        </div>
      </section>
      {/* Playlists */}
      <section className="bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <TitleHeaders
          title={"Playlists"}
          description={"Sounds that uplift the spirit"}
          position={"right"}
        />
        <div className="w-full my-6 md:overflow-x-scroll no-scrollbar pl-6 sm:pl-10 md:pl-20 pr-6 sm:pr-10 md:pr-0">
          <div className="md:flex grid grid-cols-2 gap-6 md:w-fit">
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
                <div className="py-3">
                  <p className="text-bg-1 italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                    Soulful Sundays
                  </p>
                  <p className="text-bg-1 text-base">Playlist 106</p>
                  <p className="text-bg-1 mt-2 border-[0.89px] w-max rounded-[20px] border-bg-1 text-opacity-50 px-2 py-1">
                    Afrobeats
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Poetry */}
      <section className="bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <TitleHeaders
          title={"Poetry"}
          description={"Thoughts of life inspired by everyday encounters"}
          position={"left"}
        />
        <div className="w-full my-6 md:overflow-x-scroll no-scrollbar pl-6 sm:pl-10 md:pl-20 pr-6 sm:pr-10 md:pr-0">
          <div className="md:flex grid grid-cols-2 gap-6 md:w-fit">
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
                <div className="py-3">
                  <p className="text-bg-1 italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                    Soulful Sundays
                  </p>
                  <p className="text-bg-1 text-base">Playlist 106</p>
                  <p className="text-bg-1 mt-2 border-[0.89px] w-max rounded-[20px] border-bg-1 text-opacity-50 px-2 py-1">
                    Afrobeats
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Podcast */}
      <section className="bg-black py-16 sm:py-20 md:py-24 lg:py-28">
        <TitleHeaders
          title={"Podcasts"}
          description={"Sounds that uplift the spirit"}
          position={"right"}
        />
        <div className="w-full my-6 md:overflow-x-scroll no-scrollbar pl-6 sm:pl-10 md:pl-20 pr-6 sm:pr-10 md:pr-0">
          <div className="md:flex grid grid-cols-2 gap-6 md:w-fit">
            {Array.from(Array(6).keys()).map((el) => (
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
                <div className="py-3">
                  <p className="text-bg-1 italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                    Soulful Sundays
                  </p>
                  <p className="text-bg-1 text-base">Playlist 106</p>
                  <p className="text-bg-1 mt-2 border-[0.89px] w-max rounded-[20px] border-bg-1 text-opacity-50 px-2 py-1">
                    Afrobeats
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Category */}
      <section className="categorySection">
        <div className="px-6 sm:px-12 md:px-32 py-14 sm:py-18 md:py-28 innerCategorySection">
          <p className="text-3xl italic text-bg-1 text-center text-[36px] sm:text-[40px] md:text-[60px]">
            Browse by Category
          </p>
          <div className="flex flex-col md:flex-row  gap-6 pt-16 sm:pt-20 md:pt-24 md:gap-12 justify-center">
            {Array.from(Array(3).keys()).map((el) => (
              <div className="relative" key={el}>
                <div className="rounded-[20px] flex flex-col categoryCard z-20 relative items-center w-full md:w-[275px] bg-[#FDF0CD]  py-5 px-10">
                  <Image
                    src={ColorfulTape}
                    alt="category"
                    className="-top-4 absolute"
                  />
                  <div className="items-center flex w-full justify-between">
                    <Image src={JoyCategory} alt="category" />
                    <p className="text-xl md:text-2xl text-[#000]">Joy</p>
                    <Image src={RightIcon} alt="right icon" />
                  </div>
                </div>
                <div
                  className="rounded-[20px] flex flex-col items-center w-full md:w-[275px] top-2 -right-2 absolute h-full bg-[black] border-solid border border-[#FDF0CD] py-5 px-10"
                  key={el}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Prayer */}
      <section className="bg-black relative py-16 sm:py-20 md:py-28 lg:py-28">
        <Image
          src={Prayer}
          alt="category"
          className="top-0 right-0 absolute md:block hidden"
        />
        <TitleHeaders title={"Prayer"} position={"right"} />
        <div className="flex flex-col md:flex-row gap-6 pt-10 sm:pt-12 md:pt-16 md:gap-12 justify-between px-6 sm:px-10 md:px-20">
          {Array.from(Array(3).keys()).map((el) => (
            <div className="relative w-full flex justify-center" key={el}>
              <div className="rounded-[20px] flex flex-col categoryCard z-20 relative items-center w-full bg-[#FDF0CD]  py-5 px-8">
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
                      <p className="text-2xl md:text-3xl text-[#000] italic">
                        Newsletter
                      </p>
                      <p className="text-[#000] text-sm mt-2">
                        Join hundreds of others finding light in their daily
                        lives.
                      </p>
                    </div>
                  </div>
                  <div className="p-2 bg-[#F6DDA0] rounded-full h-max">
                    <Image src={AddCircle} alt="right icon" />
                  </div>
                </div>
              </div>
              <div
                className="rounded-[20px] flex flex-col items-center w-full md:w-[275px] top-2 absolute h-full bg-[black] border-solid border border-[#FDF0CD] py-5 px-10"
                key={el}
              ></div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonies */}
      {/* <section className="bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <div className="w-fit my-6 pl-6 sm:pl-14 md:pl-24 pr-6 sm:pr-10 md:pr-0">
          <div className="flex gap-12 w-fit overflow-x-hidden">
            {Array.from(Array(1).keys()).map((el) => (
              <div className="flex w-full md:w-[600px] lg:w-[866px]" key={el}>
                <div className="flex flex-col items-center">
                  <Image
                    src={Quotes}
                    alt="demo image"
                    className="w-[40px] h-[30px] md:w-[70px] md:h-[50px] lg:w-[80px] lg:h-[60px]"
                  />
                  <Image src={Line} alt="demo image" className="mt-8" />
                </div>
                <p className="text3xl sm:text-4xl md:text-5xl text-[#FBF0D1] lg:text-6xl">
                  Thank you for this <span className="italic">genuinely</span>{" "}
                  the best/only thing I really need to look at Instagram
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
