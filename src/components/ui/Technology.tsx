import React from 'react';

import { normalizeKey } from '@/lib/utils';

import { BrandLogos } from '@/components/ui/brandLogos';

function TechnologyBadge({
    technology,
    children,
    className,
}: {
    technology: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const Icon = BrandLogos[technology as keyof typeof BrandLogos];
    return (
        <div
            className={`bg-secondary flex items-center justify-center gap-4 rounded-full px-4 py-2 ${className}`}
        >
            {Icon ? <Icon key={technology} className="h-5 w-5" /> : null}
            {children}
        </div>
    );
}

export const TechnologyList = ({
    technologies,
}: {
    technologies: string[];
}) => {
    return (
        <div className="flex flex-wrap items-center justify-start gap-4">
            {technologies.map((tech, index) => (
                <TechnologyBadge
                    key={index}
                    technology={normalizeKey(tech)}
                    className="grow-1"
                >
                    <p className="type-small font-mono">{tech}</p>
                </TechnologyBadge>
            ))}
        </div>
    );
};
