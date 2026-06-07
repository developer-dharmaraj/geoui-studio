import { testimonialsContent } from "@/data/homepageData";
import { StarIcon } from "lucide-react";

const { reviews } = testimonialsContent;

export default function ReviewCard({ review }: { review: typeof reviews[0] }) {

    return (
        <div className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] shrink-0 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 cursor-pointer select-none transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-slate-100">
                    <img alt={review.name} className="h-full w-full object-cover" src={review.imageSrc} />
                </div>
                <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">{review.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-500">{review.role}</p>
                </div>
            </div>
            <div className="my-4 h-[1px] w-full bg-slate-100"></div>
            <div className="mb-3 flex items-center gap-2">
                <span className="text-sm font-bold text-slate-700">{review.rating.toFixed(1)}</span>
                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} />
                    ))}
                </div>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{review.reviewText}</p>
        </div>
    )
}