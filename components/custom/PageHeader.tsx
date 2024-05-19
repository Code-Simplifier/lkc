import { bold_primary } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className={cn(bold_primary.className, "uppercase text-center text-4xl md:text-6xl tracking-wide")}>
      {title}
    </div>
  );
};

export default PageHeader;
