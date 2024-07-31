import React from "react";

const Hero = () => {
  return (
    <div className="pt-14 lg:pt-16 xl:pt-20 h-full">
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-center text-white">
          <span
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-marketing-orange-100 font-black mb-4"
          >
            marketing
          </span>
          <div className="inline-block">
            <div className="flex items-center justify-center">
              <div className="flex flex-col mr-2 text-right">
                <span className="text-sm sm:text-base md:text-xl font-extrabold">
                  by
                </span>
                <span className="text-sm sm:text-base md:text-xl font-extrabold">
                  for
                </span>
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFBB55] font-black">
                ARTISTS
              </span>
            </div>
            <div className="relative">
              <span className="absolute right-3 mt-2 capitalize text-[0.5rem] sm:text-[0.72rem]">
                creative mind, creative works
              </span>
            </div>
          </div>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-sm capitalize text-white">
            Modern <span className="text-marketing-orange-200">Problem</span>{" "}
            requires <span className="text-marketing-orange-200">solution</span>
          </p>

          <button className="rounded-full inline-flex items-center text-white text-sm gap-3 bg-marketing-orange-100 py-2 px-2.5 hover:opacity-80 transition-opacity">
            Let&apos;s Connect{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
