import Image from "next/image";
import Link from "next/link";
import UIButton from "@/components/ui/button";

export default function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col columns-1 space-y-36 h-full w-full px-8"
    >
      <Image
        src="/hands-reaching.jpg"
        alt=""
        width={1200}
        height={800}
        className="absolute -z-100 top-0 left-0 w-full h-full grayscale-100 opacity-10 blur-md"
      />
      <div className="flex flex-col columns-1 space-y-4 pt-24">
        <h1 className="text-[10rem] font-future font-bold">
          You have a place here
        </h1>
        <h2 className="font-future text-4xl">
          Even if you're just looking for a business partner
          <br />a study buddy
          <br />
          or just a friend to talk to.
        </h2>
        <h2 className="font-future text-6xl">
          You will find it here.
          <br />
          Tinder, but without the dating stress nor perfectionism
        </h2>
      </div>
      <div className="flex flex-col columns-1 space-y-4">
        <h3>
          A new platform to find lifelong friends, not just acquaintences
          <br />
          Sign up for the waitlist now.
        </h3>
        <UIButton center rounded asChild className="max-w-fit">
          <Link
            href="https://getwaitlist.com/waitlist/31907"
            target="_blank"
            rel="noreferrer noopener"
          >
            Join the waitlist
          </Link>
        </UIButton>
      </div>
    </div>
  );
}
