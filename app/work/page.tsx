"use client"

import { workContent } from "@/data/workpageData";
import WorkHero from "./work-hero";
import AllProjects from "./all-projects"
import WhyGoisStudio from "@/components/why-geouistudio";

export default function Work() {
    return (
        <div>
            <WorkHero {...workContent} />
            <AllProjects />
            <WhyGoisStudio />
        </div>
    )
}