import { bold_primary } from "@/app/fonts";
import PageHeader from "@/components/custom/PageHeader";
import PageSubHeader from "@/components/custom/PageSubHeader";
import { infoStep, information } from "@/constants/admissions";
import { cn } from "@/lib/utils";
import { Globe, Mail, Phone, Printer } from "lucide-react";
import React from "react";

const Information = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <PageHeader title="general information" />
      {information.map((data) => (
        <div key={data.id} className="flex flex-col items-center">
          <PageSubHeader title={data.title} className="my-10 py-2" />
          <ul className="flex flex-col gap-y-5 w-[85%] list-disc">
            {data.list.map((item) => (
              <li key={String(item)} className="text-justify">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <PageSubHeader title="online registration" className="my-10 py-2" />
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
      </section>
      <PageSubHeader title="admission helpline" className="my-10 py-2" />
      <p className="mx-5 text-justify">
        For any query related to admission, eligibility and documents needed,
        contact us at our telephone numbers:
      </p>
      <div className="flex flex-col items-center gap-y-2 mt-5">
        <div className="flex gap-x-10 justify-between p-2 rounded-md bg-slate-300/40">
          <Phone />
          +91-181-2241466
        </div>
        <div className="flex gap-x-10 justify-between p-2 rounded-md bg-slate-300/40">
          <Printer />
          +91-181-2241465
        </div>
        <div className="flex gap-x-3 justify-between p-2 rounded-md bg-slate-300/40">
          <Mail />
          lkcjald@yahoo.com
        </div>
      </div>
    </div>
  );
};

export default Information;
