import React from "react";
import TagLine from "../Tagline";

import {
  flipkart,
  acer,
  dell,
  hp,
  intel,
  samsung,
  linkedin
} from "@/assets/svg/placements";
import Image from "next/image";

const Placements = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <TagLine>our placements</TagLine>
      <h1 className="uppercase tracking-wide text-3xl md:text-6xl my-5">
        Building Bridges to Success
      </h1>
      <div className="slider relative w-screen h-[12rem] bg-slate-100/90 flex items-center overflow-hidden">
        <ul className="logos">
          <li className="list">
            <Image className="img" src={flipkart} alt="flipkart" />
          </li>
          <li className="list">
            <Image className="img" src={acer} alt="acer" />
          </li>
          <li className="list">
            <Image className="img" src={samsung} alt="samsung" />
          </li>
          <li className="list">
            <Image className="img" src={dell} alt="dell" />
          </li>
          <li className="list">
            <Image className="img" src={intel} alt="intel" />
          </li>
          <li className="list">
            <Image className="img" src={hp} alt="hp" />
          </li>
          <li className="list">
            <Image className="img" src={linkedin} alt="linkedin" />
          </li>

          <li className="list">
            <Image className="img" src={flipkart} alt="flipkart" />
          </li>
          <li className="list">
            <Image className="img" src={acer} alt="acer" />
          </li>
          <li className="list">
            <Image className="img" src={samsung} alt="samsung" />
          </li>
          <li className="list">
            <Image className="img" src={dell} alt="dell" />
          </li>
          <li className="list">
            <Image className="img" src={intel} alt="intel" />
          </li>
          <li className="list">
            <Image className="img" src={hp} alt="hp" />
          </li>
          <li className="list">
            <Image className="img" src={linkedin} alt="linkedin" />
          </li>
        </ul>
      </div>
      {/* <div className="flex justify-center items-center h-[100%] w-[80%] overflow-hidden bg-slate-100/90 rounded-md">
        <div className="flex justify-center items-center gap-40 p-2 slide">
          <Image className="img" src={flipkart} alt="flipkart" />
          <Image className="img" src={acer} alt="acer" width={100} />
          <Image className="img" src={intel} alt="intel" width={100} />
          <Image className="img" src={dell} alt="dell" width={100} />
          <Image className="img" src={samsung} alt="samsung" width={100} />
          <Image className="img" src={hp} alt="hp" width={100} />
        </div>
      </div> */}
    </div>
  );
};

export default Placements;
