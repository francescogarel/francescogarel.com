import { cn } from '@/lib/utils';

import { Section } from '@/components/layout/Section';

import { Heading } from '@/components/ui/Heading';
import { TechnologyList } from '@/components/ui/Technology';

import { FadeIn } from '@/components/animations/FadeIn';

const technologies = [
    {
        category: 'Core Technologies',
        items: ['TypeScript', 'PostgreSQL', 'Git'],
    },
    {
        category: 'Interface Technologies',
        items: ['React', 'Tailwind CSS', 'Shadcn/Ui'],
    },
    {
        category: 'Infrastructure Technologies',
        items: ['Next.js', 'Vercel'],
    },
    {
        category: 'Design Technologies',
        items: ['Figma'],
    },
];

export const Technologies = () => {
    return (
        <Section>
            <div className="mb-12 grid grid-cols-1 gap-16">
                <div>
                    <FadeIn>
                        <Heading tag="h2" variant="h2" className="mb-4">
                            Technical Architecture
                        </Heading>
                    </FadeIn>
                    <FadeIn>
                        <Heading tag="div" variant="subtitle" className="mb-0">
                            I build on a foundation of industry-standard tools
                            selected for speed, scalability, and long-term
                            maintainability.
                        </Heading>
                    </FadeIn>
                </div>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                    {technologies.map((techCategory, index) => (
                        <div key={index}>
                            <FadeIn delay={0.1 * index}>
                                <Heading tag="h3" variant="h4" className="mb-2">
                                    {techCategory.category}
                                </Heading>
                            </FadeIn>
                            <FadeIn delay={0.1 * index}>
                                <TechnologyList
                                    technologies={techCategory.items}
                                />
                            </FadeIn>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
