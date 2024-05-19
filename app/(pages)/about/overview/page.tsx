import PageHeader from "@/components/custom/PageHeader";
import PageSubHeader from "@/components/custom/PageSubHeader";
import { aboutOverview } from "@/constants/about";
import React from "react";

const AboutOverview = () => {
  return (
    <div className="pt-32 flex flex-col justify-center items-center">
      <PageHeader title="Why Lyallpur Khalsa College?" />
      {aboutOverview.map((data) => (
        <div key={data.id}>
          <PageSubHeader title={data.title} className="py-2 my-10" />
          <p className="px-10 text-justify">{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutOverview;
