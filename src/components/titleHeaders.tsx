import React from "react";

export const TitleHeaders = ({
  title,
  description,
  position,
}: {
  title: string;
  description: string;
  position: "left" | "right";
}) => {
  return (
    <div className="px-6 sm:px-10 md:px-20">
      <div className="flex justify-between items-center">
        <div
          className={`flex w-[20%] ${
            position === "left"
              ? "md:w-[30%]"
              : position === "right"
              ? "md:w-full"
              : "md:w-[30%]"
          } items-center`}
        >
          <span className="h-3 w-3 rounded-full bg-bg-1"></span>
          <span className="h-1 w-[100%] bg-bg-1"></span>
        </div>
        <div className="w-max flex flex-col text-center justify-center items-center px-4 sm:px-10 md:px-24">
          <p className="text-xl italic text-bg-1 text-[36px] sm:text-[40px] md:text-[60px]">
            {title}
          </p>
          <p className="text-bg-1 text-sm md:text-base mt-4 md:mt-6 text-opacity-70">
            {description}
          </p>
        </div>
        <div
          className={`flex w-[20%] ${
            position === "left"
              ? "md:w-full"
              : position === "right"
              ? "md:w-[30%]"
              : "md:w-full"
          } items-center`}
        >
          <span className="h-1 w-[100%] bg-bg-1"></span>
          <span className="h-3 w-3 rounded-full bg-bg-1"></span>
        </div>
      </div>
    </div>
  );
};
