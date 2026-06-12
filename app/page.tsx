import ContactSection from "@/components/home/contact-section";
import FaqSection from "@/components/home/faq-section";
import HeroSection from "@/components/home/hero-section";
import OurServices from "@/components/our-services";
import TeamSection from "@/components/home/our-team";
import OurWork from "@/components/home/our-work";
import Testimonials from "@/components/home/Testimonials";
import TextSlider from "@/components/home/text-slider";
import WhyGoisStudio from "@/components/why-geouistudio";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TextSlider />
      <OurServices />
      <OurWork />
      <TeamSection />
      <WhyGoisStudio />
      <FaqSection />
      <Testimonials />
      <ContactSection />
    </div>
  )
}