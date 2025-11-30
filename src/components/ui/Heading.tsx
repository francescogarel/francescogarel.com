import React from 'react';

const VARIANTS = {
    display: 'type-display',
    h1: 'type-heading',
    h2: 'type-subheading',
    h3: 'type-subsubheading',
    h4: 'type-subsubsubheading',
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

    const styles = `${VARIANTS[variant]} ${className}`;

    return (
        <Component className={styles} {...props}>
            {children}
        </Component>
    );
};
