"use client";

import { useState } from "react";
import { ArrowRight, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        setIsScrolled(current > 5);
        if (current > previous && current > 100) setHidden(true);
        else if (current < previous) setHidden(false);
    });

    return (
        <>
            <motion.nav
                animate={{ y: hidden ? -100 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-20 py-2 flex items-center fixed top-0 left-0 z-50">

                <div className={`w-full mx-auto px-6 py-5 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent backdrop-blur-none"}`}>
                    <div className="font-clash z-[60]">
                        <Link href={'/'} aria-label="GeoUI Studio Home">
                            <h1 className="text-white cursor-pointer select-none text-3xl font-medium tracking-tight">
                                GeoUI <span className="font-light">Studio</span>
                            </h1>
                        </Link>
                    </div>
                    <div className="relative hidden md:flex items-center bg-white/10 backdrop-blur-lg border border-white/10 rounded-full px-2 py-1.5 overflow-hidden">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link key={link.href} href={link.href}
                                    className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "bg-white text-black" : "text-white hover:text-gray-300"}`}>
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href={'/contact'} className="hidden md:block">
                            <button className="flex items-center gap-2 bg-white px-2 py-2 rounded-full text-black font-medium group">
                                <span className="pl-4 pr-2 text-[14px]">Let's Chat</span>
                                <span className="rounded-full p-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 bg-black text-white">
                                    <ArrowRight size={18} />
                                </span>
                            </button>
                        </Link>

                        <Link href={'https://wa.me/919926140507'} target="_blank" rel="noopener noreferrer" className="md:hidden flex items-center justify-center">
                            <button className="bg-white rounded-full h-9 w-9 flex items-center justify-center hover:scale-105 transition">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </button>
                        </Link>

                        <button className="md:hidden z-[60] flex flex-col gap-1.5 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl text-white font-medium hover:text-blue-500 transition-colors">
                                {link.label}
                            </Link>
                        ))}

                        <Link href={'/contact'} className="flex">
                            <button className="flex items-center gap-2 bg-white px-2 py-2 rounded-full text-black font-medium group">
                                <span className="pl-4 pr-2 text-[14px]">Let's Chat</span>
                                <span className="rounded-full p-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-45 bg-black text-white">
                                    <ArrowRight size={18} />
                                </span>
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}