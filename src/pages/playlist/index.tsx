import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import SlantArrow from "@/assets/slantArrow.svg";
import Link from "next/link";

const Playlist = () => {
  const allCategory = ["Gospel", "Afrobeat", "Jazz", "Faith", "Hope", "Joy"];
  const [filter, setFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [data, setData] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/music");
        setData(res.data.data);
        setFetchingData(false);
      } catch (error) {
        console.log(error);
        setFetchingData(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      {/* header */}
      <section className="px-6 sm:px-12 md:px-32 text-center py-10 sm:py-16 md:py-20 bg-[#000]">
        <p className="italic text-bg-1 text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
          Soulful Sundays
        </p>
        <p className="text-bg-1 text-opacity-70 text-base mt-4">
          Start each week with a new sound curated just for you
        </p>
      </section>

      <section className="bg-bg-1">
        {" "}
        <div className="flex justify-center">
          <div className="flex text-lg gap-2 px-10 bg-bg-1 w-full md:w-max md:-mt-8 mt-0 pb-2 relative shadow-lg">
            <div
              className="flex flex-col items-center text-black py-4 px-6 cursor-pointer"
              onClick={() => setFilter("all")}
            >
              <p>All</p>
              {filter === "all" && (
                <span className="rounded-[80px] w-[10px] h-1 bg-black"></span>
              )}
            </div>
            <div
              className="flex flex-col items-center text-black py-4 px-6 cursor-pointer"
              onClick={() => setFilter("category")}
            >
              <p>Category</p>
              {filter === "category" && (
                <span className="rounded-[80px] w-[10px] h-1 bg-black"></span>
              )}
            </div>
          </div>
        </div>
        {filter === "category" && (
          <div className="flex justify-center">
            <div className="flex text-lg gap-2 px-10 bg-black w-full md:w-max mt-0 md:-mt-8 pt-6 flex-wrap justify-center">
              {allCategory.map((category) => (
                <div
                  className="flex flex-col items-center text-bg-1 py-4 px-6 cursor-pointer"
                  onClick={() =>
                    setCategoryFilter(category.toLocaleLowerCase())
                  }
                  key={category}
                >
                  <p>{category}</p>
                  {category.toLocaleLowerCase() === categoryFilter && (
                    <span className="rounded-[80px] w-[10px] h-1 bg-bg-1"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
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
          <div className="py-6 md:py-12">
            {data?.length == 0 && (
              <>
                <div className="py-6 text-center">
                  <p>No data to display</p>
                </div>
              </>
            )}
            <div className="w-full my-6 md:px-20 px-6 sm:px-10">
              <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-6 pb-10">
                {data.length > 0 ? (
                  data.filter(
                    (el: any) =>
                      categoryFilter === "" || el.category === categoryFilter
                  )?.length > 0 ? (
                    data
                      .filter(
                        (el: any) =>
                          categoryFilter === "" ||
                          el.category === categoryFilter
                      )
                      .map((el: any, idx) => (
                        <div
                          className="rounded-[20px] w-full cursor-pointer"
                          key={idx}
                          onClick={() =>
                            (window.location.href = `/playlist/${el._id}`)
                          }
                        >
                          <div className="relative">
                            <Image
                              src={el.image}
                              width={0}
                              height={0}
                              alt="demo image"
                              className="rounded-[20px] border-bg-1 border-[4px] w-full md:h-[240px]"
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
                            <Link href={`/playlist/${el._id}`}>
                              <p className=" italic font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                                {el.title}
                              </p>
                            </Link>
                            <p className="text-base">{el.subtitle}</p>
                            <p className="mt-2 border-[0.89px] capitalize w-max text-xs rounded-[20px] border-black text-opacity-50 px-2 py-1">
                              {el.category}
                            </p>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="w-full flex items-center justify-center">
                      <p className="text-[#A98D40] font-medium text-lg">
                        No playlist available
                      </p>
                    </div>
                  )
                ) : (
                  <div className="w-full flex items-center justify-center">
                    <p className="text-[#A98D40] font-medium text-lg">
                      No playlist available
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Playlist;
