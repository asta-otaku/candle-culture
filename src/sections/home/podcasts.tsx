import React, { useEffect, useState } from "react";
import axios from "axios";
import { TitleHeaders } from "@/components/titleHeaders";
import Image from "next/image";
// import Podcasts from "@/assets/Podcasts.png";
import SlantArrow from "@/assets/slantArrow.svg";
import Link from "next/link";
import { BASE_URL } from "@/lib/constants";

export const PodcastSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/podcast`);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-primary relative py-16 sm:py-20 md:py-24 lg:py-28">
      {/* <Image
        src={Podcasts}
        alt="category"
        className="top-6 right-0 absolute md:block hidden h-60 w-[70%]"
      /> */}
      <TitleHeaders
        title={"Podcasts"}
        description={"Conversations with creators"}
        position={"right"}
      />
      <div className="w-full my-6 md:overflow-x-scroll no-scrollbar pl-6 sm:pl-10 md:pl-20 pr-6 sm:pr-10 md:pr-0">
        <div className="md:flex grid grid-cols-2 gap-6 md:w-fit">
          {data.length > 0 ? (
            data?.map((el: any, idx) => (
              <Link
                href={`/podcast/${el._id}`}
                className="rounded-[20px] w-full md:w-[260px]"
                key={idx}
              >
                <div className="relative">
                  <Image
                    src={el.image}
                    width={0}
                    height={0}
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
                  <Link href={`/podcast/${el._id}`}>
                    {" "}
                    <p className="text-bg-1 italic font-semibold text-base md:text-lg lg:text-xl">
                      {el.title}
                    </p>
                  </Link>

                  <p className="text-bg-1 text-sm">{el.subtitle}</p>
                  <p className="text-bg-1 mt-2 border-[0.89px] w-max text-sm rounded-[20px] capitalize border-bg-1 text-opacity-50 px-2 py-1">
                    {el.category}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-full flex items-center justify-center">
              <p className="text-[#A98D40] font-medium text-lg">
                No podcast available
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
