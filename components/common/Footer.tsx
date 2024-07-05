"use client";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  {
    icon: <InstagramLogoIcon width={30} height={30} />,
    url: "https://www.instagram.com",
  },
  {
    icon: <LinkedInLogoIcon width={30} height={30} />,
    url: "https://www.linkedin.com",
  },
  {
    icon: <TwitterLogoIcon width={30} height={30} />,
    url: "https://www.twitter.com",
  },
];

type FooterLink = { id: number; title: string; url: string };

const footerLinks: FooterLink[][] = [
  [
    { id: 1, title: "About", url: "#" },
    { id: 2, title: "Contact", url: "#" },
    { id: 3, title: "Blog", url: "#" },
    { id: 4, title: "Story", url: "#" },
  ],
  [
    { id: 5, title: "Company", url: "#" },
    { id: 6, title: "Product", url: "#" },
    { id: 7, title: "Press", url: "#" },
    { id: 8, title: "More", url: "#" },
  ],
  [
    { id: 9, title: "Press", url: "#" },
    { id: 10, title: "Careers", url: "#" },
    { id: 11, title: "Newsletters", url: "#" },
    { id: 12, title: "More", url: "#" },
  ],
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setIsSubscribed(true);
    // Reset the subscribed status after 2 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 2000);
  };
  return (
    <footer className="border-t">
      <div className="flex flex-col py-10 md:flex-row md:items-center md:justify-between max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start justify-start gap-y-5">
          <a href="#" className="flex items-center gap-x-2.5">
            <Image
              width={32}
              height={32}
              className="h-8 w-8 rounded-md"
              src="https://magicui.design/icon.png"
              alt=""
            />
            <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
              Magic UI
            </h1>
          </a>
          <p className="tracking-tight text-neutral-900 dark:text-white">
            UI library for Design Engineers
          </p>
          <p className="text-sm tracking-tight text-neutral-500 dark:text-neutral-400 sm:text-center">
            All rights reserved.
          </p>
        </div>
        <div className="pt-5 md:w-1/2">
          <div className="flex items-center justify-between gap-x-3 lg:pl-10">
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
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral-700" />
      <div className="flex flex-col justify-between gap-y-10  py-10 md:flex-row md:items-center max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-y-1">
          <p className="text-lg font-bold">Contact us</p>
          <p className="font-normal text-neutral-500 dark:font-medium">
            We have a great support team to help you
          </p>
          <div className="flex items-center gap-x-2 pt-2">
            <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
              <input
                className="w-full rounded-lg border bg-neutral-50 p-2 placeholder:text-sm placeholder:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-0 dark:bg-neutral-900 dark:placeholder:text-neutral-600 dark:focus-visible:ring-neutral-700"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
              />
              <Button variant={"outline"}>
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="text-xl text-neutral-500 hover:text-neutral-900 hover:dark:text-white"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
