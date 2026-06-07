import { CodeXml, Globe, LucideIcon, MonitorSmartphone, Palette, Pencil, Smartphone } from "lucide-react";

export const heroContent = {
    badgeText: "GeoUI Studio - Digital Creative Agency",
    headingLines: ["We Build", "High Performance", "Digital Products."],
    highlightedHeading: "That Grow Your Business!",
    subtitle: "Premium digital quality, thoughtfully crafted to fit your budget.",
    primaryButtonText: "Explore Our Services",
    primaryButtonLink: "/services",
    secondaryButtonText: "Explore Our Work",
    secondaryButtonLink: "/work",
    videoUrl: "/demo.mp4"
};

export const sliderContent = {
    words: [
        "SEO Ready Websites",
        "Motion & Animation",
        "Web Development",
        "Branding",
        "App Development",
        "UI/UX Design"
    ],
    separator: " • ",
    speed: -1
};

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    href: string;
    colorTheme: {
        text: string;
        gradient: string;
        border: string;
    };
    icon: LucideIcon;
}

export const ourServiceContent = {
    header: {
        badge: "Our Services",
        titleParts: [
            { text: "Digital\u00A0", className: "text-white" },
            { text: "Solutions\u00A0", className: "text-white" },
            { text: "for\u00A0", className: "text-white" },
            { text: "Your\u00A0", className: "text-blue-500 font-semibold" },
            { text: "Business\u00A0", className: "text-blue-500 font-semibold" },
            { text: "Growth\u00A0", className: "text-blue-500 font-semibold" },
        ],
        description: "We design and develop modern digital solutions that help businesses build a strong online presence, attract customers, and grow faster.",
    },
    services: [
        {
            id: "web-development",
            title: "Website Development",
            description: "We don't just build websites; we create digital experiences. Our sites are lightning-fast, secure, and designed specifically to rank on Google and convert your traffic into revenue.",
            href: "/services/web-development",
            colorTheme: {
                text: "text-blue-400",
                gradient: "from-blue-600/20",
                border: "border-blue-500/30 md:hover:border-blue-500/50",
            },
            icon: Globe,
        },
        {
            id: "web-app-development",
            title: "Web App Development",
            description: "Move beyond static sites. We build powerful, database-driven web applications that solve internal bottlenecks or serve as your next big startup idea.",
            href: "/services/web-app-development",
            colorTheme: {
                text: "text-emerald-400",
                gradient: "from-emerald-600/20",
                border: "border-emerald-500/30 md:hover:border-emerald-500/50",
            },
            icon: MonitorSmartphone,
        },
        {
            id: "mobile-app-development",
            title: "Mobile App Development",
            description: "Reach your users where they spend most of their time. We develop high-performance mobile apps using React Native for a seamless experience on both iOS and Android.",
            href: "/services/mobile-app-development",
            colorTheme: {
                text: "text-purple-400",
                gradient: "from-purple-600/20",
                border: "border-purple-500/30 md:hover:border-purple-500/50",
            },
            icon: Smartphone,
        },
        {
            id: "ui-ux-design",
            title: "UI/UX Design",
            description: "We design intuitive digital experiences that users love. Our process moves from research to high-fidelity prototypes that act as a blueprint for your success.",
            href: "/services/ui-ux-design",
            colorTheme: {
                text: "text-rose-400",
                gradient: "from-rose-600/20",
                border: "border-rose-500/30 md:hover:border-rose-500/50",
            },
            icon: Pencil,
        },
        {
            id: "graphic-design",
            title: "Graphic & Brand Design",
            description: "A brand is more than a logo. We create cohesive visual identities that build trust and make your business unforgettable.",
            href: "/services/graphic-design",
            colorTheme: {
                text: "text-orange-400",
                gradient: "from-orange-600/20",
                border: "border-orange-500/30 md:hover:border-orange-500/50",
            },
            icon: Palette,
        },
        {
            id: "custom-development",
            title: "Custom Software",
            description: "When off-the-shelf software isn't enough, we build custom tools designed specifically around your business logic and workflows.",
            href: "/services/custom-development",
            colorTheme: {
                text: "text-indigo-400",
                gradient: "from-indigo-600/20",
                border: "border-indigo-500/30 md:hover:border-indigo-500/50",
            },
            icon: CodeXml,
        },
    ],
} as { header: any, services: ServiceItem[] };

export interface WorkItem {
    id: string;
    title: string;
    dateRange: string;
    imageSrc: string;
    href: string;
    tags: string[];
}

