import { secondary } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  title: string;
  url: any;
  className?: any;
  icon?: any;
}

const CustomButton = ({ title, url, icon, className }: CustomButtonProps) => {
  return (
    <Link href={url}>
      <button
        className={cn(
          secondary.className,
          "flex gap-x-3 p-2 text-lg items-center rounded-md border-2 border-side bg-side/30 hover:bg-side/70 transition-all duration-500",
          className
        )}
      >
        <p>{title}</p>
        {icon}
      </button>
    </Link>
  );
};

export default CustomButton;
