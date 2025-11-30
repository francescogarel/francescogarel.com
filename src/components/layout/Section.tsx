import React from 'react';

type SectionProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
};

export const Section = ({ id, className = '', children }: SectionProps) => {
    return (
        <section id={id} className={`py-16 ${className}`}>
            <div className="container mx-auto w-full max-w-[min(95%,_1200px)]">
                {children}
            </div>
        </section>
    );
};
