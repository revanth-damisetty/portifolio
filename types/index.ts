export interface Project {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
    featured?: boolean;
    techStack?: string[];
    methodologies?: string[];
    coverImage?: string;
    impact?: string;
    workflow?: string[];
}

export interface Publication {
    title: string;
    venue: string;
    description: string;
    link?: string;
    logo?: string;
}

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    link?: string;
    logo?: string;
}

export interface Profile {
    name: string;
    title: string;
    tagline: string;
    email: string;
    avatar?: string;
    socials: {
        github: string;
        linkedin: string;
        twitter?: string;
        leetcode?: string;
    };
    skills: {
        languages: string[];
        ml_frameworks: string[];
        data_engineering: string[];
        deployment: string[];
        tools: string[];
    };
    publications: Publication[];
    certifications: Certification[];
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    dates: string;
    description: string[];
    techStack?: string[];
    methodologies?: string[];
    logo?: string;
}
