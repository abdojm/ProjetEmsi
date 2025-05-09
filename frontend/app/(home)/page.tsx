import HeroSectionSimpleCentred from "@/components/hero";
import { Navbar1 } from "@/components/navbar";

export default function Home() {
  return (
    <div className="mx-auto relative">
      <div className="bg-hero px-20 bg-bottom bg-no-repeat bg-cover h-[100vh] relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20">
          <Navbar1 />
          <HeroSectionSimpleCentred />
        </div>
      </div>
    </div>
  );
}
