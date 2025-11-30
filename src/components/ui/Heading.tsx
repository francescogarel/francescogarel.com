import React from 'react';

import { cn } from '@/lib/utils';

const VARIANTS = {
    display: `font-serif [font-size:_clamp(1.959rem,_calc(1.560rem_+_1.931vw),_3.008rem)] tracking-[0.012em] font-[800] leading-[1.47]`,
    h1: `font-serif [font-size:_clamp(1.801rem,_calc(1.489rem_+_1.509vw),_2.622rem)] tracking-[0.012em] font-[700] leading-[1.47]`,
    h2: `font-serif [font-size:clamp(1.656rem,calc(1.417rem+1.156vw),_2.284rem)] tracking-[0.016em] font-[600] leading-[1.47]`,
    h3: `font-serif [font-size:clamp(1.522rem,calc(1.345rem+0.861vw),1.991rem)] tracking-[0.016em] font-[600] leading-[1.47]`,
    h4: `font-serif [font-size:clamp(1.399rem,calc(1.272rem+0.616vw),1.734rem)] tracking-[0.016em] font-[500] leading-[1.47]`,
    subtitle: `max-w-prose font-sans text-muted-foreground [font-size:clamp(1.088rem,calc(1.065rem+0.110vw),1.148rem)] tracking-[0.024em] font-[400] leading-[1.52]`,
};

type HeadingProps = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
    variant?: keyof typeof VARIANTS;
    className?: string;
    children: React.ReactNode;
};

export const Heading = ({
    tag = 'h1',
    variant = 'h1',
    className = '',
    children,
    ...props
}: HeadingProps) => {
    const Component = tag;

    const styles = cn(VARIANTS[variant], className);

    return (
        <Component className={styles} {...props}>
            {children}
        </Component>
    );
};
