import { ServiceItem } from "@/data/homepageData";
import Link from "next/link";

interface ServiceCardProps {
    service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;
    return (
        <article className={`services-card group w-full h-full relative flex flex-col cursor-pointer p-8 md:p-10 bg-zinc-900/40 backdrop-blur-xl border rounded-[2.5rem] transition-all duration-500 md:hover:-translate-y-3 overflow-hidden shadow-2xl border-white/5 ${service.colorTheme.border}`}>
            <div className={`absolute -inset-px bg-gradient-to-br ${service.colorTheme.gradient} to-transparent transition-opacity duration-500 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100`}></div>
            <Icon strokeWidth={2} className={`w-50 h-50 transition-colors duration-500 absolute opacity-1 right-0 top-0 ${service.colorTheme.text}`} aria-hidden="true" />
            <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 md:group-hover:scale-110 md:group-hover:bg-zinc-800">
                    <Icon strokeWidth={2} className={`w-8 h-8 transition-colors duration-500 ${service.colorTheme.text}`} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-clash md:text-3xl font-medium text-white mb-4 theme-font tracking-tight">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-10 text-sm md:text-base font-light flex-grow">{service.description}</p>
                <div className="mt-auto flex justify-start pt-4">
                    <Link href={service.href} className="group relative overflow-hidden p-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-white text-black">
                        <span className="relative flex flex-col overflow-hidden pl-4 pr-1 h-5">
                            <span className="flex gap-2 items-center transition-transform duration-800 ease-out group-hover:-translate-y-full">
                                <span className="relative h-3 w-3 bg-emerald-400 rounded-full hidden">
                                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"></span>
                                </span>
                                Explore Service
                            </span>
                            <span className="flex items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                Explore Service
                            </span>
                        </span>
                        <span className="rounded-full p-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-5 w-5 fill-white">
                                <path d="M686-450H190q-13 0-21.5-8.5T160-480q0-13 8.5-21.5T190-510h496L459-737q-9-9-9-21t9-21q9-9 21-9t21 9l278 278q5 5 7 10t2 11q0 6-2 11t-7 10L501-181q-9 9-21 9t-21-9q-9-9-9-21t9-21l227-227Z"></path>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    );

}