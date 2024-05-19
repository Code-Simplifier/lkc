import React from "react"
import { infoStep, manualStep } from "@/constants/admissions"
import { cn } from "@/lib/utils";
import { bold_primary } from "@/app/fonts";
import PageHeader from "@/components/custom/PageHeader";

const Apply = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <PageHeader title="online registration" />
      <section className="text-gray-600 -z-10">
        <div className="container px-5 pb-10 mx-auto flex flex-wrap">
          {infoStep.map((data) => (
            <div
              key={data.id}
              className="flex relative py-10 sm:items-center md:w-2/3 mx-auto"
            >
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-main text-white relative z-10 title-font font-medium text-sm">
                {data.id}
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-main/10 text-main rounded-full inline-flex items-center justify-center">
                  <data.icon size={40} />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2
                    className={cn(
                      bold_primary.className,
                      "text-gray-900 mb-1 text-lg md:text-xl"
                    )}
                  >
                    {data.title}
                  </h2>
                  <p className="leading-relaxed">{data.step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> <br /> <br />
      <PageHeader title="Manual registration" />
      <section className="text-gray-600 -z-10">
        <div className="container px-5 pb-10 mx-auto flex flex-wrap">
          {manualStep.map((data) => (
            <div
              key={data.id}
              className="flex relative py-10 sm:items-center md:w-2/3 mx-auto"
            >
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-main text-white relative z-10 title-font font-medium text-sm">
                {data.id}
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-main/10 text-main rounded-full inline-flex items-center justify-center">
                  <data.icon size={40} />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2
                    className={cn(
                      bold_primary.className,
                      "text-gray-900 mb-1 text-lg md:text-xl"
                    )}
                  >
                    {data.title}
                  </h2>
                  <p className="leading-relaxed">{data.step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Apply