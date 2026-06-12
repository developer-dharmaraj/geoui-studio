import { aboutHeroContent } from "@/data/aboutcontactData";
import Link from "next/link";

export default function AboutHero() {
    return (
        <section className="w-full bg-black text-white h-screen flex items-center justify-center">
            <div className="max-w-7xl flex flex-col gap-6 md:justify-center md:items-center px-8">

                <span className="inline-block px-4 w-fit py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                    {aboutHeroContent.badge}
                </span>

                <h2 className="text-4xl md:text-6xl font-light md:text-center">
                    {aboutHeroContent.title.part1}
                    <span className="block font-semibold text-blue-500">
                        {aboutHeroContent.title.highlight}
                    </span>
                </h2>

                <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                    {aboutHeroContent.description1}
                </p>
                <p className="text-white/50 max-w-2xl">
                    {aboutHeroContent.description2}
                </p>

                <Link href={aboutHeroContent.buttonLink}>
                    <button className="group relative overflow-hidden p-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-white text-black">
                        <span className="relative flex flex-col overflow-hidden pl-4 pr-1 h-5">
                            <span className="flex gap-2 items-center transition-transform duration-300 group-hover:-translate-y-full">
                                {aboutHeroContent.buttonText}
                            </span>
                            <span className="flex items-center transition-transform duration-300 group-hover:-translate-y-full">
                                {aboutHeroContent.buttonText}
                            </span>
                        </span>
                        <span className="rounded-full p-1 flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45 bg-black text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-5 w-5 fill-white">
                                <path d="M686-450H190q-13 0-21.5-8.5T160-480q0-13 8.5-21.5T190-510h496L459-737q-9-9-9-21t9-21q9-9 21-9t21 9l278 278q5 5 7 10t2 11q0 6-2 11t-7 10L501-181q-9 9-21 9t-21-9q-9-9-9-21t9-21l227-227Z"></path>
                            </svg>
                        </span>
                    </button>
                </Link>
            </div>
        </section>
    );
}