import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { CaseStudy } from '@/lib/types';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/Heading';
import { TechnologyList } from '@/components/ui/Technology';

import { ArrowRight } from 'lucide-react';

type caseStudyCardProps = {
    caseStudy: CaseStudy;
    className?: string;
};

const CoverImage = ({
    cover,
    className,
}: {
    cover: string;
    className?: string;
}) => {
    return (
        <Image
            src={cover}
            alt="caseStudy Cover Image"
            width={1920}
            height={1080}
            className={`aspect-video h-auto w-full object-cover shadow-md ${className}`}
        />
    );
};

export const CaseStudyCard = ({ caseStudy, className }: caseStudyCardProps) => {
    return (
        <div className={cn(``, className)}>
            <CoverImage cover={caseStudy.cover} className="mb-4 border" />
            <Heading tag="h3" variant="h4" className="mb-2">
                {caseStudy.title}
            </Heading>
            <p className="text-muted-foreground mb-4 max-w-prose flex-1 text-sm">
                {caseStudy.description}
            </p>
            <div className="flex justify-end">
                <Link href={`/case-studies/${caseStudy.slug}`}>
                    <Button variant="link" className="ml-auto p-0">
                        Read Case Study
                        <ArrowRight />
                    </Button>
                </Link>
            </div>
        </div>
    );
};
