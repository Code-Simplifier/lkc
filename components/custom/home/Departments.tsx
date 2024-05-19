import React from "react";
import TagLine from "../Tagline";
import Card from "../cards/DepartmentCard";
import {
  BriefcaseBusiness,
  ChevronRight,
  Cpu,
  DraftingCompass,
  FlaskConical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { secondary } from "@/app/fonts";
import Link from "next/link";

const Departments = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <TagLine>our departments</TagLine>
      <h1 className="uppercase tracking-wide text-3xl md:text-6xl my-5">
        Choose Your Path to Success
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Card title="computer science" icon={<Cpu size={80} />} />
        <Card title="mathematics" icon={<DraftingCompass size={80} />} />
        <Card
          title="business administration"
          icon={<BriefcaseBusiness size={80} />}
        />
      </div>

      <Link href="#">
        <div
          className={cn(
            secondary.className,
            "flex text-lg justify-center items-center gap-x-2 hover:gap-x-4 transition-all duration-150 uppercase"
          )}
        >
          <p>explore all</p>
          <ChevronRight size={20} />
        </div>
      </Link>
    </div>
  );
};

export default Departments;
