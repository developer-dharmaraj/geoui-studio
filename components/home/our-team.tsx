"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/homepageData";
import TeamCard from "../ui/team-card";

export default function TeamSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -340 : 340;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 md:py-20 px-6 md:px-10 bg-[#111]">
            <div className="flex items-center justify-between pb-5">
                <div>
                    <h2 className="text-3xl md:text-4xl text-white font-semibold">
                        Meet The Minds <br className="md:hidden" /> Behind The Work
                    </h2>
                    <p className="mt-4 max-w-2xl text-white">
                        The people who designed, built, and delivered this experience with precision and care.
                    </p>
                </div>
                <Link href="/about-contact" className="hidden md:block">
                    <button className="group relative overflow-hidden p-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-white text-black">
                        <span className="relative flex flex-col overflow-hidden pl-4 pr-1 h-5">
                            <span className="flex gap-2 items-center transition-transform duration-800 ease-out group-hover:-translate-y-full">
                                <span className="relative h-3 w-3 bg-emerald-400 rounded-full hidden">
                                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"></span>
                                </span>
                                Who are we?
                            </span>
                            <span className="flex items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                Who are we?
                            </span>
                        </span>
                        <span className="rounded-full p-1 flex items-center text-white justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 bg-black">
                            <ArrowRight size={20} />
                        </span>
                    </button>
                </Link>
            </div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch">
                {teamMembers.map((member) => (
                    <TeamCard key={`desktop-${member.id}`} member={member} />
                ))}
            </div>

            <div className="md:hidden relative pb-14 mt-4">
                <div ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-1"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />
                    {teamMembers.map((member) => (
                        <TeamCard key={`mobile-${member.id}`} member={member} />
                    ))}
                </div>

                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-3">
                    <button onClick={() => scroll("left")}
                        className="flex items-center justify-center w-10 h-10 transition-all bg-black/80 text-white border border-gray-700 rounded-sm hover:bg-white hover:text-black">
                        <ArrowLeft size={20} />
                    </button>
                    <button onClick={() => scroll("right")}
                        className="flex items-center justify-center w-10 h-10 transition-all bg-black/80 text-white border border-gray-700 rounded-sm hover:bg-white hover:text-black">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}