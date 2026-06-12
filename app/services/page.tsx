import OurServices from "@/components/our-services";
import ServicesHero from "./services-hero";
import { heroContent } from "@/data/servicespageData";
import WhyGoisStudio from "@/components/why-geouistudio";

export default function Services() {
    return (
        <div>
            <ServicesHero {...heroContent} />
            <OurServices />
            <WhyGoisStudio />
        </div>
    )
}