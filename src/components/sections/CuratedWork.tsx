import { getAllCaseStudies } from '@/lib/mdx';

import { Section } from '@/components/layout/Section';

import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/button';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import { FadeIn } from '@/components/animations/FadeIn';

import { ArrowRight } from 'lucide-react';

export async function CuratedWork() {
    const caseStudies = await getAllCaseStudies();
    return (
        <Section id="curated-work">
            <FadeIn>
                <Heading tag="h2" variant="h2" className="mb-4">
                    Curated Work
                </Heading>
            </FadeIn>
            <FadeIn>
                <Heading tag="div" variant="subtitle" className="mb-12">
                    Showcasing a selection of my most impactful projects that
                    demonstrate my expertise in full-stack development and
                    innovative problem-solving.
                </Heading>
            </FadeIn>
            <div className="mx-auto flex flex-col gap-24">
                {caseStudies.slice(0, 3).map((caseStudy) => (
                    <FadeIn key={caseStudy.slug}>
                        <div>
                            <CaseStudyCard caseStudy={caseStudy} />
                        </div>
                    </FadeIn>
                ))}
            </div>
            <FadeIn>
                <div className="mt-12 flex justify-center">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="disabled">
                                View All Case Studies
                                <ArrowRight className="ml-2" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>Unreleased</PopoverContent>
                    </Popover>
                </div>
            </FadeIn>
        </Section>
    );
}
