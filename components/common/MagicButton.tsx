import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  divClassName
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  divClassName?: string;
}) => {
  return (
    <button
  className={`relative inline-flex w-28 sm:w-32 h-9 overflow-hidden rounded-lg p-[1px] focus:outline-none ${divClassName}`}
  // onClick={handleClick}
>
  <span className="absolute inset-0 -m-[1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#FE4433_0%,#FEE6CE_50%,#FE4433_100%)]" />

  {/* remove px-3 py-1, add px-5 gap-2 */}
  <span
    className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-0 text-sm font-medium text-white backdrop-blur-3xl gap-4 ${otherClasses}`}
  >
    {position === "left" && icon}
    {title}
    {position === "right" && icon}
  </span>
</button>

  );
};

export default MagicButton;