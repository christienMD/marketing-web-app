import React from "react";
import WorkFlowHeading from "./WorkFlowHeading";

const WorkFlow = () => {
  return (
    <div className="my-10">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-center">
        our <span className="text-marketing-orange-100">WorkFlow</span>
      </h1>

      <div className="mt-16 mb-6">
        <div className="transform skew-y-6 inline-block ml-[20%] sm:ml-[28%]">
          <WorkFlowHeading count="01" label="concept" className="text-white"/>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 border-t-2 border-b-2 border-white transform skew-y-6"></div>
        <div className="relative z-10 py-9 flex justify-center items-center transform skew-y-6">
          <WorkFlowHeading count="02" label="budget" className="text-white" />
        </div>
      </div>

      <div className="relative mb-16">
        <div className="absolute inset-0 border-b-2 border-white transform skew-y-6"></div>
        <div className="relative z-10 py-9 flex justify-start items-center transform skew-y-6 ml-[20%] md:ml-[55%] mt-2">
          <WorkFlowHeading count="03" label="development" className="md:text-5xl text-marketing-orange-100"/>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
