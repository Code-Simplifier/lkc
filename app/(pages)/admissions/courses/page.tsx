import { secondary } from "@/app/fonts";
import PageHeader from "@/components/custom/PageHeader";
import { courses } from "@/constants/admissions";
import { cn } from "@/lib/utils";
import React from "react";

const Courses = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      {courses.map((data) => (
        <div key={data.id} className="flex flex-col mb-10 items-center">
          <PageHeader title={data.title} />
          {data.list.map((item) => (
            <div
              key={item.id}
              className="w-[90%] bg-slate-100/40 border-2 flex flex-col md:flex-row border-main mt-10 rounded-md"
            >
              <div className="bg-main w-full md:w-1/2 flex justify-center items-center">
                {
                  <item.icon className="w-[20%] h-[20%] py-10 md:w-[40%] md:[40%] md:py-0" />
                }
              </div>

              <div className="flex flex-col w-full items-center">
                <h1
                  className={cn(
                    secondary.className,
                    "uppercase tracking-tight text-2xl my-3 pb-3 text-center border-b bg-transparent text-transparent bg-clip-text bg-gradient-to-b from-main to-side"
                  )}
                >
                  {item.title}
                </h1>
                {item.list.map((course) => (
                  <div
                    key={String(course)}
                    className="w-[90%] rounded-md bg-slate-300/40 p-2 my-1 flex justify-between"
                  >
                    <p>{course}</p>
                  </div>
                ))}
                <br />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Courses;
