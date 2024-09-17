import Image from "next/image";
import React from "react";
import axios from "axios";
import rightArrow from "@/assets/rightArrow.svg";
import ArrowBack from "@/assets/arrowBack.svg";
import Other from "@/assets/other.svg";
import arrowDown from "@/assets/arrowDown.svg";
import SlantArrow from "@/assets/slantArrow.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BASE_URL } from "@/lib/constants";

const SinglePlaylist = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [playlist, setPlaylist] = useState<{
    _id: string;
    category: string;
    description: string;
    image: string;
    link: string;
    subtitle: string;
    title: string;
  }>({
    _id: "",
    category: "",
    description: "",
    image: "",
    link: "",
    subtitle: "",
    title: "",
  });
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/poetry`);
        setData(res.data.data);
        const playlist = res.data.data.find(
          (p: any) => p._id == router.query.single
        );
        setPlaylist({
          ...playlist,
        });
        setFetchingData(false);
      } catch (error) {
        console.log(error);
        setFetchingData(false);
      }
    };
    fetchData();
  }, [playlist]);

  const [nextPlaylist, setNextPlaylist] = useState<any | null>(null);
  const [prevPlaylist, setPrevPlaylist] = useState<any | null>(null);
  useEffect(() => {
    const playListId = router.query.single;

    if (playListId && data) {
      // Find the index of the current playlist in the array
      const currentIndex = data?.findIndex((p: any) => p._id == +playListId);
      // Calculate the next and previous playlist IDs
      if (currentIndex == 0) {
        setPrevPlaylist(null);
        setNextPlaylist(data[currentIndex + 1]);
      }
      if (currentIndex > 0) {
        setPrevPlaylist(data[currentIndex - 1]);
        setNextPlaylist(data[currentIndex + 1]);
      }
    }
  }, [router, data]);

  return (
    <main className="bg-bg-1">
      {fetchingData ? (
        <div className="flex justify-center py-14">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-black motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          {playlist && (
            <section className="px-6 sm:px-12 md:px-40 text-center py-10 sm:py-16 md:py-20 ">
              <div className="flex flex-col md:flex-row gap-10 md:gap-24">
                <div className="flex flex-row md:flex-col gap-6 order-3 md:order-1">
                  {nextPlaylist && (
                    <Link
                      href={`/poetry/${nextPlaylist._id}`}
                      className="w-full md:w-[260px]"
                    >
                      <div className="flex items-center justify-between w-full">
                        <p className="uppercase font-medium">Next</p>
                        <Image src={rightArrow} alt="arrow right" />
                      </div>
                      <div className="rounded-[20px] mt-4">
                        <div className="relative">
                          <Image
                            src={nextPlaylist.image}
                            width={0}
                            height={0}
                            alt="demo image"
                            className="rounded-[20px] border-4 border-black w-full md:h-[240px]"
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
                            {nextPlaylist.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                  {prevPlaylist && (
                    <Link
                      href={`/poetry/${prevPlaylist._id}`}
                      className="w-full md:w-[260px]"
                    >
                      <div className="flex items-center justify-between w-full">
                        <p className="uppercase font-medium">PREV</p>
                        <Image src={ArrowBack} alt="arrow back" />
                      </div>
                      <div className="rounded-[20px] mt-4">
                        <div className="relative">
                          <Image
                            src={prevPlaylist.image}
                            width={0}
                            height={0}
                            alt="demo image"
                            className="rounded-[20px] border-4 border-black w-full md:h-[240px]"
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
                          <div className="py-3 text-black">
                            <p className=" italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                              {prevPlaylist.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
                <div className="w-full order-1 md:order-2">
                  <div className="flex gap-5 items-center text-[20px]">
                    <p className="">{playlist.description}</p>
                    <span className="w-[9px] h-[9px] bg-primary rounded-full"></span>
                    <p>{playlist?.subtitle} Songs</p>
                  </div>
                  <p className="italic capitalize text-black text-left text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
                    {playlist.category}
                  </p>
                  <p className="italic text-black text-left text-3xl sm:text-4xl md:text-5xl">
                    {playlist.title}
                  </p>
                  <div className="relative rounded-[20px] mt-6 w-full">
                    <Image
                      width={0}
                      height={0}
                      src={playlist.image}
                      alt="demo image"
                      className="rounded-[40px] border-black border-[4px] w-full"
                    />
                    <div className="absolute bg-[#DF8010] rounded-[50%] w-[44px] p-3 md:w-[60px] h-[44px] md:h-[60px] flex -top-5 right-12 justify-center items-center">
                      <Image
                        src={arrowDown}
                        alt="slant arrow"
                        className="w-auto"
                      />
                    </div>
                  </div>
                  <div className="text-left text-xl mt-8">
                    <p>{playlist.description}</p>
                  </div>
                </div>
                <>
                  <a
                    href={playlist.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={Other} alt="other" />
                  </a>
                </>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
};

export default SinglePlaylist;
