import React, { useRef, useState } from "react";
import playIcon from "../assets/playButton.svg";
import pauseIcon from "../assets/pauseButton.svg";
import Image from "next/image";

function AudioBox({
  songTitle,
  // fileSize,
  audioSrc,
}: {
  songTitle: string;
  // fileSize: string;
  audioSrc: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex p-4 items-center justify-between gap-4 self-stretch rounded-2xl border">
      <div className="flex flex-col gap1.5">
        <div className="self-stretch">{songTitle}</div>
        {/* <div className="w-10 text-xs">{fileSize}</div> */}
      </div>

      <button className="playButton" onClick={handlePlayPause}>
        <Image src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause Icon" />
      </button>

      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}

export default AudioBox;