export const ourWorkContent = {
    header: {
        badge: "Our Work",
        titleParts: [
            { text: "Crafting\u00A0", className: "text-white" },
            { text: "Digital\u00A0", className: "text-white" },
            { text: "Experiences\u00A0", className: "text-blue-500 font-semibold" },
            { text: "That\u00A0", className: "text-white" },
            { text: "Matter\u00A0", className: "text-white" },
        ],
        description: "A deep dive into the unique methodologies, collaborative spirit, and innovative problem-solving that Goìs Studio stands in the programming landscape.",
    },
    projects: [
        {
            id: "mission-92-bustraker",
            title: "Mission 92",
            dateRange: "Jan 26 - Feb 26",
            imageSrc: "/product1.jpg",
            href: "/work/mission-92-bustraker",
            tags: ["UI/UX", "Application Dev", "Website Dev"],
        },
        {
            id: "vincitore-group",
            title: "Vincitore Group",
            dateRange: "Nov 25 - Dec 25",
            imageSrc: "/workImages/vincitoregroup4.png",
            href: "/work/vincitore-group-web",
            tags: ["UI/UX", "Website Dev"],
        },
        {
            id: "thekidsolympic",
            title: "The Kids Olympic",
            dateRange: "Dec 25 - Jan 26",
            imageSrc: "/kids-2.png",
            href: "/work/thekidsolympic",
            tags: ["UI/UX", "Website Dev"],
        },
        {
            id: "momento",
            title: "Momento",
            dateRange: "Nov 25 - Dec 25",
            imageSrc: "/momento-2.png",
            href: "/work/momento",
            tags: ["UI/UX", "Website Dev"],
        },
        {
            id: "mission-92-attendance",
            title: "Mission 92 Attendance",
            dateRange: "Jan 26 - Feb 26",
            imageSrc: "/bus-4.png",
            href: "/work/mission-92-attendance",
            tags: ["UI/UX", "Website Dev"],
        },

    ] as WorkItem[],
};

export const teamMembers = [
    {
        id: 1,
        name: "Dharmaraj Patidar",
        role: "Founder • CEO",
        hashtag: "#ProductVision",
        image: "/DharmarajPatidar.jpg",
        phone: "919926140507",
        whatsapp: "919926140507",
        linkedin: "https://linkedin.com/in/your-link",
    },
    {
        id: 2,
        name: "Pawan Chouhan",
        role: "Co-Founder • Full Stack Developer",
        hashtag: "#CodeToScale",
        image: "/harikrishna.jpg",
        phone: "919081751109",
        whatsapp: "919081751109",
        linkedin: "https://linkedin.com/in/your-link",
    },
    {
        id: 3,
        name: "Vijay Singh",
        role: "Co-Founder • Backend & Systems",
        hashtag: "#EngineeredReliability",
        image: "/bhavik.jpg",
        phone: "917801978003",
        whatsapp: "917801978003",
        linkedin: "https://linkedin.com/in/your-link",
    }
];

export interface TitlePart {
    text: string;
    className: string;
}

export interface FeatureItem {
    text: string;
    isPositive: boolean;
}

export interface FeatureCard {
    id: string;
    title: string;
    isPremium: boolean;
    features: FeatureItem[];
}

export interface WhyGoisStudioContent {
    header: {
        badge: string;
        titleParts: TitlePart[];
        description: string;
    };
    cards: FeatureCard[];
    cta: {
        text: string;
        href: string;
    };
}

export const whyGoisStudioContent = {
    header: {
        badge: "WHY GEOUI STUDIO?",
        titleParts: [
            { text: "Built\u00A0", className: "text-white" },
            { text: "With\u00A0", className: "text-white" },
            { text: "Purpose.\u00A0", className: "text-blue-500 font-semibold" },
            { text: "Driven\u00A0", className: "text-white" },
            { text: "By\u00A0", className: "text-white" },
            { text: "Results.\u00A0", className: "text-blue-500 font-semibold" },
        ],
        description: "We combine design, development, and strategy to create digital products.",
    },
    cards: [
        {
            id: "geoui-studio-premium",
            title: "GeoUIStudio™",
            isPremium: true,
            features: [
                { text: "Business-Driven Website Development", isPositive: true },
                { text: "Custom UI/UX Designed For Conversions", isPositive: true },
                { text: "Scalable Mobile App Architecture", isPositive: true },
                { text: "Strategic Branding & Graphic Systems", isPositive: true },
                { text: "Clean Code + Future-Proof Structure", isPositive: true },
                { text: "Direct Collaboration With Creators", isPositive: true },
            ],
        },
        {
            id: "typical-agencies",
            title: "Typical Agencies",
            isPremium: false,
            features: [
                { text: "Generic Templates & Quick Fix Builds", isPositive: false },
                { text: "UI Without User Behavior Thinking", isPositive: false },
                { text: "Apps Without Long-Term Planning", isPositive: false },
                { text: "Disconnected Visual Identity", isPositive: false },
                { text: "Performance Ignored Until Later", isPositive: false },
                { text: "Layered Communication Delays", isPositive: false },
            ],
        },
    ] as FeatureCard[],
    cta: {
        text: "Build Something Meaningful",
        href: "/services",
    },
};

