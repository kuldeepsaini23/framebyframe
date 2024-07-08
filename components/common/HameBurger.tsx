import React from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Hamburger({ open, setOpen }: Props) {
  return (
    // <p>Hamburgir</p>
    <div
      className="relative flex h-[52px] w-[66px] cursor-pointer flex-col items-end justify-between p-[0.8rem] lg:hidden"
      onClick={() => setOpen((prev) => !prev)}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <span
        className={`w-10 rounded-md py-[2px] ${
          open && "absolute top-1/2 rotate-45"
        } bg-black dark:bg-[#fff]  transition-all duration-300`}
      ></span>
      <span
        className={`${!open ? "w-8" : "w-10"} ${
          open ? "absolute top-1/2 py-0 opacity-0" : "py-[2px]"
        } rounded-md bg-black dark:bg-[#fff] transition-all duration-300`}
      ></span>
      <span
        className={`${!open ? "w-6" : "w-10"} ${
          open && "absolute top-1/2 -rotate-45 "
        } rounded-md bg-black dark:bg-[#fff] py-[2px] transition-all duration-300`}
      ></span>
    </div>
  );
}
