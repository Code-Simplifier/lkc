import Hero from "@/components/custom/home/Hero";
import HeroParallax from "@/components/custom/home/HeroParallax";
import Departments from "@/components/custom/home/Departments";
import Placements from "@/components/custom/home/Placements";

import {
  eco,
  rugby,
  maths,
  scholar,
  women,
  youth,
  wrestling,
} from "@/assets/img/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <HeroParallax products={images} />
      <Departments />
      <Placements />
    </main>
  );
}

export const images = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: eco,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: youth,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: wrestling,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: women,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: maths,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: scholar,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: rugby,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: eco,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: youth,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: wrestling,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: women,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: maths,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: scholar,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: rugby,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: eco,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: youth,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: wrestling,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: women,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: maths,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: scholar,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: rugby,
  },
];
