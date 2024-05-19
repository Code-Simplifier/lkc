import Image from "next/image";
import React from "react";

import img from "@/assets/img/image.png";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { secondary } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  icon: any;
  children?: React.ReactNode;
}

const Card = ({ title, icon, children }: CardProps) => {
  return (
    <div className="dp__container">
      <div className="dpc__container">
        <article className="dpc__article">
          <div className="w-[320px] h-[328px] flex justify-center items-center bg-main rounded-md">
            {icon}
          </div>
          <div className={cn("dpc__data flex justify-between")}>
            <h2 className={cn(secondary.className, "traking-tight uppercase")}>
              {title}
            </h2>
            <p>{children}</p>
            <Link href={"#"}>
              <ChevronRight />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
