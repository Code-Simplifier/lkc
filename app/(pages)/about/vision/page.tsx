import PageHeader from "@/components/custom/PageHeader";
import PageSubHeader from "@/components/custom/PageSubHeader";
import { aboutVision } from "@/constants/about";
import React from "react";

const Vision = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <PageHeader title="Fostering Excellence in Education" />
      {aboutVision.map((data) => (
        <div key={data.id}>
          <PageSubHeader title={data.title} className="my-10" />
          <p className="text-justify px-10">{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Vision;
