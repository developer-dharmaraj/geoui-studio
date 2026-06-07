import { testimonialsContent } from '@/data/homepageData';
import ReviewCard from '../ui/review-card';

export default function Testimonials() {
    const { header, reviews } = testimonialsContent;
    return (
        <div className="py-16 md:py-20 px-6 md:px-10 overflow-hidden bg-white">
            <div className="flex flex-col gap-12">
                <div className="flex z-5 flex-col gap-5 px-7 md:px-30 items-center text-center">
                    <div className="relative px-8 py-2 bg-blue-100">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500"></span>
                        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500"></span>
                        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500"></span>
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500"></span>
                        <span className="theme-font text-xs md:text-sm font-light tracking-[0.15em] uppercase text-blue-600 font-medium">
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
                    <p className="text-base md:text-lg max-w-xl leading-relaxed font-light text-gray-900">
                        {header.description}
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="group flex overflow-hidden p-2 flex-row" style={{ gap: '1rem' }}>
                        {Array.from({ length: 4 }).map((_, loopIndex) => (
                            <div key={`forward-${loopIndex}`}
                                className="track-to-left shrink-0 justify-around"
                                style={{ gap: '1rem' }}>
                                <div className="flex gap-4 sm:gap-6 lg:gap-6 px-1">
                                    {reviews.map((review) => (
                                        <ReviewCard key={`${review.id}-f1-${loopIndex}`} review={review} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="group flex overflow-hidden p-2 flex-row" style={{ gap: '1rem' }}>
                        {Array.from({ length: 4 }).map((_, loopIndex) => (
                            <div key={`reverse-${loopIndex}`}
                                className="track-to-right shrink-0 justify-around"
                                style={{ gap: '1rem' }}>
                                <div className="flex gap-4 sm:gap-6 lg:gap-6 px-1">
                                    {reviews.map((review) => (
                                        <ReviewCard key={`${review.id}-r1-${loopIndex}`} review={review} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}