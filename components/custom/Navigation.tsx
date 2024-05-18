import React from "react";
import { navLinks } from "@/constants";

import { Menu } from "lucide-react";

import Logo from "@/assets/img/logo.png";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="fixed flex w-full justify-between px-4 py-2 backdrop-blur-sm">
      <Image src={Logo} alt="Logo" width={100} />
      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>LKC Jalandhar</SheetTitle>
            <SheetDescription className="flex flex-col ">
              {navLinks.map((navlink) => (
                <DropdownMenu key={navlink.id}>
                  <DropdownMenuTrigger className="flex text-lg items-center gap-x-3 my-2 capitalize hover:bg-main duration-300 transition-all rounded-md p-2 hover:text-white">
                    {<navlink.icon />}
                    {navlink.title}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {navlink.sublinks.map((sublink) => (
                      <DropdownMenuItem className="uppercase m-1" key={sublink}>
                        {sublink}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navigation;
