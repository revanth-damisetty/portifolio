import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project, Profile } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");

export async function getProfile(): Promise<Profile> {
    const filePath = path.join(contentDirectory, "profile.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
}

export async function getProjects(): Promise<Project[]> {
    const projectsDirectory = path.join(contentDirectory, "projects");

    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const projects = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...data,
        } as Project;
    });

    // Sort projects by date
    return projects.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const fullPath = path.join(contentDirectory, "projects", `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        content,
        ...data,
    } as Project;
}
