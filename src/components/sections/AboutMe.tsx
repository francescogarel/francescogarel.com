'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { useState, useEffect } from 'react';

import { WeatherData } from '@/lib/types';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/Heading';

import { FadeIn } from '@/components/animations/FadeIn';

import { BrandLogos } from '@/components/ui/brandLogos';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Map,
    Eye,
    CircleSmall,
    EyeOff,
    Headphones,
    BookOpen,
} from 'lucide-react';

function WeatherCard({ weatherData }: { weatherData: WeatherData }) {
    const [timeNow, setTimeNow] = useState(null as Date | null);

    useEffect(() => {
        setTimeNow(new Date());
        const timer = setInterval(() => {
            const newDate = new Date();
            const hrs = newDate.getHours();
            newDate.setHours(hrs + 1);
            setTimeNow(newDate);
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <Card className="flex justify-center">
            <CardContent>
                <div className="grid grid-rows-2 gap-4">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center">
                            <Map className="mr-4 inline-block h-6 w-6" />
                            <p>Milan, Italy</p>
                        </div>
                        <div className="flex gap-[0.1em] font-mono">
                            {timeNow &&
                                timeNow
                                    .toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })
                                    .split('')
                                    .map((char, index) => (
                                        <span
                                            key={index}
                                            className={cn(
                                                'inline-block',
                                                char === ':'
                                                    ? 'animate-blink'
                                                    : ''
                                            )}
                                        >
                                            {char}
                                        </span>
                                    ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <img
                                src={`https:${weatherData.condition.icon}`}
                                alt={weatherData.condition.text}
                                width={64}
                                height={64}
                                className="mt-1 inline-block h-6 w-6"
                            />
                            <p className="">{weatherData.condition.text}</p>
                        </div>
                        <p className="font-mono">{weatherData.temperature}°C</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

const MusicCard = () => {
    return (
        <Card className="hidden flex-1 sm:block">
            <CardHeader>
                <p className="type-large mb-2 flex justify-center rounded-md px-2 py-2">
                    <Headphones className="mr-2 mb-1 inline-block" />
                    Favorite Song Right Now
                </p>
                <Image
                    src="/images/song-cover.jpg"
                    alt="Francesco Garel Profile Picture"
                    width={400}
                    height={400}
                    className="border-border mb-2 aspect-square w-full rounded-md border object-cover"
                />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div>
                    <p className="type-large">POWER SLAP</p>
                    <p className="text-foreground-secondary">Marracash</p>
                </div>
                <div className="bg-border h-[4px] w-full rounded-full">
                    <div className="bg-foreground h-[4px] w-8/10 rounded-full"></div>
                </div>
            </CardContent>
        </Card>
    );
};

const AvailabilityCard = () => {
    return (
        <Card className="">
            <CardContent className="flex items-center justify-between gap-2">
                <p className="flex gap-4">
                    <CircleSmall className="animate-pulse text-green-500" />
                    Available for hire
                </p>
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
            </CardContent>
        </Card>
    );
};

const AboutMeCard = () => {
    return (
        <Card className="flex flex-1 flex-col">
            <CardContent className="flex flex-1 flex-col">
                <Heading tag="h2" variant="h4" className="mb-4">
                    About Me
                </Heading>
                <p className="mb-4 max-w-prose">
                    In Italy, we obsess over details. We believe that
                    'structure' and 'beauty' are basically the same thing. You
                    can't have one without the other.
                    <br />
                    <br />I bring that same obsession to my code. I'm not
                    interested in shipping generic websites; I want to craft
                    experiences that actually feel special. I believe the best
                    products come from a clear, unified vision, not a committee.
                </p>
                <div></div>
            </CardContent>
        </Card>
    );
};

export const AboutMe = ({ weatherData }: { weatherData: WeatherData }) => {
    return (
        <Section id="about-me">
            <FadeIn>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr]">
                    <div className="grid grid-cols-1 gap-4 md:grid-rows-[1fr_auto]">
                        <AboutMeCard />
                        <AvailabilityCard />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-rows-[auto_auto]">
                        <div className="hidden md:block">
                            <MusicCard />
                        </div>
                        <WeatherCard weatherData={weatherData} />
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
};
