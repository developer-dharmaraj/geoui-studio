"use client";

import { faqContent } from '@/data/homepageData';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FaqSection() {
    const { header, questions } = faqContent;
    const [openId, setOpenId] = useState<string | null>("services-provided");
    const toggleFaq = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full py-16 md:py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                <div className="md:sticky md:top-32 flex flex-col gap-6 items-center text-center md:items-start md:text-left h-fit">
                    <div className="relative px-8 py-2 w-fit bg-blue-900/20">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500"></span>
                        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500"></span>
                        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500"></span>
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500"></span>
                        <span className="text-white theme-font text-sm md:text-base font-light tracking-[0.15em] uppercase">
                            {header.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-center md:text-left lg:text-6xl font-medium tracking-tight leading-[1.1] flex flex-wrap justify-center md:justify-start">
                        {header.titleParts.map((part, index) => (
                            <span key={index} className={part.className}>
                                {part.text}
                            </span>
                        ))}
                    </h2>
                    <p className="text-gray-400 text-base text-center md:text-left md:text-lg max-w-3xl leading-relaxed font-light">
                        {header.description}
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div key={faq.id}
                                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm transition-colors duration-300">
                                <button onClick={() => toggleFaq(faq.id)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center group transition cursor-pointer">
                                    <span className={`text-lg transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300"
                                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                                        <ChevronDown />
                                    </div>
                                </button>

                                <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 block" : "max-h-0 opacity-0 hidden"}`}>
                                    <div className="px-6 pb-6">
                                        <p className="text-white/70 leading-relaxed font-light border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}