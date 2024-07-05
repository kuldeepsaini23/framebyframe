import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const firstRowData = [
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/0pUYTZ-fGnk"
        title="A sdimple talking head video with captions and icons"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="rounded-lg"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/JGX3q79sK7k"
        title="Collage style video for Thebusinessguy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/-GI-zMh45Cs"
        title="Collage video | Sahil Bloom"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/Ane-xIqFWvI"
        title="A collage style video for Justin Scott #shorts"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/SivMVO-8bTU"
        title="Utilise mornings | framebyframemedia"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
];

const secondRowData = [
  {
    iFrame: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TO29T2OJ_as?si=ZmzJemPnObPSE_s-"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/EqJ8kl3O388?si=2ysuxkjs1is862i0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4WKRhxkeorg?si=V-vBd_s1y3dCxeZ3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PEC7s_K2diI?si=MpZJb-VJAqa3Pum0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cc2pGbeV6NY?si=nIHHvH7EQFfRuW7M"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/X_RynQrPsHk?si=oaaECflzD4kmts9a"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="560"
        height="315"
        className="rounded-lg"
        src="https://www.youtube.com/embed/RTrKmDcTWn8?si=PfPTptgejA-nmUrc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      ></iframe>
    ),
  },
];

const thirdRowData = [
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/oogw69EuV5M"
        title="Short animated Reel for Dankoe | framebyframemedia"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/JD-Q6JqZT_M"
        title="Stop scrolling and Start posting | framebyframe media"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/BBxMGrntNlY"
        title="Focus on your niche | framebyframemedia"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    iFrame: (
      <iframe
        width="263"
        height="423"
        src="https://www.youtube.com/embed/NPfM4qNfSIc"
        title="Short animated videos | framebyframemedia"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    ),
  },
];

const ReviewCard = ({ iFrame }: { iFrame: React.ReactNode }) => {
  return <div className="rounded-lg"> {iFrame}</div>;
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col gap-y-20 items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRowData.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:60s]">
        {secondRowData.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>

      <Marquee pauseOnHover className="[--duration:30s]">
        {thirdRowData.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
