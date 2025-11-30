import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/Heading';
import { ArrowRight } from 'lucide-react';

import { FadeIn } from '@/components/animations/FadeIn';

import { ChevronsDown } from 'lucide-react';

export const Hero = () => {
    return (
        // 1. Outer Wrapper: Needs 'relative' so the image knows what to fill
        <section className="relative flex h-[85dvh] items-center overflow-hidden">
            <Image
                src="/images/marble.png"
                alt="Background"
                fill
                className="object-cover object-center opacity-30"
                priority
            />

            <div className="absolute right-1/2 bottom-8 z-10">
                <FadeIn delay={0.4} trigger="load">
                    <ChevronsDown className="text-foreground animate-bounce" />
                </FadeIn>
            </div>

            <div className="from-background absolute inset-0 bg-gradient-to-t to-transparent" />

            <div className="relative z-10 container mx-auto flex w-full max-w-[min(95%,_1200px)] flex-col items-center text-center">
                <FadeIn delay={0.1} trigger="load">
                    <Heading tag="h1" variant="display" className="mb-6">
                        I am building the Next
                        <br />
                        Generation of Web Apps.
                    </Heading>
                </FadeIn>
                <FadeIn delay={0.2} trigger="load">
                    <Heading
                        tag="div"
                        variant="subtitle"
                        className="mb-8 max-w-2xl"
                    >
                        A unified workflow from UI design to full-stack
                        deployment, eliminating agency bloat to ship visionary
                        products faster.
                    </Heading>
                </FadeIn>

                <FadeIn delay={0.3} trigger="load">
                    <Link href="#curated-work">
                        <Button variant="default">
                            Explore Case Studies
                            <ArrowRight className="ml-2" size={18} />
                        </Button>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};
