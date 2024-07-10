import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import WordPullUp from "@/components/ui/word-pull-up";
import { FadeText } from "@/components/ui/fade-text";
import { BookCall } from "../Form/Drawer";
import Link from "next/link";
import Gradient from "./Gradient";


type Props = {};

const people = [
  {
    id: 1,
    name: "Helloi",
    // designation: "Software Engineer",
    // image: "https://i.ibb.co/2cktS8x/channels4-profile-1.jpg",
    image: "https://i.ibb.co/bJW89Nw/Hello-I-standard-logo.png",
    link: " https://helloi.ai/",
  },
  {
    id: 2,
    name: "Dankoe",
    designation: "Writer",
    image: "https://i.ibb.co/rt6fqct/channels4-profile.jpg",
    link: "https://www.instagram.com/thedankoe",
  },
  {
    id: 3,
    name: "Justin Scott",
    designation: "Writer",
    image: "https://i.ibb.co/r3r3t4c/download.jpg",
    link: "https://www.instagram.com/iamjustincscott?igsh=ajJjd2Q4N2p1b2Ru",
  },
  {
    id: 4,
    name: "Sahil bloom",
    designation: "Entrepreneur",
    image: "https://i.ibb.co/X7MKLXP/V1-HRpb-P1-400x400.jpg",
    link: "https://www.instagram.com/sahilbloom?igsh=aDMxbmZ2eGJ5anVu",
  },
  {
    id: 5,
    name: "Project Kim",
    designation: "Entrepreneur",
    image: "https://i.ibb.co/SKQCp3h/images.jpg",
    link: "https://www.instagram.com/projectkim?igsh=MXdzejJjc3hvajBqZg==",
  },
  {
    id: 6,
    name: "Sveni Studios",
    designation: "B2B video agency",
    image:
      "https://i.ibb.co/j44xx1R/T030-SSUEJHG-U030-V6-BGW20-8b2aa1895120-512.png",
    link: "https://www.svenistudios.com/",
  },
];


const Hero = (props: Props) => {
  return (
    <div className="w-full pb-20 sm:pt-40 pt-28 relative">
      {/* Radial gradient for the container to give a faded look */}

      <div className="w-full flex gap-8 md:justify-between flex-col md:flex-row sm:px-10 px-5 max-w-7xl mx-auto">
        {/* Left Part */}
        <div className="w-full md:w-[50%] flex flex-col gap-y-6 items-start justify-start">
          {/* Testimonials */}
          <div className="flex item-center gap-x-6 justify-center">
            <div className="flex flex-row z-1">
              <AnimatedTooltip items={people} />
            </div>
            <div className="flex flex-col gap-1 items-start mt-1">
              <p className="font-medium text-sm">⭐⭐⭐⭐⭐</p>
              <p className="text-white font-semibold text-sm">
                500+ Business scaled
              </p>
            </div>
          </div>

          {/* Heading */}
          <WordPullUp
            className="text-[#FCFCFA] text-5xl font-bold text-left z-10"
            words="Elevate your brand with stunning videos."
          />

          <FadeText
            className="text-white font-semibold text-[1.5rem] leading-9"
            text="Your premier destination for expert motion graphics, animations and video editing, driving viral success with millions of views and
            organic traffic, frame by frame."
            
          />

          {/* Buttons */}
          <div className="flex gap-x-4 items-center">
            <BookCall />

            <Button variant={"outline"} className="z-20">
              <Link href={"/#faq"}>Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Right Part */}
        <div className="w-full md:w-[50%] px-4">
          <video
            className="w-[530px] h-auto border rounded-lg border-none"
            src="/intro.mp4"
            loop
            autoPlay
            muted
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Gradient/>
    </div>
  );
};

export default Hero;