// Types definitions
export interface FAQTitlePart {
    text: string;
    className: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface FAQContent {
    header: {
        badge: string;
        titleParts: FAQTitlePart[];
        description: string;
    };
    questions: FAQItem[];
}

export const faqContent = {
    header: {
        badge: "Find your answers quickly",
        titleParts: [
            { text: "Frequently\u00A0", className: "text-white" },
            { text: "Asked\u00A0", className: "text-white" },
            { text: "Questions\u00A0", className: "text-blue-500 font-semibold" },
        ],
        description: "Everything you need to know about our services, process, pricing, and support.",
    },
    questions: [
        {
            id: "services-provided",
            question: "What services does Gois Studio provide?",
            answer: "We provide web development, mobile app development, UI/UX design, and graphic design services. Our focus is building high-performance digital products that help businesses grow online.",
        },
        {
            id: "project-timeline",
            question: "How long does it take to complete a project?",
            answer: "The timeline depends on the project scope. Simple websites usually take 2-4 weeks, while complex web applications or mobile apps can take 6-12 weeks. We ensure milestone-based timely delivery.",
        },
        {
            id: "seo-friendly",
            question: "Do you provide SEO-friendly websites?",
            answer: "Yes, all our websites are built with modern SEO best practices. From semantic HTML structures to lightning-fast loading speeds and responsive mobile views, everything is optimized for search engines.",
        },
        {
            id: "pricing-structure",
            question: "What is your pricing structure?",
            answer: "We offer tailored pricing based on the specific requirements of your project. After understanding your scope, features, and goals, we provide a transparent, fixed-price quote with zero hidden charges.",
        },
        {
            id: "post-delivery-support",
            question: "Do you provide support after project delivery?",
            answer: "Absolutely. We offer dedicated post-launch support and maintenance packages to monitor performance, squash bugs, and keep your platform updated with emerging technologies.",
        },
        {
            id: "how-to-start",
            question: "How do we start working together?",
            answer: "It starts with a simple discovery call. You share your ideas, constraints, and requirements. Once we define the scope, we map out a wireframe and step into development immediately.",
        },
    ] as FAQItem[],
};

export interface TestimonialTitlePart {
    text: string;
    className: string;
}

export interface ClientReview {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
    rating: number;
    reviewText: string;
}

export interface TestimonialsContent {
    header: {
        badge: string;
        titleParts: TestimonialTitlePart[];
        description: string;
    };
    reviews: ClientReview[];
}

export const testimonialsContent = {
    header: {
        badge: "TESTIMONIALS",
        titleParts: [
            { text: "Trusted\u00A0", className: "text-gray-900" },
            { text: "By\u00A0", className: "text-gray-900" },
            { text: "Clients\u00A0", className: "text-gray-900" },
            { text: "Built\u00A0", className: "text-blue-500 font-semibold" },
            { text: "With\u00A0", className: "text-blue-500 font-semibold" },
            { text: "Care\u00A0", className: "text-blue-500 font-semibold" },
        ],
        description: "Real experiences from businesses that partnered with Gois Studio to design, build, and launch impactful digital products.",
    },
    reviews: [
        {
            id: "jems-patoliya",
            name: "Mr. Jems Patoliya",
            role: "Director of Vincitore Group",
            imageSrc: "/clients/JemsPatoliya.png",
            rating: 5.0,
            reviewText: "Gois Studio created a beautiful and high-performance website for us. The UI/UX looks premium, loads fast, and is optimized for search engines. Great experience overall.",
        },
        {
            id: "pratik-sarvaiya",
            name: "Mr. Pratik Sarvaiya",
            role: "Children Activity",
            imageSrc: "/clients/pratikbhai1.jpg",
            rating: 5.0,
            reviewText: "Got a high-performance web app (The Kids Olympic) in just 4–5 days and used it successfully for our event. Fast and reliable work.",
        },
        {
            id: "mehul-mehta",
            name: "Mr. Mehul Mehta",
            role: "Owner, Mehul Sir Tuition Classes",
            imageSrc: "/clients/MehulSir.jpg",
            rating: 5.0,
            reviewText: "Exceptional attention to detail! They transformed our educational modules with stunning graphic designs and comprehensive layouts. Every flyer and study material was delivered with precision, making our brand look professional and organized.",
        },
    ] as ClientReview[],
};

// Types definitions
export interface FormBudgetOption {
    id: string;
    label: string;
}

export interface ContactSectionContent {
    header: {
        badgeText: string;
        boldBadgeWord: string;
        title: string; // Let’s Build Something Meaningful Together.
        description: string;
        features: string[];
    };
    form: {
        labels: {
            name: string;
            email: string;
            phone: string;
            message: string;
            budget: string;
        };
        placeholders: {
            name: string;
            email: string;
            phone: string;
            message: string;
        };
        budgetOptions: FormBudgetOption[];
        submitButtonText: string;
    };
}

export const contactSectionContent: ContactSectionContent = {
    header: {
        badgeText: "Start your digital journey with ",
        boldBadgeWord: "GoisStudio™",
        title: "Let’s Build Something \n Meaningful Together.", // \n handles break tags neatly
        description: "We design and develop high-performance websites, mobile apps, and brand identities from Ahmedabad.",
        features: [
            "Fast response & transparent process",
            "Serving clients globally"
        ]
    },
    form: {
        labels: {
            name: "Full Name*",
            email: "Email Address*",
            phone: "Phone Number*",
            message: "Message",
            budget: "Project Budget (INR)"
        },
        placeholders: {
            name: "Enter your name",
            email: "Enter your email",
            phone: "Phone number",
            message: "Tell us about your project"
        },
        budgetOptions: [
            { id: "less-10k", label: "Less than 10,000" },
            { id: "10k-25k", label: "10,000 - 25,000" },
            { id: "25k-50k", label: "25,000 - 50,000" },
            { id: "more-50k", label: "More than 50,000" }
        ],
        submitButtonText: "Send Message!"
    }
};

// Types definitions
// Types definitions
export interface FooterNavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    iconType: 'youtube' | 'instagram' | 'whatsapp' | 'telegram';
    href: string;
    ariaLabel: string;
}

