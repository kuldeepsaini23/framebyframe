import { Footer } from "@/components/common/Footer";
import DetailSection from "@/components/core/DeatilSection/DetailSection";
import { FAQ } from "@/components/core/FAQ/FAQ";
import Hero from "@/components/core/Hero";
import MarqueeDemo from "@/components/core/ProjectDisplay/Projects";
import { SocialProofTestimonials } from "@/components/core/Testimonial";
import { CallToAction } from "@/components/ui/call-to-action";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  return {
    metadataBase: new URL(
      process.env.SITE_URL || "https://www.framebyframe.media"
    ),
    title: `Video Production Company | FramebyFrame`,
    description: `Boost your business and content rapidly with our trending animations and video editing services. Schedule a free call or reach out via our social media channels to skyrocket your success!}`,
    keywords: ["FramebyFrame", "Editor"],
    openGraph: {
      images: "https://i.ibb.co/x29P9Rj/Screenshot-2024-07-10-140545.png",
      title: `Video Production Company | FramebyFrame`,
      description: `Boost your business and content rapidly with our trending animations and video editing services. Schedule a free call or reach out via our social media channels to skyrocket your success!`,

      // type: `${courseData?.attributes?.seo?.OgMetaType}`,
      type: "website",
      siteName: "FramebyFrame",
    },
    twitter: {
      title: `Video Production Company | FramebyFrame`,
      description: `Boost your business and content rapidly with our trending animations and video editing services. Schedule a free call or reach out via our social media channels to skyrocket your success!`,
      // card: `${courseData?.attributes?.seo?.TwitterMetaCard}`,
      card: "summary_large_image",
      images: "https://i.ibb.co/x29P9Rj/Screenshot-2024-07-10-140545.png",
      site: "FramebyFrame",
    },
  };
}

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto min-h-screen overflow-clip">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div
          className="sm:px-10 px-5 max-w-7xl w-full mx-auto my-10"
          id="about"
        >
          <DetailSection />
        </div>
        <MarqueeDemo />
        <SocialProofTestimonials />
        <FAQ />
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}
