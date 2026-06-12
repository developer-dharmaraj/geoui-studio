import FoundationSection from "@/components/foundation-section";
import AboutHero from "./AboutSection";
import ContactSection from "@/components/home/contact-section";
import Testimonials from "@/components/home/Testimonials";

export default function AboutContact() {
    return (
        <div>
            <AboutHero />
            <FoundationSection />
            <ContactSection/>
            <Testimonials/>

        </div>
    )
}