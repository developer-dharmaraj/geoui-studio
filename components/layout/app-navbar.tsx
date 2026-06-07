"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "About & Contact", href: "/about-contact" },
];

export default function AppNavbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (current > 5) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        if (current > previous && current > 100) {
            setHidden(true);
        }
        else if (current < previous) {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-20 py-2 flex items-center fixed top-0 left-0 z-50">
            <div className={`w-full mx-auto px-6 py-5 flex items-center justify-between transition-all duration-500 ${isScrolled
                ? "bg-black/90 backdrop-blur-md"
                : "bg-transparent backdrop-blur-none"
                }`}>
                <div className="font-clash">
                    <Link href={'/'} aria-label="GeoUI Studio Home">
                        <h1 className="text-white cursor-pointer select-none text-3xl font-medium tracking-tight">
                            GeoUI
                            <span className="font-light">Studio</span>
                        </h1>
                    </Link>
                </div>

                <div className="relative hidden md:flex items-center bg-white/10 backdrop-blur-lg border border-white/10 rounded-full px-2 py-1.5 overflow-hidden">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                    ? "bg-white text-black font-medium"
                                    : "text-white hover:text-gray-300"
                                    }`}>
                                {link.label}
                            </Link>
                        )
                    })}
                </div>

                <div className="cursor-pointer group">
                    <Link href={'/contact'}>
                        <button className="flex items-center gap-2 bg-white px-2 py-2 rounded-full text-black font-medium cursor-pointer">
                            <span className="pl-4 pr-2 text-[14px]">Let's Chat</span>
                            <span className="rounded-full p-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 bg-black text-white">
                                <ArrowRight size={18} />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}