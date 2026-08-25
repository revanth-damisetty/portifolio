import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { Publications } from "@/components/sections/publications"
import { Certifications } from "@/components/sections/certifications"
import { ExperienceHighlight } from "@/components/sections/experience-highlight"
import { Education } from "@/components/sections/education"
import { getProfile, getProjects, getExperience } from "@/lib/data"

export default async function Home() {
    const profile = await getProfile()
    const projects = await getProjects()
    const experiences = await getExperience()
    const homeExperiences = experiences.filter(e => e.id === "apple-siriai-intern" || e.id === "ge-healthcare-sde")
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero profile={profile} />
            <Education education={profile.education} />
            <ExperienceHighlight experiences={homeExperiences} />
            <FeaturedProjects projects={featuredProjects} />
            <Skills skills={profile.skills} />
            <Publications publications={profile.publications} />
            <Certifications certifications={profile.certifications} />
        </main>
    );
}
