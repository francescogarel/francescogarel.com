import React from 'react';
import Link from 'next/link';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';

import { CaseStudy } from '@/components/sections/CaseStudy';

import { Button } from '@/components/ui/button';

import { FadeIn } from '@/components/animations/FadeIn';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <>
            <Navbar />
            <main>
                <CaseStudy slug={slug} />
            </main>
            <FadeIn>
                <Section>
                    <div className="text-center">
                        <Link href="/" className="mx-auto my-8">
                            <Button variant="link" className="mx-auto my-8">
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/" className="mx-auto my-8">
                            <Button variant="default" className="mx-auto my-8">
                                Start a Project
                            </Button>
                        </Link>
                    </div>
                </Section>
            </FadeIn>

            <Footer />
        </>
    );
}
