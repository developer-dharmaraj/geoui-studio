"use client";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ourServiceContent } from "@/data/homepageData";
import ServiceCard from "./ui/service-card";

export default function OurServices() {
    const { header, services } = ourServiceContent;

    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth * 0.8;
            scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 md:py-20 px-6 md:px-10 relative overflow-hidden bg-black" aria-labelledby="services-title">
            <div className="absolute inset-0 opacity-100 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
            <div className="max-w-7xl flex flex-col gap-12 mx-auto">
                <div className="flex z-5 flex-col gap-5 md:px-30 items-center text-center">
                    <div className="relative px-8 py-2 bg-blue-900/20">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500"></span>
                        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500"></span>
                        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500"></span>
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500"></span>
                        <span className="theme-font text-xs md:text-sm font-light tracking-[0.15em] uppercase text-white">
                            {header.badge}
                        </span>
                    </div>
                    <div className="max-w-5xl">
                        <h2 id="services-title" className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-[1.1] flex flex-wrap justify-center">
                            {header.titleParts.map((part: { text: string; className: string }, index: number) => (
                                <span key={index} className={`inline-block ${part.className}`}>
                                    {part.text}
                                </span>
                            ))}
                        </h2>
                    </div>
                    <p className="text-base md:text-lg max-w-xl leading-relaxed font-light text-gray-50">
                        {header.description}
                    </p>
                </div>

                <div className="md:hidden relative pb-16">
                    <div ref={scrollRef} className="overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 items-stretch pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {services.map((service) => (
                            <div key={service.id} className="snap-center shrink-0 w-[85vw] sm:w-[350px] flex">
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4">
                        <button onClick={() => scroll("left")} className="inline-flex items-center justify-center size-10 bg-zinc-900 text-white border border-gray-700 rounded-sm shadow-xs hover:bg-zinc-800 transition-all outline-none"
                            aria-label="Previous slide">
                            <ArrowLeft className="size-4" aria-hidden="true" />
                        </button>
                        <button onClick={() => scroll("right")} className="inline-flex items-center justify-center size-10 bg-zinc-900 text-white border border-gray-700 rounded-sm shadow-xs hover:bg-zinc-800 transition-all outline-none"
                            aria-label="Next slide">
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch">
                    {services.map((service) => (
                        <div key={service.id} className="flex">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}