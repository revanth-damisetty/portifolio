import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { Publications } from "@/components/sections/publications"
import { Certifications } from "@/components/sections/certifications"
import { getProfile, getProjects } from "@/lib/data"

export default async function Home() {
    const profile = await getProfile()
    const projects = await getProjects()
    const featuredProjects = projects.filter(p => p.featured).slice(0, 4)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero profile={profile} />
            <FeaturedProjects projects={featuredProjects} />
            <Publications publications={profile.publications} />
            <Certifications certifications={profile.certifications} />
            <Skills skills={profile.skills} />
        </main>
    );
}
