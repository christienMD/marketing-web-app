import React from "react";

const CustomButton = ({ label }: { label: string }) => {
  return (
    <button className="rounded-full inline-flex items-center text-white text-sm gap-3 bg-marketing-orange-100 py-2 px-2.5 hover:opacity-80 transition-opacity">
      {label}
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
  );
};

export default CustomButton;
