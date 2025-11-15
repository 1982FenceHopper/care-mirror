import Image from "next/image";
import Link from "next/link";
import { BsChevronCompactDown } from "react-icons/bs";

export default function Hero() {
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
        <h1 className="font-future mx-auto text-8xl text-gray-900 text-center uppercase tracking-[1.6rem]">
          You are not alone.
        </h1>
        <h2 className="font-future mx-auto text-2xl tracking-widest text-center">
          A platform for finding new connections
          <br />
          friends, business partners, sports teammates, and anything you can
          imagine.
        </h2>
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
