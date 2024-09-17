import React, { useRef, useState, useEffect } from "react";
import playIcon from "../assets/playButton.svg";
import pauseIcon from "../assets/pauseButton.svg";
import backwards from "../assets/backward15.svg";
import forwards from "../assets/forward15.png";
import Image from "next/image";

function AudioBox({
  songTitle,
  audioSrc,
}: {
  songTitle: string;
  audioSrc: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Progress as percentage
  const [currentTime, setCurrentTime] = useState(0); // Current time in seconds
  const [duration, setDuration] = useState(0); // Total duration of the audio in seconds
  const [hoverTime, setHoverTime] = useState<number | null>(null); // Time to display on hover
  const [hoverX, setHoverX] = useState(0); // X position for the tooltip
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // Play or pause the audio
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Skip the audio backwards by 15 seconds
  const handleBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 15
      );
    }
  };

  // Skip the audio forward by 15 seconds
  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.duration,
        audioRef.current.currentTime + 15
      );
    }
  };

  // Update the progress and current time as the audio plays
  const updateProgress = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const percentage = (currentTime / duration) * 100;
      setProgress(percentage);
      setCurrentTime(currentTime);
      setDuration(duration);
    }
  };

  // Format time in minutes and seconds
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Add event listener to track the audio progress
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", updateProgress);
      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", updateProgress);
      };
    }
  }, []);

  // Adjust the progress of the audio when the user clicks on the progress bar
  const handleProgressBarClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (audioRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left; // Get the X coordinate of the click
      const width = rect.width; // Get the total width of the progress bar
      const clickPercentage = (clickX / width) * 100; // Calculate the percentage of the click
      const newTime = (audioRef.current.duration * clickPercentage) / 100; // Calculate the new time
      audioRef.current.currentTime = newTime; // Set the new current time of the audio
      setProgress(clickPercentage); // Update the progress state
    }
  };

  // Handle hover to show the time tooltip
  const handleProgressBarHover = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (audioRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const hoverX = e.clientX - rect.left; // Get the X coordinate of the hover
      const width = rect.width; // Get the total width of the progress bar
      const hoverPercentage = (hoverX / width) * 100; // Calculate the percentage of the hover
      const hoverTime = (audioRef.current.duration * hoverPercentage) / 100; // Calculate the hovered time
      setHoverTime(hoverTime); // Set the hovered time
      setHoverX(hoverX); // Set the X position for the tooltip
    }
  };

  // Clear hover time when the mouse leaves the progress bar
  const handleProgressBarLeave = () => {
    setHoverTime(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-4">
          <button onClick={handleBackward} aria-label="Backward 15 seconds">
            <Image
              src={backwards}
              alt="Backward 15 seconds"
              width={24}
              height={24}
            />
          </button>

          <button className="playButton" onClick={handlePlayPause}>
            <Image
              src={isPlaying ? pauseIcon : playIcon}
              alt="Play/Pause Icon"
            />
          </button>

          <button onClick={handleForward} aria-label="Forward 15 seconds">
            <Image
              src={forwards}
              alt="Forward 15 seconds"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="relative h-2 w-full bg-[#CCCC] rounded-lg overflow-hidden cursor-pointer"
        ref={progressBarRef}
        onClick={handleProgressBarClick}
        onMouseMove={handleProgressBarHover}
        onMouseLeave={handleProgressBarLeave}
      >
        {/* Played portion (black) */}
        <div
          className="absolute h-full bg-black"
          style={{ width: `${progress}%` }}
        />

        {/* Hover time tooltip */}
        {hoverTime !== null && (
          <div
            className="absolute -top-10 text-xs bg-gray-800 text-white px-2 py-1 rounded z-50"
            style={{
              left: Math.max(
                0,
                Math.min(hoverX - 20, progressBarRef.current?.clientWidth! - 40)
              ), // Ensure the tooltip doesn't overflow the edges
            }}
          >
            {formatTime(hoverTime)}
          </div>
        )}
      </div>

      {/* Timer */}
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}

export default AudioBox;
