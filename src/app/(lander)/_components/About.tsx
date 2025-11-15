import Image from "next/image";
import Link from "next/link";
import { BsReddit, BsTelegram, BsThreads, BsWhatsapp } from "react-icons/bs";
import { SiX } from "react-icons/si";
import UIButton from "@/components/ui/button";

export default function About() {
  const url = "https://care.apexrand.org";
  const title = `A new platform for finding co-founders, sports friends, study buddies and the occasional helpful person. Sign up for the waitlist today. - ${url}`;

  return (
    <div
      id="about"
      className="relative flex flex-col columns-1 space-y-36 h-full w-full px-8"
    >
      <Image
        src="/hands-reaching.jpg"
        alt="Two hands reaching for each other. One hand is coming into view from the right side shifted slightly to the bottom. The other coming into view from the left side shifted slightly to the top"
        width={1200}
        height={800}
        className="absolute -z-100 top-0 left-0 w-full h-full grayscale-100 opacity-10 blur-md"
      />
      <div className="flex flex-col columns-1 space-y-4 pt-24">
        <h2 className="text-[10rem] font-future font-bold">
          You have a place here
        </h2>
        <h3 className="font-future text-4xl">
          Even if you're just looking for a business partner/co-founder, a study
          buddy
          <br />a sports teammate or just a friend to talk to. This could be the
          thing you were looking for.
          <br />
          The platform to find near endless possibilities of people who share
          like minds with you
          <br />
          People who share your hobbies and passion, people who share your
          drive.
        </h3>
        <h3 className="font-future text-6xl">
          <Link
            href={"https://tinder.com"}
            target="_blank"
            rel="noreferrer noopener"
            className="underline hover:no-underline"
          >
            Tinder
          </Link>
          , but without the dating stress nor perfectionism
        </h3>
      </div>
      <div className="flex flex-col columns-1 space-y-4">
        <p>
          A new platform to find lifelong friends, not just acquaintances
          <br />
          Sign up for the waitlist now.
        </p>
        <Link
          href="https://getwaitlist.com/waitlist/31907"
          target="_blank"
          rel="noreferrer noopener"
        >
          <UIButton rounded center>
            Join the waitlist
          </UIButton>
        </Link>
        <p>Share on Social Media</p>
        <div className="flex flex-row space-x-2">
          <Link
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="my-auto"
          >
            <UIButton
              rounded
              center
              size={"icon"}
              intent={"ghost"}
              className="px-2 border border-gray-400"
            >
              <SiX size={16} />
            </UIButton>
          </Link>
          <Link
            href={`https://threads.net/intent/post?&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="my-auto"
          >
            <UIButton
              rounded
              center
              size={"icon"}
              intent={"ghost"}
              className="px-2 border border-gray-400"
            >
              <BsThreads size={16} />
            </UIButton>
          </Link>
          <Link
            href={`https://web.whatsapp.com/send?text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="my-auto"
          >
            <UIButton
              rounded
              center
              size={"icon"}
              intent={"ghost"}
              className="px-2 border border-gray-400"
            >
              <BsWhatsapp size={16} />
            </UIButton>
          </Link>
          <Link
            href={`http://www.reddit.com/submit?&title=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="my-auto"
          >
            <UIButton
              rounded
              center
              size={"icon"}
              intent={"ghost"}
              className="px-2 border border-gray-400"
            >
              <BsReddit size={16} />
            </UIButton>
          </Link>
          <Link
            href={`https://t.me/share/url&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noreferrer noopener"
            className="my-auto"
          >
            <UIButton
              rounded
              center
              size={"icon"}
              intent={"ghost"}
              className="px-2 border border-gray-400"
            >
              <BsTelegram size={16} />
            </UIButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
