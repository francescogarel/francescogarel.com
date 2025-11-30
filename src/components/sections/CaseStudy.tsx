import Image from 'next/image';
import { getCaseStudyBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { Section } from '@/components/layout/Section';

import { Heading } from '@/components/ui/Heading';
import { TechnologyList } from '@/components/ui/Technology';
import { Button } from '@/components/ui/button';

import { PerformanceBlock, FontDisplayBlock } from '@/components/mdx/blocks';
import { Note } from '@/components/mdx/callouts';
import { Section as MDXSection } from '@/components/mdx/section';

import { BrandLogos } from '@/components/ui/brandLogos';
import { ArrowUpRight } from 'lucide-react';

import { FadeIn } from '@/components/animations/FadeIn';

type CaseStudyProps = {
    slug: string;
};
const components = {
    h1: (props: any) => (
        <>
            <Heading tag="h2" variant="h2" className="mb-5" {...props} />
        </>
    ),
    h2: (props: any) => (
        <Heading tag="h3" variant="h3" {...props} className="mb-5" />
    ),

    h3: (props: any) => <h4 className="type-large mb-5" {...props} />,

    p: (props: any) => (
        <p
            className="text-secondary-foreground tracking-relaxed mb-4 leading-relaxed"
            {...props}
        />
    ),
    PerformanceBlock: PerformanceBlock,
    FontDisplayBlock: FontDisplayBlock,
    Section: MDXSection,
    Note: Note,
};

const OverviewItem = ({ label, value }: { label: string; value: string }) => {
    return (
        <div className="grid grow-1 grid-cols-2 grid-cols-[auto_1fr] gap-6 rounded-md border p-4">
            <p className="type-small text-foreground-secondary flex items-center">
                {label}
            </p>
            <p className="type-large font-mono">{value}</p>
        </div>
    );
};

const ExternalLinks = ({
    repoUrl,
    demoUrl,
}: {
    repoUrl?: string;
    demoUrl?: string;
}) => {
    return (
        <>
            <Button
                variant={repoUrl ? 'outline' : 'disabled'}
                className="flex-1"
            >
                {repoUrl ? (
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                        <BrandLogos.Github className="mr-2 mb-1 inline-block" />
                        Visit Repo
                    </a>
                ) : (
                    <>
                        <BrandLogos.Github className="mr-2 mb-1 inline-block" />
                        Repo Unavailable
                    </>
                )}
            </Button>
            <Button variant={demoUrl ? 'link' : 'disabled'} className="flex-1">
                {demoUrl ? (
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                        View Live Demo
                        <ArrowUpRight className="mr-2 mb-1 inline-block" />
                    </a>
                ) : (
                    <>
                        Demo Unavailable
                        <ArrowUpRight className="mr-2 mb-1 inline-block" />
                    </>
                )}
            </Button>
        </>
    );
};

export async function CaseStudy({ slug }: CaseStudyProps) {
    const caseStudy = await getCaseStudyBySlug(slug);

    if (!caseStudy) {
        return (
            <div className="bg-background rounded-lg p-8 shadow-md">
                <h2 className="mb-4 text-2xl font-bold">caseStudy Not Found</h2>
                <p>The requested case study could not be found.</p>
            </div>
        );
    }

    return (
        <Section>
            <div className="mx-auto flex max-w-prose flex-col gap-8">
                <FadeIn trigger="load" delay={0}>
                    <Image
                        src={caseStudy.cover}
                        alt={`${caseStudy.title} Cover Image`}
                        width={1920}
                        height={1080}
                        className="aspect-video w-full max-w-[800px] rounded-md border object-cover shadow-md"
                    />
                </FadeIn>
                <div className="flex flex-col">
                    <FadeIn trigger="load" delay={0.1}>
                        <Heading tag="h1" variant="h1" className="mb-4">
                            {caseStudy.title}
                        </Heading>
                    </FadeIn>
                    <FadeIn trigger="load" delay={0.2}>
                        <Heading tag="div" variant="subtitle" className="mb-6">
                            {caseStudy.description}
                        </Heading>
                    </FadeIn>
                    <FadeIn
                        trigger="load"
                        delay={0.2}
                        className="mb-6 flex w-fit gap-4"
                    >
                        <ExternalLinks
                            repoUrl={caseStudy.url?.repo}
                            demoUrl={caseStudy.url?.demo}
                        />
                    </FadeIn>
                    <FadeIn trigger="load" delay={0.3}>
                        <TechnologyList technologies={caseStudy.technologies} />
                    </FadeIn>
                </div>
                <FadeIn
                    className="flex flex-col gap-2"
                    trigger="load"
                    delay={0.4}
                >
                    <OverviewItem
                        label="Year"
                        value={caseStudy.year.toString()}
                    />
                    <OverviewItem label="Role" value={caseStudy.role} />
                    <OverviewItem label="Type" value={caseStudy.type} />
                </FadeIn>
                <FadeIn trigger="load" delay={0.5}>
                    <article>
                        <MDXRemote
                            source={caseStudy.content}
                            components={components}
                        />
                    </article>
                </FadeIn>
            </div>
        </Section>
    );
}
