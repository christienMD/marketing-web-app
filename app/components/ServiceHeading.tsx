import React from "react";

interface props {
  title: string;
  count: string | number;
}

const ServiceHeading = ({ title, count }: props) => {
  return (
    <h2 className="flex items-center gap-3 justify-center md:justify-start">
      <span className="text-2xl font-bold text-marketing-orange-200">
        {count}
      </span>
      <span className="text-white uppercase md:text-lg font-medium text-center md:text-left">
        {title}
      </span>
    </h2>
  );
};

export default ServiceHeading;
