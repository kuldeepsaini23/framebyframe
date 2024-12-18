"use client";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  {
    icon: <InstagramLogoIcon width={30} height={30} />,
    url: "https://www.instagram.com/framebyframe_media",
  },
  {
    icon: <LinkedInLogoIcon width={30} height={30} />,
    url: "https://www.linkedin.com/in/framebyframe-media-0a3440319/",
  },
  {
    icon: <TwitterLogoIcon width={30} height={30} />,
    url: "https://x.com/FramebyFrameM",
  },
];

type FooterLink = { id: number; title: string; url: string };

const footerLinks: FooterLink[][] = [
  [
    { id: 1, title: "About Us", url: "#about" },
    { id: 2, title: "Portfolio", url: "#portfolio" },
    { id: 3, title: "Testimonials", url: "#testimonials" },
    { id: 4, title: "FAQs", url: "#faq" },
  ],
];

export function Footer() {
  useEffect(() => {
    async function handleapi() {
      const res = await axios.get("http://localhost:4000/api/v1/problem");
      console.log(res, "response");
    }
    handleapi();
  }, []);
  
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);

  useEffect(() => {
    const submissionTime = localStorage.getItem("contactSubmissionTime");
    if (submissionTime) {
      const elapsedTime = Date.now() - parseInt(submissionTime, 10);
      if (elapsedTime < 24 * 60 * 60 * 1000) { // 24 hours in milliseconds
        setCanSubmit(false);
        setTimeout(() => {
          setCanSubmit(true);
        }, 24 * 60 * 60 * 1000 - elapsedTime);
      }
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setIsSubscribed(true);
    localStorage.setItem("contactSubmissionTime", Date.now().toString());
    setCanSubmit(false);
    setTimeout(() => {
      setIsSubscribed(false);
      setCanSubmit(true);
    }, 1000 * 60 * 60 * 24); // 24 hours in milliseconds

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("RES: ", res);

      if (!res.ok) {
        throw new Error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="flex flex-col py-10 md:flex-row md:items-center md:justify-between max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start justify-start gap-y-5">
          <a href="#" className="flex items-center gap-x-1">
            <Image
              width={32}
              height={32}
              className="h-10 w-10 rounded-md"
              src="/logo.svg"
              alt=""
            />
            <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
              FrameByFrame
            </h1>
          </a>
          <p className="tracking-tight text-neutral-900 dark:text-white">
            Watch your content soar with framebyframe
          </p>
          <p className="text-sm tracking-tight text-neutral-500 dark:text-neutral-400 sm:text-center">
            Copyright © {year}{" "}
            <Link
              href={"https://www.instagram.com/kuldeepsaini_23/"}
              target="_blank"
              className="text-white font-bold"
            >
              Viora Tech.
            </Link>{"  "}
            All Rights Reserved.
          </p>
        </div>
        <div className="pt-5 md:w-1/2">
          <div className="flex items-center justify-between gap-4 flex-wrap lg:pl-10">
            {footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-2">
                {column.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    <a href={link.url}>{link.title}</a>
                    <ChevronRightIcon className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                  </li>
                ))}
              </ul>
            ))}

            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-4 justify-between">
              <p className="text-lg font-bold">Contact us</p>
              <div className="flex items-center gap-4">
              {icons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.url}
                  className="text-base text-neutral-500 hover:text-neutral-900 hover:dark:text-white"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
              </div>
              <p className="font-normal text-neutral-500 dark:font-medium">
                We have a great support team to help you
              </p>
              <div className="flex items-center gap-x-2 pt-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-x-2"
                >
                  <input
                    className="w-full rounded-lg border bg-neutral-50 p-2 placeholder:text-sm placeholder:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-0 dark:bg-neutral-900 dark:placeholder:text-neutral-600 dark:focus-visible:ring-neutral-700"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                  />

                  <Button variant={"outline"} disabled={!canSubmit}>
                    {isSubscribed ? "We will get back soon" : "Contact Us"}
                  </Button>
                </form>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </footer>
  );
}
