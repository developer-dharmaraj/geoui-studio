import { WorkItem } from "@/data/homepageData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ project }: { project: WorkItem }) {
    return (
        <div className="h-full transition-transform duration-500 hover:scale-[0.98]">
            <Link href={project.href} className="group block w-full h-full">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-500 group-hover:border-blue-500/50">

                    <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <span className="text-[10px] uppercase tracking-wider text-white/80 font-medium">
                            {project.dateRange}
                        </span>
                    </div>

                    <div className="absolute inset-0 z-10">
                        <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                    </div>

                    <div className="absolute bottom-24 left-5 z-20 flex flex-wrap gap-2 pr-4">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="text-[9px] bg-white/10 backdrop-blur-md text-white border border-white/20 px-2 py-1 rounded-md uppercase font-bold tracking-widest">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-0 w-full bg-white h-20 flex items-center justify-between px-6 z-30">
                        <h3 className="text-black font-extrabold text-xl tracking-tight">
                            {project.title}
                        </h3>
                        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-zinc-100 group-hover:bg-black text-black group-hover:text-white transition-all duration-300">
                            <ArrowUpRight className="size-5" />
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
}
