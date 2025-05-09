import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      {/* Hero */}
      <div>
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm transition text-white"
              href="#"
            >
              50% off for the first 100 users
              <span className="bg-muted-foreground/15 inline-flex items-center justify-center gap-x-2 rounded-full px-2.5 py-1.5 text-sm font-semibold">
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
              Book Now and get the best prices
            </h1>
          </div>
          {/* End Title */}
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/rooms">
              <Button size={"lg"} variant="secondary">
                Book now
              </Button>
            </Link>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
