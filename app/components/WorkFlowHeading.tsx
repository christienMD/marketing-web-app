import React from "react";

const WorkFlowHeading = ({
  count,
  label,
  className
}: {
  count: string;
  label: string;
  className?: string
}) => {
  return (
    <h3 className={`text-3xl sm:text-4xl font-black uppercase ${className}`}>
      <span className="text-marketing-orange-100">{count}</span> {label}
    </h3>
  );
};

export default WorkFlowHeading;
