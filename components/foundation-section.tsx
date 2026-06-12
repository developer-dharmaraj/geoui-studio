import { foundationContent } from "@/data/aboutcontactData";

export default function FoundationSection() {
    return (
        <section className="w-full bg-black text-white py-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-white px-4 text-sm py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                        {foundationContent.badge}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light leading-tight mt-10">
                        {foundationContent.title} <span className="text-blue-500 font-semibold">{foundationContent.highlight}</span>
                    </h2>
                    <p className="text-white/60 mt-6 max-w-2xl mx-auto">{foundationContent.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {foundationContent.cards.map((card, idx) => (
                        <div key={idx} className="group relative rounded-3xl cursor-pointer border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-hidden">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10 blur-2xl"></div>
                            <div className="relative z-10">
                                <span className="text-blue-500 theme-font text-3xl font-semibold font-clash tracking-wide">{card.title}</span>
                                <h3 className="text-3xl md:text-4xl font-medium mt-6 mb-6">{card.heading}</h3>
                                <p className="text-white/70 leading-relaxed text-lg">{card.text}</p>

                                {card.list && (
                                    <ul className="mt-6 space-y-3 text-white/70">
                                        {card.list.map((item, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="text-blue-500">✓</span>{item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}