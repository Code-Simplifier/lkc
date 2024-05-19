import PageHeader from "@/components/custom/PageHeader";
import PageSubHeader from "@/components/custom/PageSubHeader";
import { aboutValues } from "@/constants/about";
import React from "react";

const Values = () => {
  return (
    <div className="pt-36 flex flex-col justify-center items-center ">
      <PageHeader title="core values of the instituion" />
      {aboutValues.map((data) => (
        <div key={data.id}>
          <PageSubHeader title={data.title} className="my-10 p-2" />
          <p className="px-10 text-justify">{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Values;
