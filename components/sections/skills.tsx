import { Badge } from "@/components/ui/badge"
import { Profile } from "@/types"

interface SkillsProps {
    skills: Profile["skills"]
}

export function Skills({ skills }: SkillsProps) {
    return (
        <section className="container max-w-screen-2xl py-12 md:py-16 lg:py-24 border-t border-border/40">
            <div className="mx-auto flex max-w-[58rem] flex-col items-start justify-center gap-4 text-center sm:items-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Technical Expertise
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    A robust stack for building end-to-end ML systems.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4 mt-12">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.languages.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg">ML Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.ml_frameworks.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg">Data Engineering</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.data_engineering.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg">Deployment</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.deployment.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
