export interface WorkHeroProps {
    title: string;
    highlightedText: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    bgColor: string; // Dynamic color handle karne ke liye
}

export const workContent: WorkHeroProps = {
    title: "Work That",
    highlightedText: "Speaks for Itself.",
    description: "We design and build digital experiences that blend creativity, technology, and purpose. Every project reflects our focus on quality, performance, and thoughtful design.",
    buttonText: "View Our Recent Projects",
    buttonLink: "/services",
    bgColor: "bg-emerald-900" // Yahan se color control hoga
};

export interface Project {
    id: string;
    title: string;
    date: string;
    image: string;
    tags: string[];
    link: string;
}

export const projects: Project[] = [
    {
        id: "mission-92",
        title: "Mission 92",
        date: "Jan 26 - Feb 26",
        image: "/workImages/bustraker-1.png",
        tags: ["UI/UX", "Application Dev", "Website Dev"],
        link: "/work/mission-92-bustraker"
    },
    {
        id: "vincitore",
        title: "Vincitore Group",
        date: "Nov 25 - Dec 25",
        image: "/workImages/vincitoregroup4.png",
        tags: ["UI/UX", "Website Dev"],
        link: "/work/vincitore-group-web"
    },
];