"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  border?: boolean;
  curve?: number;
};

const HiglightedCard = ({
  children,
  className,
  color,
  icon,
  position,
  right,
  left,
  top,
  bottom,
  border,
  curve
}: Props) => {
  return (
    <div className="relative w-full lg:max-w-maxScreen">
      <CardContainer
        className="inter-var w-full rounded-3xl"
        color={color}
        right={right || 1}
        left={left || 1}
        bottom={bottom || 1}
        top={top || 1}
        border={border}
        curve={curve || 90}
      >
        <CardBody className={`relative ${className}`}>{children}</CardBody>
      </CardContainer>

      {icon && (
        <div
          className={`flex justify-center items-center flex-shrink-0 p-5 rounded-full bg-[#0F1D2B] shadow-[0_0px_42px_0px_rgba(183,37,78,0.24)] absolute -top-[45px] sm:-top-[30px] ${
            position === "left" ? "left-[10px] sm:left-[35px]" : "right-[35px]"
          }`}
          style={{
            border: `1px solid ${color}`,
          }}
        >
          {icon && <>{icon}</>}
        </div>
      )}
    </div>
  );
};

export default HiglightedCard;
