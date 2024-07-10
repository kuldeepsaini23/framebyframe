"use client";
import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const gradients = [
  {
    id: "gradient1",
    colors:
      "from 0deg at 50% 50%, #ffd9ad 0deg, #FA82A2 180deg, #fd864d 360deg",
    opacity: 0.8,
    initialRotation: 100.44,
    blur: 32,
  },
  {
    id: "gradient2",
    colors:
      "from 0deg at 50% 50%, #ffd9ad 0deg, #FA82A2 180deg, #fd864d 360deg",
    opacity: 0.5,
    initialRotation: 211.44,
    blur: 70,
  },
  {
    id: "gradient3",
    colors:
      "from 0deg at 50% 50%, #ffd9ad 0deg, #139ce5 180deg, #fd864d 360degfrom 0deg at 50% 50%, #ff0000 0deg, hsl(354, 100%, 50%) 54.89161972682219deg, #00a6ff 106.69924423399361deg, #4797ff 162deg, #04f 252.00000000000003deg, #ff8000 306.00000000000006deg, hsl(0, 100%, 50%) 360deg",
    opacity: 0.8,
    initialRotation: 45.72,
    blur: 32,
  },
];


const Gradient = (props: Props) => {
  return (
    <>
     {gradients.map((gradient) => (
        <motion.div
          className="h-[350px] overflow-visible rounded-full absolute left-[40%] -bottom-[30%] w-[350px] flex-none"
          style={{
            transform: `rotate(${gradient.initialRotation}deg) translateX(0px) translateY(0px) scale(1) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)`,
            filter: `blur(${gradient.blur}px)`,
          }}
          animate={{
            rotate: [0, 360], // Rotate from 0 to 360 degrees
          }}
          transition={{
            duration: 10, // Duration of the rotation animation
            repeat: Infinity, // Repeat the animation infinitely
            ease: "linear", // Linear easing for smooth circular motion
          }}
          key={gradient.id}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              transform: `translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)`,
              opacity: gradient.opacity,
            }}
            // animate={{
            //   scale: [0.856133, 1.1, 0.856133], // Scale animation
            // }}
            transition={{
              duration: 5, // Duration of the scale animation
              repeat: Infinity, // Repeat the animation infinitely
              ease: "easeInOut", // Ease in and out for smooth scaling
            }}
          >
            <div
              className="rounded-full absolute inset-0 flex place-items-center place-content-center overflow-hidden"
              style={{
                background: `conic-gradient(${gradient.colors})`,
                color: "#85F",
              }}
            />
          </motion.div>
        </motion.div>
      ))}</>
  )
}

export default Gradient