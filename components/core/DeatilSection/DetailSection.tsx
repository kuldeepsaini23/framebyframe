import HiglightedCard from "@/components/common/HighlightedCard";
import NumberTicker from "@/components/ui/number-ticker";
import Link from "next/link";
import React from "react";

type Props = {};

const socialMedia = [
  {
    SocialMediaCount: 100,
    PrefixAfterCount: "+",
    SocialMediaLink: "https://www.instagram.com/",
    BottomText: "Instagram",
  },

  {
    SocialMediaCount: 1000,
    PrefixAfterCount: "+",
    SocialMediaLink: "https://www.instagram.com/",
    BottomText: "Instagram",
  },
  {
    SocialMediaCount: 100,
    PrefixAfterCount: "+",
    SocialMediaLink: "https://www.instagram.com/",
    BottomText: "Instagram",
  },
  {
    SocialMediaCount: 9000,
    PrefixAfterCount: "+",
    SocialMediaLink: "https://www.instagram.com/",
    BottomText: "Instagram",
  },
];

const DetailSection = (props: Props) => {
  return (
    <HiglightedCard className="w-full" color="#FE4433" bottom={1/2} right={2}>
      {/* Cards */}
      <div className="flex justify-center items-center gap-6 flex-wrap py-20">
        {socialMedia?.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center gap-1 rounded-xl border border-[rgba(255,255,255,0.32)]"
          >
            <p className="text-3xl font-semibold text-white">
              <NumberTicker value={item?.SocialMediaCount} />
              {item.PrefixAfterCount}
            </p>
            <Link
              href={item.SocialMediaLink || "/"}
              target="_blank"
              className="text-base font-normal text-shark-300 hover:text-brand hover:underline"
            >
              {item.BottomText}
            </Link>
          </div>
        ))}
      </div>
    </HiglightedCard>
  );
};

export default DetailSection;
