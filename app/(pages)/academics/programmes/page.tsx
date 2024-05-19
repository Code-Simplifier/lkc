import { secondary } from "@/app/fonts";
import PageHeader from "@/components/custom/PageHeader";
import Card from "@/components/custom/cards/DepartmentCard";
import { programmes } from "@/constants/academics";
import { cn } from "@/lib/utils";
import { Cpu } from "lucide-react";
import Image from "next/image";
import React from "react";

const Programmes = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <PageHeader title="Programmes offered" />
      <p
        className={cn(
          secondary.className,
          "tracking-tight text-lg text-justify py-2 px-10"
        )}
      >
        The following degree programmes are offered by the college as prescribed
        by Guru Nanak Dev University.
      </p>
      {programmes.map((data) => (
        <div
          key={data.id}
          className="w-[70%] bg-slate-100/40 border-2 flex flex-col md:flex-row border-main mt-10 rounded-md"
        >
          <div className="bg-main w-full md:w-1/2 flex justify-center items-center">
            {<data.icon className="w-[20%] h-[20%] py-10 md:w-[40%] md:[40%] md:py-0" />}
          </div>

          <div className="flex flex-col w-full items-center">
            <h1
              className={cn(
                secondary.className,
                "uppercase tracking-tight text-2xl my-3 pb-3 text-center border-b bg-transparent text-transparent bg-clip-text bg-gradient-to-b from-main to-side"
              )}
            >
              {data.title}
            </h1>
            {data.courses.map((course) => (
              <div key={String(course)} className="w-[90%] rounded-md bg-slate-300/40 p-2 my-1 flex justify-between">
                <p>{course.title}</p>
                <p className="flex gap-x-1 flex-row-reverse">
                  <span className={cn(secondary.className, "hidden md:flex")}>(Sem. System)</span>{" "}
                  {course.duration} yrs.
                </p>
              </div>
            ))}
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programmes;
