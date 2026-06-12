import { HeroProps } from "@/data/servicespageData";
import Link from "next/link";

export default function ServiceHero({
    title,
    highlightedText,
    description,
    buttonText,
    buttonLink
}: HeroProps) {
    return (
        <section className="relative h-screen w-full flex items-center px-10 justify-center md:justify-start bg-cyan-950">
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <div className="relative z-20 max-w-7xl">
                <div className="flex flex-col gap-3">
                    <h1 className="text-white theme-font font-clash flex flex-col text-5xl md:text-7xl font-light leading-tight">
                        {title}
                        <span className="font-semibold">{highlightedText}</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl max-w-xl">{description}</p>
                </div>

                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <Link href={buttonLink}>
                        <button className="group relative overflow-hidden font-medium text-[14px] p-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-white text-black">
                            <span className="relative flex flex-col overflow-hidden pl-4 pr-1 h-5">
                                <span className="flex gap-2 items-center transition-transform duration-800 ease-out group-hover:-translate-y-full">
                                    {buttonText}
                                </span>
                                <span className="flex items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    {buttonText}
                                </span>
                            </span>
                            <span className="rounded-full p-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 bg-black">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-5 w-5 fill-white">
                                    <path d="M686-450H190q-13 0-21.5-8.5T160-480q0-13 8.5-21.5T190-510h496L459-737q-9-9-9-21t9-21q9-9 21-9t21 9l278 278q5 5 7 10t2 11q0 6-2 11t-7 10L501-181q-9 9-21 9t-21-9q-9-9-9-21t9-21l227-227Z"></path>
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}