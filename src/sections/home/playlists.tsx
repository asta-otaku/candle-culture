import React, { useEffect, useState } from "react";
import axios from "axios";
import { TitleHeaders } from "@/components/titleHeaders";
import Image from "next/image";
import SlantArrow from "@/assets/slantArrow.svg";
import Link from "next/link";
import { BASE_URL } from "@/lib/constants";

export const PlaylistsSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/music`);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-28">
      <TitleHeaders
        title={"Playlists"}
        description={"Sounds that uplift the spirit"}
        position={"right"}
      />
      <div className="w-full my-6 md:overflow-x-scroll no-scrollbar pl-6 sm:pl-10 md:pl-20 pr-6 sm:pr-10 md:pr-0">
        <div className="md:flex grid grid-cols-2 gap-6 md:w-fit">
          {data.map((el: any, idx) => (
            <div className="rounded-[20px] w-full md:w-[260px]" key={idx}>
              <div className="relative">
                <Link href={`/playlist/${el._id}`}>
                  <Image
                    src={el.image}
                    width={0}
                    height={0}
                    alt="demo image"
                    className="rounded-[20px] border-bg-1 border-[4px] w-full md:h-[240px]"
                  />
                </Link>
                <div className="absolute bg-white rounded-[50%] w-[38px] p-3 md:w-[48px] h-[38px] md:h-[48px] flex bottom-3 right-3 justify-center items-center">
                  <Image
                    src={SlantArrow}
                    alt="slant arrow"
                    className="w-auto"
                  />
                </div>
              </div>
              <div className="py-3">
                <Link href={`/playlist/${el._id}`}>
                  {" "}
                  <p className="text-bg-1 italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                    {el.title}
                  </p>
                </Link>

                <p className="text-bg-1 text-base">{el.subtitle}</p>
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
