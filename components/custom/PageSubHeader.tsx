import { secondary } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface PageSubHeaderProps {
  title: string;
  className?: any,
}

const PageSubHeader = ({ title, className }: PageSubHeaderProps) => {
  return (
    <div
      className={cn(
        secondary.className,
        className,
        "bg-transparent capitalize text-center bg-clip-text text-transparent bg-gradient-to-b text-3xl md:text-5xl from-main to-side"
      )}
    >
      {title}
    </div>
  );
};

export default PageSubHeader;
