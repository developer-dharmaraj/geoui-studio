import { whyGoisStudioContent } from '@/data/homepageData';
import { ArrowRight, Check, X } from 'lucide-react';
import Link from 'next/link';

export default function WhyGoisStudio() {
    const { header, cards, cta } = whyGoisStudioContent;

    return (
        <section className="w-full comp-bg relative bg-black text-white py-16 md:py-20 px-6 md:px-10 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
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

                <div className="grid md:grid-cols-2 gap-8 cursor-pointer">
                    {cards.map((card) => (
                        <div key={card.id}
                            className={`group relative rounded-3xl border bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-2 ${card.isPremium
                                ? "border-green-500/30 shadow-[0_0_60px_rgba(34,197,94,0.25)] md:shadow-none hover:shadow-[0_0_60px_rgba(34,197,94,0.25)]"
                                : "border-white/10 hover:border-white/20"
                                }`}>
                            <div className={`absolute inset-0 rounded-3xl opacity-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none ${card.isPremium
                                ? "bg-gradient-to-b from-green-500/10 to-transparent"
                                : "bg-gradient-to-b from-white/5 to-transparent"
                                }`}>
                            </div>

                            <h3 className={`text-2xl font-medium mb-8 ${card.isPremium ? "theme-font text-white" : "text-white/80"}`}>
                                {card.title}
                            </h3>
                            <ul className="space-y-5">
                                {card.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}
                                        className={`flex items-start gap-4 ${card.isPremium ? "text-white/90" : "text-white/50"}`} >
                                        {feature.isPositive ? (
                                            <span className="text-green-400 border border-green-400 h-7 w-7 flex items-center justify-center rounded-full shrink-0">
                                                <Check size={17} />
                                            </span>
                                        ) : (
                                            <span className="text-orange-500 border border-orange-500 h-7 w-7 flex items-center justify-center rounded-full shrink-0">
                                                <X size={17} />
                                            </span>
                                        )}
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center flex items-center justify-center">
                    <Link href={cta.href}>
                        <button className="group relative overflow-hidden p-1 cursor-pointer flex items-center justify-center gap-2 rounded-full bg-white text-black">
                            <span className="relative flex flex-col overflow-hidden pl-4 pr-1 h-5">
                                <span className="flex gap-2 items-center transition-transform duration-800 ease-out group-hover:-translate-y-full">
                                    {cta.text}
                                </span>
                                <span className="flex items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    {cta.text}
                                </span>
                            </span>
                            <span className="rounded-full text-white p-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 bg-black">
                                <ArrowRight size={20} />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}