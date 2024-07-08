"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { BookCall } from "../core/Form/Drawer";
import Image from "next/image";
import Hamburger from "../common/HameBurger";
import 'animate.css';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(true);
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            // change rounded-full to rounded-lg
            // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
            // change  pr-2 pl-8 py-2 to px-10 py-5
            "sm:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-8 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 bg-transparent py-3 hidden",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            // backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.225)",
          }}
        >
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="Frame by Frame"
              width={48}
              height={48}
            />
          </Link>
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-white font-bold items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className="text-base !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
          {/* remove this login btn */}
          <BookCall />
        </motion.div>
      </AnimatePresence>

      <div className="w-full sm:hidden flex justify-between px-4 py-2 border-b border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] relative">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Frame by Frame"
            width={54}
            height={54}
          />
        </Link>
        <Hamburger open={open} setOpen={setOpen} />
        <div
          className={`animate__animated animate__fadeIn animate__faster absolute top-full left-0 right-0 z-[100] backdrop-blur-lg pt-6 pb-[8vh] font-rubik sm:hidden  ${
            open
              ? "opacity-1 pointer-events-auto visible"
              : "pointer-events-none hidden opacity-0"
          } transition-all duration-300`}
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            boxShadow: "0px 4px 10px rgba(157, 157, 157, 0.2)",
          }}
        >
          <ul className="flex flex-col items-center gap-y-6 lg:hidden select-none" onClick={()=>setOpen(false)}>
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-white font-bold items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                {/* add !cursor-pointer */}
                {/* remove hidden sm:block for the mobile responsive */}
                <span className="text-base !cursor-pointer">
                  {navItem.name}
                </span>
              </Link>
            ))}
             <BookCall />
          </ul>
         
        </div>
      </div>
    </>
  );
};
