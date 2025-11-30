'use client';
import React from 'react';

import { Section } from '@/components/layout/Section';

import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import { Button } from '@/components/ui/button';

import { FadeIn } from '@/components/animations/FadeIn';

import { Zap, Copy, Ban } from 'lucide-react';

const Steps = [
    {
        number: '01.',
        title: 'The Brief',
        description:
            'Define your goals and technical constraints. The more data you provide, the sharper the strategy.',
    },
    {
        number: '02.',
        title: 'The Strategy',
        description:
            'Receive a tailored architectural roadmap outlining the optimal tech stack, system design, and implementation plan.',
    },
    {
        number: '03.',
        title: 'The Execution',
        description:
            'Leverage the roadmap to build your visionary product with confidence, efficiency, and scalability in mind.',
    },
];

export const ContactMe = () => {
    return (
        <Section id="contact-me">
            <div className="flex flex-col items-center justify-center gap-12">
                <div className="flex flex-col md:text-center">
                    <FadeIn>
                        <Heading tag="h2" variant="h2" className="mb-6">
                            Ready to build something visionary?
                        </Heading>
                    </FadeIn>
                    <FadeIn>
                        <Heading tag="div" variant="subtitle" className="mb-12">
                            Skip the sales calls. I respect your time. Receive a
                            personalized architectural video roadmap within 48
                            hours.
                        </Heading>
                    </FadeIn>
                </div>
                <div className="flex w-full flex-col justify-center gap-12 md:flex-row">
                    {Steps.map((step, index) => (
                        <FadeIn delay={0.1 * index} key={step.number}>
                            <div className="flex flex-1 flex-col gap-4 lg:flex-row">
                                <div>
                                    <Heading tag="div" variant="display">
                                        {step.number}
                                    </Heading>
                                </div>
                                <div className="flex flex-1 flex-col gap-0">
                                    <Heading
                                        tag="h3"
                                        variant="h4"
                                        className="mb-2"
                                    >
                                        {step.title}
                                    </Heading>
                                    <p className="text-foreground-secondary">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <FadeIn delay={0}>
                        <Card className="relative flex flex-[1.1] flex-col">
                            <CardContent>
                                <Heading tag="h3" variant="h4" className="mb-2">
                                    Architectural Scoping Engine
                                </Heading>
                                Skip the discovery call. My adaptive logic
                                engine creates a precise technical profile of
                                your needs in under 5 minutes.
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="disabled"
                                            className="w-full"
                                        >
                                            <Zap className="mr-2" />
                                            Start the Engine
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        Coming soon{' '}
                                    </PopoverContent>
                                </Popover>
                            </CardFooter>
                        </Card>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <Card className="flex h-full flex-col border-transparent">
                            <CardContent>
                                <Heading tag="h3" variant="h4" className="mb-2">
                                    Direct Inquiry
                                </Heading>
                                Prefer the classic way? Send me a direct brief
                                outlining your project goals.
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button
                                    variant="outline"
                                    className="w-full font-mono"
                                >
                                    <Copy className="mr-2" />
                                    hello@francescogarel.com
                                </Button>
                            </CardFooter>
                        </Card>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
};
