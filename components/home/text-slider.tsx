"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue
} from "framer-motion";
import { sliderContent } from "@/data/homepageData";

const wrap = (min: number, max: number, v: number): number => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
export default function TextSlider() {
    const sliderText = sliderContent.words.join(sliderContent.separator) + sliderContent.separator;
    const baseVelocity = sliderContent.speed;
    const baseX = useMotionValue(0);
    const directionFactor = useRef<number>(1);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 80,
        stiffness: 300,
    });

    const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-4, 0, 4], {
        clamp: false,
    });

    const x = useTransform(baseX, (v: number) => `${wrap(-25, 0, v)}%`);

    useAnimationFrame((t: number, delta: number) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <section className="relative w-full bg-black py-5 overflow-hidden border-t border-white/10 flex items-center">
            <motion.div className="flex whitespace-nowrap" style={{ x }}>
                {[...Array(8)].map((_, i) => (
                    <span key={i}
                        className="text-6xl font-semibold text-white tracking-tight pr-4">
                        {sliderText}
                    </span>
                ))}
            </motion.div>
        </section>
    );
}