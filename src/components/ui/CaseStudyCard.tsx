import Image from 'next/image';
import Link from 'next/link';

import { CaseStudy } from '@/lib/types';

import { Button } from '@/components/ui/button';
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
            className={`aspect-video h-auto w-full rounded-md object-cover shadow-md ${className}`}
        />
    );
};

export const CaseStudyCard = ({ caseStudy, className }: caseStudyCardProps) => {
    return (
        <div
            className={`grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12 ${className}`}
        >
            <p className="type-subheading lg:hidden">{caseStudy.title}</p>
            <CoverImage cover={caseStudy.cover} className="" />
            <div className="flex h-full flex-col lg:py-1">
                <p className="type-subheading mb-4 hidden lg:block">
                    {caseStudy.title}
                </p>
                <TechnologyList technologies={caseStudy.technologies} />
                <p className="my-4 flex-1">{caseStudy.description}</p>
                <div className="flex justify-end">
                    <Link href={`/case-studies/${caseStudy.slug}`}>
                        <Button variant="link" className="ml-auto p-0">
                            <span className="hidden sm:inline">
                                Read Case Study
                            </span>
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
