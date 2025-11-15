"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

export default function Hero() {
  const controlsH1 = useAnimation();
  const controlsH2 = useAnimation();

  const [textH1] = useState<string>("You are not alone.");
  const [textH2] = useState<string>(
    "There are others out there just like you.",
  );

  const [displayedH1, setDisplayedH1] = useState<string>("");
  const [displayedH2, setDisplayedH2] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayedH1(textH1.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === textH1.length) clearInterval(interval);
      }, 50);
    }, 0);
    return () => clearTimeout(timeout);
  }, [textH1]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayedH2(textH2.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === textH2.length) clearInterval(interval);
      }, 25);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [textH2]);

  return (
    <div className="w-full h-full" id="hero">
      <Image
        src={"/hero-background.jpg"}
        alt=""
        width={8000}
        height={4500}
        className="absolute top-0 left-0 w-full h-full -z-100 grayscale-100 opacity-50"
      />
      <div className="flex flex-col columns-1 space-y-12 w-full h-full justify-center justify-items-center align-middle">
        <motion.h1
          animate={controlsH1}
          style={{ whiteSpace: "pre" }}
          className="font-future mx-auto text-8xl text-gray-900 uppercase tracking-[1.6rem]"
        >
          {displayedH1}
        </motion.h1>
        <motion.h2
          animate={controlsH2}
          style={{ whiteSpace: "pre" }}
          className="font-future mx-auto text-4xl tracking-widest"
        >
          {displayedH2}
        </motion.h2>
      </div>
      <Link
        href={"#about"}
        className="w-24 h-24 p-8 flex flex-col columns-1 absolute top-11/12 left-1/2 -translate-x-1/2 -translate-y-11/12 cursor-pointer"
      >
        <BsChevronCompactDown className="m-auto w-full h-full animate-pulse" />
      </Link>
    </div>
  );
}
