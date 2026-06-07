"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollerProps {
    children: ReactNode;
}

export default function SmoothScroller({ children }: SmoothScrollerProps) {
    useEffect(() => {
        // 1. Lenis Smooth Scroll Configuration Initialize
        const lenis = new Lenis({
            duration: 1.2,          // Scroll speed (Seconds me, jitna zyada utna smooth)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing curve
            orientation: "vertical", // Vertical scrolling
            gestureOrientation: "vertical",
            smoothWheel: true,       // Mouse wheel smooth karega
            wheelMultiplier: 1,      // Mouse scroll strength multiplier
            touchMultiplier: 2,      // Touch/Mobile devices multiplier
        });

        // 2. RequestAnimationFrame Request Hook Loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // 3. Component Unmount cleanup logic to avoid memory leaks
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}