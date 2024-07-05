import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";
import MagicButton from "@/components/common/MagicButton";
import { ArrowRight } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import WordPullUp from "@/components/ui/word-pull-up";
import { FadeText } from "@/components/ui/fade-text";
import Ripple from "@/components/ui/ripple";
import { WavyBackground } from "@/components/ui/wavy-background";
import RetroGrid from "@/components/ui/retro-grid";
import { BookCall } from "../Form/Drawer";

type Props = {};

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Hero = (props: Props) => {
  return (
    <div className="w-full pb-20 pt-40 relative">
      {/* Radial gradient for the container to give a faded look */}
      <div
        // chnage the bg to bg-black-100, so it matches the bg color and will blend in
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <div className="w-full flex gap-8 md:justify-between flex-col md:flex-row sm:px-10 px-5 max-w-7xl mx-auto">
        {/* Left Part */}
        <div className="w-full md:w-[50%] flex flex-col gap-y-6 items-start justify-start">
          {/* Testimonials */}
          <div className="flex item-center gap-x-6 justify-center">
            <div className="flex flex-row">
              <AnimatedTooltip items={people} />
            </div>
            <div className="flex flex-col gap-1 items-start mt-1">
              <p className="font-medium text-sm">⭐⭐⭐⭐⭐</p>
              <p className="text-white font-semibold text-sm">
                200+ Business scaled
              </p>
            </div>
          </div>

          {/* Heading */}
          <WordPullUp
            className="text-[#FCFCFA] text-5xl font-bold text-left z-20"
            words="Elevate your brand with stunning videos."
          />

          <FadeText
            className="text-[#D4D4D4] font-semibold text-[1.5rem] leading-9 z-20"
            direction="right"
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
            text=" Your premier destination for expert motion graphics, animations and
            video editing, driving viral success with millions of views and
            organic traffic, frame by frame."
          />

          {/* Buttons */}
          <div className="flex gap-x-4 items-center">
          <BookCall/>

            <Button variant={"outline"} className="z-20">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Part */}
        <div className="w-full md:w-[50%] px-4">
          <video
            className="w-[450px] h-auto border rounded-lg border-none"
            src="/intro.mp4"
            loop
            autoPlay
            muted
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* <Ripple /> */}
      <RetroGrid />
    </div>
  );
};

export default Hero;
