"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  color,
  containerClassName,
  top=1,
  bottom=1,
  left=1,
  right=1,
  border=true,
  curve=90,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  color?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  border?: boolean;
  curve: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / curve;
    const y = (e.clientY - top - height / 2) / curve;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

    setOverlayPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const borderStyle = isMouseEntered && border
    ? {
        borderTop:
          overlayPosition.y <= (top)*window.innerHeight / 6
            ? `2px solid ${color}`
            : "none",
        borderBottom:
          overlayPosition.y > (bottom)*window.innerHeight / 2
            ? `2px solid ${color}`
            : "none",
        borderLeft:
          overlayPosition.x <= (left)*window.innerHeight / 6
            ? `2px solid ${color}`
            : "none",
        borderRight:
          overlayPosition.x > (right)*window.innerHeight/2
            ? `2px solid ${color}`
            : "none",
      }
    : {
     
    };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("w-full flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            `flex items-center justify-center relative border-2 border-transparent transition-all duration-200 ease-linear overflow-hidden shadow-inner`,
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            position: "relative", // Ensure the parent has a position value
            zIndex: 0, // Ensure the pseudo-elements are rendered on top
            ...borderStyle,
          }}
        >
          {children}
          {isMouseEntered && (
            <>
              <div
                className={`absolute w-full h-1/2 blur-[100px] -z-10`}
                style={{
                  left: `${overlayPosition.x}px`,
                  top: `${overlayPosition.y}px`,
                  transform: `translate(-50%, -50%)`,
                  background: `radial-gradient(${color}, transparent, transparent)`,
                  pointerEvents: `none`,
                }}
              />
            </>
          )}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "[transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