export interface FooterSectionContent {
    brandName: string;
    tagline: string;
    socials: SocialLink[];
    navigation: {
        title: string;
        links: FooterNavLink[];
    };
    contact: {
        title: string;
        timing: string;
        phones: string[];
        email: string;
    };
    copyright: string;
    termsLink: {
        label: string;
        href: string;
    };
    gradientFrom: string;
    gradientTo: string;
    glowColor: string;
}

export const footerSectionContent: FooterSectionContent = {
    brandName: "GeoUI Studio",
    tagline: "GeoUI",
    socials: [
        { iconType: "youtube", href: "https://www.youtube.com/@IAmSidGoi", ariaLabel: "Visit our YouTube" },
        { iconType: "instagram", href: "https://www.instagram.com/sidgoi", ariaLabel: "Visit our Instagram" },
        { iconType: "whatsapp", href: "https://wa.me/918511788624", ariaLabel: "Contact us on WhatsApp" },
        { iconType: "telegram", href: "https://t.me/+918511788624", ariaLabel: "Join our Telegram" }
    ],
    navigation: {
        title: "NAVIGATION",
        links: [
            { label: "About", href: "/about-contact" },
            { label: "Support", href: "/support" },
            { label: "Contact", href: "/about-contact" },
            { label: "Work", href: "/work" },
            { label: "Services", href: "/services" }
        ]
    },
    contact: {
        title: "CONTACT",
        timing: "Call us: 9am - 8pm",
        phones: ["+91 9926140507", "+91 9081751109", "+91 85117 88624"],
        email: "inquiry.geoui@gmail.com"
    },
    copyright: "© 2026 GeoUI Studio. All Rights Reserved",
    termsLink: {
        label: "Terms and Conditions",
        href: "/gois-studio-terms.pdf"
    },
    gradientFrom: "#3b82f6",
    gradientTo: "#1d4ed8",
    glowColor: "rgba(37, 99, 235, 0.5)"
};