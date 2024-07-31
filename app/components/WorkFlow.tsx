import React from "react";
import WorkFlowHeading from "./WorkFlowHeading";
import CustomButton from "./CustomButton";
import Image from "next/image";
import workflow from "@/public/images/Group 5.png";

const WorkFlow = () => {
  return (
    <div className="my-10">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-center">
        our <span className="text-marketing-orange-100">WorkFlow</span>
      </h1>

      <div className="mt-16 mb-6">
        <div className="transform skew-y-6 inline-block ml-[20%] sm:ml-[28%]">
          <WorkFlowHeading count="01" label="concept" className="text-white" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 border-t-2 border-b-2 border-white transform skew-y-6"></div>
        <div className="relative z-10 py-9 flex justify-center items-center transform skew-y-6">
          <WorkFlowHeading count="02" label="budget" className="text-white" />
        </div>
      </div>

      <div className="relative mb-16">
        <div
          className="absolute inset-0 border-b-2 border-white transform skew-y-6"
          style={{ height: "calc(100% + 3rem)" }}
        ></div>
        <div className="relative z-10 py-12 flex justify-start items-center transform skew-y-6 ml-[20%] md:ml-[55%]">
          <WorkFlowHeading
            count="03"
            label="development"
            className="md:text-5xl text-marketing-orange-100"
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-7 gap-7 md:gap-0 md:space-y-0 md:space-x-10 w-full md:max-w-4xl justify-between">
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start space-y-2 md:w-1/2">
              <p className="text-sm md:text-base text-white max-w-lg p-0 md:p-2 text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem earum voluptas delectus quaerat illo aperiam fugit
                nulla dolores cupiditate labore quisquam distinctio velit,
                ratione quo eaque culpa esse animi! Fugiat? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Omnis necessitatibus
                laboriosam quae.
              </p>
              <div className="flex justify-center md:justify-end pe-6 w-full z-10 mb-9 relative">
                <div className="">
                  <CustomButton label="Explore More" />
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2 md:w-1/2">
              <div className="relative h-[125px] w-[125px] md:h-[175px] md:w-[180px]">
                <Image
                  alt="services"
                  src={workflow}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
