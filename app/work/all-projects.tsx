import { ourWorkContent } from "@/data/homepageData";
import ProductCard from "@/components/ui/product-card";
export default function AllProjects() {
    const { header, projects } = ourWorkContent;

    return (
        <section className="py-20 px-6 md:px-10 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:mb-16">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProductCard key={index} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}