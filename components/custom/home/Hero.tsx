"use client";

import Image from "next/image";
import React from "react";
import bg from "@/assets/img/image.png";

import { cn } from "@/lib/utils";
import { bold_primary, primary, secondary } from "@/app/fonts";
import { Typewriter } from "react-simple-typewriter";
import CustomButton from "../CustomButton";
import { UserRoundPlus } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center h-screen w-full justify-between items-center">
        <div
          className={cn(
            bold_primary.className,
            "pl-10 tracking-wider text-3xl md:text-5xl"
          )}
        >
          <p className="uppercase my-2">
            lyallpur khalsa college (Jalandhar) <br />
          </p>
          <p className={cn(primary.className, "tracking-tight text-xl my-1")}>
            &nbsp;Over <span className="p-1 rounded-md bg-side">100 years</span>{" "}
            of Selfless service to Humanity
          </p>
          <div className={cn(secondary.className, "tracking-wide text-lg")}>
            &nbsp;
            <Typewriter
              words={[
                "Affiliated to GNDU",
                "Re-accredited by NAAC with CGPA - 3.21/4",
                "Grade-A in 3rd cycle",
                "Potential of Excellence Status by GNDU",
              ]}
              loop
              typeSpeed={70}
              deleteSpeed={10}
              delaySpeed={2000}
            />
          </div> <br />
          <CustomButton url={"#"} title="Admissions" icon={<UserRoundPlus />} className="tracking-normal" />
        </div>
        <Image src={bg} alt="bg" />
      </div>
    </>
  );
};

export default Hero;
