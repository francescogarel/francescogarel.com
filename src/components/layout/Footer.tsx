import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { Section } from '@/components/layout/Section';

import { BrandLogos } from '@/components/ui/brandLogos';

export const Footer = () => {
    return (
        <Section id="footer" className="border-t pt-6">
            <div className="grid grid-cols-2">
                <div className="flex h-8 items-center font-mono text-xl">
                    <p>&copy; {new Date().getFullYear()} Francesco Garel.</p>
                </div>
                <div className="flex justify-end gap-2">
                    <Link
                        href="https://github.com/francescogarel"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Button variant="ghost">
                            <BrandLogos.Github />
                        </Button>
                    </Link>
                    <Link
                        href="https://x.com/francescogarel"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Button variant="ghost">
                            <BrandLogos.X />
                        </Button>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/francescogarel/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Button variant="ghost">
                            <BrandLogos.Linkedin />
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
