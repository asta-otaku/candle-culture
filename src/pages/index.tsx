import supabase from "@/config/supabase";
import { useState, useEffect } from "react";
import { Hero } from "@/sections/home/hero";
import { PlaylistsSection } from "@/sections/home/playlists";
import { PoetrySection } from "@/sections/home/poetry";
import { PodcastSection } from "@/sections/home/podcasts";
import { BrowseType } from "@/sections/home/browseType";
import { PrayerSection } from "@/sections/home/prayerSection";

export interface DataType {
  appleLink: string | null;
  bannerImage: string;
  category: string | null;
  created_at: Date;
  description: string | null;
  id: number;
  name: string;
  otherLink: string | null;
  podcastAuthor: string | null;
  spotifyLink: string | null;
  theme: string | null;
  type: string | null;
  noOfSongs: number | null;
  poetryMinRead: number | null;
  podcastTimeListen: number | null;
}
export default function Home() {
  const [data, setData] = useState<DataType[] | null>(null);
  const [fetchingData, setFetchingData] = useState(true);
  useEffect(() => {
    const getAllData = async () => {
      setFetchingData(true);
      const { data, error } = await supabase
        .from("data")
        .select("*")
        .range(0, 20);

      if (error) {
        setData(null);
        setFetchingData(false);
      }

      if (data) {
        setData(data);
        setFetchingData(false);
      }
    };

    getAllData();
  }, []);

  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* data */}
      {fetchingData ? (
        <div className="flex justify-center my-14">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          <PlaylistsSection data={data} />
          {/* Poetry */}
          <PoetrySection data={data} />
          {/* Podcast */}
          <PodcastSection data={data} />
        </>
      )}
      {/* Category */}
      <BrowseType />
      {/* Prayer */}
      <PrayerSection />
    </main>
  );
}
