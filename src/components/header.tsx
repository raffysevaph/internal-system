"use client";

import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@src/hooks/use-scroll";
import { cn } from "@src/lib/utils";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        "sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200",
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-2 items-center justify-center md:hidden"
          >
            {/* <span className="h-7 w-7 bg-zinc-300 rounded-lg"></span> */}
            {/* <span className="font-bold text-xl flex text-main-color-2">
              HATCHIT
            </span>
            <span className="font-bold text-xl flex text-main-color-1">
              SOLUTIONS
            </span> */}
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-8 w-8 flex justify-center text-center">
            {/* <span className="font-semibold text-sm">Hello, User!</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
