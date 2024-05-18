import React from "react";
import brackets from "./Brackets";
import { cn } from "@/lib/utils";
import { secondary } from "@/app/fonts";

interface Props {
  className?: any;
  children: React.ReactNode;
}

const TagLine = ({ className, children }: Props) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div
        className={cn("mx-3 text-n-3 text-side uppercase", secondary.className)}
      >
        {children}
      </div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
