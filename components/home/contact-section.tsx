"use client";

import { contactSectionContent } from '@/data/homepageData';
import { useState, FormEvent } from 'react';

export default function ContactSection() {
    const { header, form } = contactSectionContent;
    const [selectedBudget, setSelectedBudget] = useState<string>(form.budgetOptions[0].id);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            budget: selectedBudget,
        };
        console.log("Submitted Dynamic Form Data:", data);
    };

    return (
        <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-10 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-2 text-gray-400 font-medium">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0"></span>
                        <p>
                            {header.badgeText}
                            <span className="theme-font text-white font-medium">{header.boldBadgeWord}</span>
                        </p>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight whitespace-pre-line">
                        {header.title}
                    </h1>
                    <p className="text-gray-400 text-lg max-w-md">
                        {header.description}
                    </p>
                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-4 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-blue-500" aria-hidden="true"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            <span>{header.features[0]}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe text-blue-500" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                            <span>{header.features[1]}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-[20px] p-8 md:p-10 text-black shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-600">{form.labels.name}</label>
                            <input
                                name="fullName"
                                required
                                placeholder={form.placeholders.name}
                                className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all"
                                type="text"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-600">{form.labels.email}</label>
                                <input
                                    name="email"
                                    required
                                    placeholder={form.placeholders.email}
                                    className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all"
                                    type="email"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-600">{form.labels.phone}</label>
                                <input
                                    name="phone"
                                    required
                                    placeholder={form.placeholders.phone}
                                    maxLength={10}
                                    className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all"
                                    type="tel"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-600">{form.labels.message}</label>
                            <textarea name="message" rows={2}
                                placeholder={form.placeholders.message}
                                className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all resize-none">
                            </textarea>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-gray-500">{form.labels.budget}</label>
                            <div className="flex flex-wrap cursor-pointer gap-2 mt-3">
                                {form.budgetOptions.map((option) => {
                                    const isActive = selectedBudget === option.id;
                                    return (
                                        <button key={option.id} type="button" onClick={() => setSelectedBudget(option.id)}
                                            className={`px-4 py-2 cursor-pointer rounded-full border text-[11px] font-bold transition-all ${isActive
                                                ? "bg-black text-white border-black"
                                                : "border-gray-100 hover:bg-gray-50 text-gray-500"
                                                }`}>
                                            {option.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <button type="submit"
                            className="w-full py-4 cursor-pointer rounded-full font-bold text-white transition-all flex items-center justify-center gap-3 bg-black hover:shadow-lg active:scale-[0.98]">
                            {form.submitButtonText}
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}