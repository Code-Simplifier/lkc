import { secondary } from "@/app/fonts";
import PageHeader from "@/components/custom/PageHeader";
import PageSubHeader from "@/components/custom/PageSubHeader";
import { aboutManagement } from "@/constants/about";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Management = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <PageHeader title="Messages from our management" /> <br /> <br />
      {aboutManagement.map((data) => (
        <div
          className="grid grid-cols-1 w-[90%] my-5 place-items-center md:grid-cols-2 gap-3 px-5"
          key={data.id}
        >
          <Image
            src={data.img}
            alt={data.title}
            className="rounded-full w-[300px] h-[300px] object-cover border-2 border-main"
          />
          <div>
            <div className="text-center">
              <PageSubHeader title={data.title} className="mt-5 py-2" />
              <p className={cn(secondary.className, "capitalize pt-2 pb-10")}>
                {data.name}
              </p>
            </div>
            <p className="text-justify px-10">{data.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Management;
