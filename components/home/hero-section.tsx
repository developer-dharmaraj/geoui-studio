import { heroContent } from "@/data/homepageData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative h-[100vh] pt-8  select-none w-full overflow-hidden flex items-center px-10 md:px-16 justify-center md:justify-start bg-black">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" aria-hidden="true">
                    <source src={heroContent.videoUrl} type="video/mp4" />
                </video>
            </div>
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
            <div className="relative z-20 max-w-7xl">
                <div className="flex flex-col items-center md:items-start gap-3">
                    <span className="text-white px-4 text-xs md:text-sm py-1 bg-white/10 backdrop-blur-md mb-2 border border-white/20 w-fit rounded-full font-light tracking-wide">
                        {heroContent.badgeText}
                    </span>
                    <h1 className="text-white font-clash text-center md:text-left flex flex-col text-[8vw] sm:text-4xl md:text-5xl theme-font font-medium leading-tight items-center md:items-start">
                        <span>
                            {heroContent.headingLines.map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < heroContent.headingLines.length - 1 && <br />}
                                </span>
                            ))}
                        </span>
                        <span className="font-semibold theme-font">
                            {heroContent.highlightedHeading}
                        </span>
                    </h1>
                    <p className="text-gray-200 text-center md:text-left text-sm sm:text-md md:text-lg font-medium">
                        {heroContent.subtitle}
                    </p>
                </div>
                <div className="mt-8 flex flex-col items-center md:flex-row gap-4">
                    <Link href={heroContent.primaryButtonLink}>
                        <button className="group relative overflow-hidden p-1 font-medium cursor-pointer flex items-center justify-center gap-2 rounded-full bg-white text-black">
                            <span className="relative flex flex-col overflow-hidden pl-4 pr-1 h-5">
                                <span className="flex gap-2 items-center transition-transform duration-800 ease-out group-hover:-translate-y-full">
                                    {heroContent.primaryButtonText}
                                </span>
                                <span className="flex items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    {heroContent.primaryButtonText}
                                </span>
                            </span>
                            <span className="rounded-full p-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 text-white bg-black">
                                <ArrowRight size={22} />
                            </span>
                        </button>
                    </Link>
                    <Link href={heroContent.secondaryButtonLink} className="hidden md:block">
                        <button className="group relative overflow-hidden p-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-black text-white">
                            <span className="relative flex flex-col overflow-hidden px-4 py-1">
                                <span className="flex gap-2 items-center transition-transform duration-800 ease-out">
                                    <span className="relative h-3 w-3 bg-emerald-400 rounded-full">
                                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"></span>
                                    </span>
                                    {heroContent.secondaryButtonText}
                                </span>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}