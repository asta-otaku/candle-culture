import Image from "next/image";
import React from "react";
import ArrowRight from "@/assets/arrowRight.svg";
import DemoImage from "@/assets/image.png";
import ArrowBack from "@/assets/arrowBack.svg";
import Apple from "@/assets/apple.svg";
import Spotify from "@/assets/spotify.svg";
import Other from "@/assets/other.svg";
import arrowDown from "@/assets/arrowDown.svg";
import SlantArrow from "@/assets/slantArrow.svg";
import { useState, useEffect } from "react";
import supabase from "@/config/supabase";
import { useRouter } from "next/router";
import { DataType } from "..";
import Link from "next/link";

const SinglePlaylist = () => {
  const router = useRouter();
  const [data, setData] = useState<DataType[] | null>(null);
  const [playlist, setPlaylist] = useState<DataType | null>(null);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    if (!router.query.single) return;
    const getAllPlaylist = async () => {
      const { data, error } = await supabase
        .from("data")
        .select("*")
        .eq("id", router.query.single)
        .single();

      if (error) {
        setPlaylist(null);
        setFetchingData(false);
      }

      if (data) {
        setPlaylist(data);
        setFetchingData(false);
      }
    };

    const getAllData = async () => {
      const { data, error } = await supabase.from("data").select("*");
      if (error) {
        setData(null);
        setFetchingData(false);
      }

      if (data) {
        setData(data);
        setFetchingData(false);
      }
    };

    getAllPlaylist();
    getAllData();
  }, [router]);

  const [nextPlaylist, setNextPlaylist] = useState<DataType | null>(null);
  const [prevPlaylist, setPrevPlaylist] = useState<DataType | null>(null);
  useEffect(() => {
    const playListId = router.query.single;

    if (playListId && data) {
      // Find the index of the current playlist in the array
      const currentIndex = data?.findIndex((p) => p.id == +playListId);
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
                    <div className="w-full md:w-[260px]">
                      <div className="flex items-center justify-between w-full">
                        <p className="uppercase font-medium">Next</p>
                        <Image src={ArrowRight} alt="arrow right" />
                      </div>
                      <div className="rounded-[20px] mt-4">
                        <div className="relative">
                          <img
                            src={nextPlaylist.bannerImage}
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
                          <Link
                            href={`/${nextPlaylist.type}/${nextPlaylist.id}`}
                          >
                            <p className=" italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                              {nextPlaylist.name}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {prevPlaylist && (
                    <div className="w-full md:w-[260px]">
                      <div className="flex items-center justify-between w-full">
                        <p className="uppercase font-medium">PREV</p>
                        <Image src={ArrowBack} alt="arrow back" />
                      </div>
                      <div className="rounded-[20px] mt-4">
                        <div className="relative">
                          <img
                            src={prevPlaylist.bannerImage}
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
                            <Link
                              href={`/${prevPlaylist.type}/${prevPlaylist.id}`}
                            >
                              <p className=" italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                                {prevPlaylist.name}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full order-1 md:order-2">
                  <div className="flex gap-5 items-center text-[20px]">
                    <p className="">
                      {new Date(playlist.created_at).toLocaleDateString()}
                    </p>
                    <span className="w-[9px] h-[9px] bg-black rounded-full"></span>
                    <p>{playlist?.noOfSongs} Songs</p>
                  </div>
                  <p className="italic capitalize text-black text-left text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
                    {playlist.category}
                  </p>
                  <p className="italic text-black text-left text-3xl sm:text-4xl md:text-5xl">
                    {playlist.name}
                  </p>
                  <div className="relative rounded-[20px] mt-6 w-full">
                    <img
                      src={playlist.bannerImage}
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
                <div className="order-2 md:order-3">
                  <div className="flex flex-col justify-center items-center gap-3 w-full md:w-[180px]">
                    {playlist.appleLink && (
                      <>
                        <a
                          href={playlist.appleLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <Image src={Apple} alt="apple" />
                        </a>
                      </>
                    )}

                    {playlist.spotifyLink && (
                      <>
                        <a
                          href={playlist.spotifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <Image src={Spotify} alt="spotify" />
                        </a>
                      </>
                    )}

                    {playlist.otherLink && (
                      <>
                        <a
                          href={playlist.otherLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <Image src={Other} alt="other" />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
};

export default SinglePlaylist;
