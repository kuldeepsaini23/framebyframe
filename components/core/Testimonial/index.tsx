import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { Star } from "lucide-react";
import Image from "next/image";
import WordPullUp from "@/components/ui/word-pull-up";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-cyan-600/20 p-1 py-0.5 font-bold text-cyan-600 dark:bg-cyan-600/20 dark:text-cyan-600",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 fill-yellow-500" />
        <Star className="size-4 fill-yellow-500" />
        <Star className="size-4 fill-yellow-500" />
        <Star className="size-4 fill-yellow-500" />
        <Star className="size-4 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        alt="user"
        src={img}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Boubleon",
    role: "France",
    img: "https://i.ibb.co/kBNjgWr/fb402323-2a0b-4a1a-a5c5-5ba62f77d399.webp",
    description: (
      <p>
        I asked for several revisions,
        <Highlight>I had specific criteria and they met them.</Highlight> This
        is exactly the kind of behavior I expect from someone serious and
        professional. I recommend them.
      </p>
    ),
  },
  {
    name: "El Salvador",
    role: "Jordan",
    img: "https://i.ibb.co/JCC61yZ/fb402323-2a0b-4a1a-a5c5-5ba62f77d399.webp",
    description: (
      <p>
        {`Really satisfied and surprised with the result.`}
        <Highlight>FramebyFrame is a really expert team of creators.</Highlight>
        Just a few questions, a quick chat and they delivered a piece of art in
        just a few days. More than recommended!!
      </p>
    ),
  },
  {
    name: "Terry Kim",
    role: " Entrepreneur",
    img: "https://i.ibb.co/SKQCp3h/images.jpg",
    description: (
      <p>
        {`As a startup, we need to move fast and stay ahead. #framebyframe helps us to do just that.`}
        <Highlight>Our business speed has doubled.</Highlight>
      </p>
    ),
  },
  {
    name: "Vatesoro",
    role: "Canada",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=V",
    description: (
      <p>
        {` I'm really satisfied with the overall experience and final product. I created the script and a quick storyboard and they hopped on a call to walk through it with me to ensure they understood the work. They took my feedback well and when I needed revisions but wasn't sure how to bring my vision to life,`}
        <Highlight>I gave them creative reign and they were awesome.</Highlight>
        I had a tight timeline and worked with me to try and achieve it. My
        clients are thrilled with the results and so am I. I will definitely
        work with them again!
      </p>
    ),
  },
  {
    name: "David Gerber",
    role: "United States",
    img: "https://i.ibb.co/M255KD8/image.png",
    description: (
      <p>
        {`Excellent work. I enjoyed the opportunity to work with FramebyFrame. They asked great questions and really understood what we were trying to create.`}
        <Highlight>
        They took feedback well and challenged us where they had conviction, which we appreciated.
        </Highlight>{" "}
        The work was done on time and the final product was excellent. We will work with them again.
      </p>
    ),
  },
  {
    name: "Lucia Sage",
    role: "New Zealand",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=LS",
    description: (
      <p>
        {`They were very cooperative and clear in their intentions and design.  `}
        <Highlight>
          The artstyle is clean and understandable with a friendly note to it.
        </Highlight>{" "}
        Ordering was a simple process and the animator was ok with tailoring our
        order to our needs.
      </p>
    ),
  },
  {
    name: "Solveta",
    role: "Germany",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=S",
    description: (
      <p>
        {`They are a fantastic designers with great animation skills and inspirational ideas!`}
        <Highlight>
          The communication is fast and they are reliable in timings.
        </Highlight>{" "}
        I am absolutely sure that we will work together again in a short time.
        One of my best experiences!
      </p>
    ),
  },
  {
    name: "Business Guy",
    role: "Entrepreneur",
    img: "https://i.ibb.co/7VZRJCq/channels4-profile.jpg",
    description: (
      <p>
        {`FramebyFrame is prompt in communication and skilled in animation. The work that they did was fantastic and really captured the feeling of the video we were trying to create.`}
        <Highlight>
          They were able to take our script and turn it into a beautiful
          animation within a short period of time.
        </Highlight>{" "}
        We would definitely recommend them to anyone looking for quality
        animation work.
      </p>
    ),
  },
  {
    name: "Jordan Bailey",
    role: "United Kingdom",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=JB",
    description: (
      <p>
        This was a brilliant job! They were helpful, made changes I needed
        without any fuss and delivered a fantastic animated explainer video.
        <Highlight>absolutely recommend FramebyFrame!</Highlight>
        Communication is quick and they delivered exactly what you need, with
        suggestions that make it even better.
      </p>
    ),
  },
  {
    name: "CheckList",
    role: "United kingdom",
    img: "https://i.ibb.co/WxwL4gG/cc-icon-yellow.jpg",
    description: (
      <p>
        {``}
        <Highlight>Great service and quality work as always.</Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Dankoe",
    role: "Writer",
    img: "https://i.ibb.co/rt6fqct/channels4-profile.jpg",
    description: (
      <p>
        {` FramebyFrame took my animations up a notch. People see me in real life and say `}
        <Highlight>{`"hey, you're the guy with the black and white animations!"`}</Highlight>{" "}
        The animations made my content and profile stand out from everyone else
        posting the same old boring stuff. Thank you FramebyFrame.
      </p>
    ),
  },
  {
    name: "Justin Scott",
    role: "Writer",
    img: "https://i.ibb.co/r3r3t4c/download.jpg",
    description: (
      <p>
        {`They assigned me a fantastic designer with great animation skills and inspirational ideas!`}
        <Highlight>
          The communication is fast and they are reliable in timings.
        </Highlight>{" "}
        I am absolutely sure that we will work together again in a short time.
        One of my best experiences!
      </p>
    ),
  },
  {
    name: "Project Kim",
    role: "Entrepreneur",
    img: "https://i.ibb.co/SKQCp3h/images.jpg",
    description: (
      <p>
        {`FramebyFrame really wanted my business up front. They worked with me on five revisions to make sure it was what I wanted. `}
        <Highlight>
          It would have been nice to have a higher resolution in the 2d
          animation they used.
        </Highlight>{" "}
        But for the price, I feel like I got what I paid for, considering the
        time they put into it. I would recommend working with them.
      </p>
    ),
  },
];

export function SocialProofTestimonials() {
  return (
    <section id="testimonials">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <WordPullUp
            className="text-center text-2xl sm:text-6xl font-bold text-white"
            words="Words From Client"
          />

          <div className="relative mt-6 max-h-[650px] overflow-hidden">
            <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-transparent">
              {Array(Math.ceil(testimonials.length / 3))
                .fill(0)
                .map((_, i) => (
                  <Marquee
                    vertical
                    key={i}
                    className={cn({
                      "[--duration:60s]": i === 1,
                      "[--duration:30s]": i === 2,
                      "[--duration:70s]": i === 3,
                    })}
                  >
                    {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                      <TestimonialCard {...card} key={idx} />
                    ))}
                  </Marquee>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-white from-20% dark:from-black"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-white from-20% dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
