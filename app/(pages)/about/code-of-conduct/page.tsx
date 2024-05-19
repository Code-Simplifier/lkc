import { bold_primary } from "@/app/fonts";
import { aboutConduct } from "@/constants/about";
import { cn } from "@/lib/utils";
import { NotebookText } from "lucide-react";
import Link from "next/link";
import React from "react";

const CodeOfConduct = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-[90%]">
        <p
          className={cn(
            bold_primary.className,
            "uppercase tracking-wide text-2xl"
          )}
        >
          Code of Conduct
        </p>
        <Link
          href={
            "https://lkc.ac.in/wp-content/uploads/2019/09/Hand-book-of-Code-of-Conduct.pdf"
          }
          target="_blank"
        >
          <NotebookText
            size={35}
            className="text-main hover:fill-main/40 transition-all duration-200"
          />
        </Link>
      </div>
      <p className="text-lg text-justify w-[90%] py-5">
        To foster a sense of discipline among the students a code of conduct has
        been laid down by the College. The institution expects the students to
        observe this code of conduct strictly.
      </p>
      <ul className="flex flex-col gap-y-5 w-[85%] list-disc">
        {aboutConduct.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default CodeOfConduct;
