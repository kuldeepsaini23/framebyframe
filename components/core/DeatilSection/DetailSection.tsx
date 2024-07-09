import HiglightedCard from "@/components/common/HighlightedCard";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import NumberTicker from "@/components/ui/number-ticker";
import Link from "next/link";
import React from "react";

type Props = {};

const socialMedia = [
  {
    SocialMediaCount: 500,
    PrefixAfterCount: "+",
    // SocialMediaLink: "https://www.instagram.com/",
    BottomText: "Projects",
  },

  {
    SocialMediaCount: 5,
    PrefixAfterCount: "M+",
    // SocialMediaLink: "https://www.instagram.com/",
    BottomText: "Account Reached",
  },
  {
    SocialMediaCount: 100,
    PrefixAfterCount: "M+",
    // SocialMediaLink: "https://www.instagram.com/",
    BottomText: "Views",
  },
];

const DetailSection = (props: Props) => {
  return (
    <HiglightedCard className="w-full" color="#FE4433" bottom={1/2} right={2}>
      {/* Cards */}
      <div className="flex justify-center items-center gap-6 flex-wrap py-20">
        {socialMedia?.map((item, index) => (
          <ShimmerButton
            key={index}
            className="p-6 flex flex-col items-center justify-center gap-1 rounded-xl px-10 border border-[rgba(255,255,255,0.32)]"
          >
            <p className="text-3xl sm:text-6xl font-semibold text-white">
              <NumberTicker value={item?.SocialMediaCount} />
              {item.PrefixAfterCount}
            </p>
            <div
              className="text-base sm:text-xl font-normal text-shark-300 hover:text-brand hover:underline text-white"
            >
              {item.BottomText}
            </div>
           
          </ShimmerButton>
        ))}
      </div>
      
    </HiglightedCard>
  );
};

export default DetailSection;
