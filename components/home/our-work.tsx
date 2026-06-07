"use client";

import { ourWorkContent } from "@/data/homepageData";
import { ArrowLeft, ArrowRight} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ProductCard from "../ui/product-card";

export default function OurWork() {
    const { header, projects } = ourWorkContent;
    const scrollRef = useRef<HTMLDivElement>(null);
    const LOOP_COUNT = 15;
    const infiniteProjects = Array(LOOP_COUNT).fill(projects).flat();

    useEffect(() => {
        const container = scrollRef.current;
        if (container && projects.length > 0) {
            const middleSetStartIndex = Math.floor(LOOP_COUNT / 2) * projects.length;
            const targetCard = container.children[middleSetStartIndex] as HTMLElement;

            if (targetCard) {
                container.scrollLeft = targetCard.offsetLeft;
            }
        }
    }, [projects.length]);
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
            const cardElement = scrollRef.current.children[0] as HTMLElement;
            const exactCardWidth = cardElement.offsetWidth;

            scrollRef.current.scrollBy({
                left: direction === "left" ? -exactCardWidth : exactCardWidth,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="py-16 md:py-20 bg-black border-t border-b border-zinc-800/60">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="mb-12 md:mb-16">
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
                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-[1.1] flex flex-wrap justify-center">
                                {header.titleParts.map((part, index) => (
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
                </div>
                <div className="relative overflow-hidden">
                    <div ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -ml-4 md:-ml-6 lg:-ml-10 pb-8"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {infiniteProjects.map((project, index) => (
                            <div key={`${project.id}-${index}`}
                                className="snap-center shrink-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 lg:pl-10">
                                <ProductCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-4 order-1 md:order-1">
                        <button onClick={() => scroll("left")} className="group p-4 rounded-full border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg outline-none" aria-label="Previous slide">
                            <ArrowLeft className="size-6 transition-transform group-active:-translate-x-1" />
                        </button>
                        <button onClick={() => scroll("right")} className="group p-4 rounded-full border border-zinc-800 text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg outline-none" aria-label="Next slide">
                            <ArrowRight className="size-6 transition-transform group-active:translate-x-1" />
                        </button>
                    </div>

                    <div className="order-2 md:order-2">
                        <Link href="/work" className="group relative overflow-hidden p-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-white text-black">
                            <span className="relative flex flex-col overflow-hidden pl-4 pr-1 h-5">
                                <span className="flex gap-2 items-center transition-transform duration-800 ease-out group-hover:-translate-y-full">
                                    <span className="relative h-3 w-3 bg-emerald-400 rounded-full hidden">
                                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"></span>
                                    </span>
                                    Explore Our Work
                                </span>
                                <span className="flex items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    Explore Our Work
                                </span>
                            </span>
                            <span className="rounded-full p-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 bg-black">
                                <ArrowRight className="h-5 w-5 text-white" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}