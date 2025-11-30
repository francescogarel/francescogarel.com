'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import { WeatherData } from '@/lib/types';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';

import { FadeIn } from '@/components/animations/FadeIn';

import { BrandLogos } from '@/components/ui/brandLogos';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Sun,
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
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-secondary col-span-2 flex h-32 items-center justify-center gap-2 rounded-xl p-4">
                        {timeNow
                            ?.toISOString()
                            .split('T')[1]
                            .slice(0, 5)
                            .split('')
                            .map((char: string, index: number) => (
                                <span
                                    key={index}
                                    className={`font-mono text-5xl ${index !== 2 ? `bg-muted max-w-16 flex-1 rounded-md py-3 text-center` : `animate-blink`}`}
                                >
                                    {char}
                                </span>
                            ))}
                    </div>

                    <div className="bg-secondary col-span-1 flex h-32 flex-col items-center justify-center rounded-xl p-4">
                        <p className="font-mono text-3xl">
                            {weatherData.temperature}°C
                        </p>
                    </div>

                    <div className="bg-secondary col-span-1 flex h-32 flex-col items-center justify-center gap-0 rounded-xl p-4">
                        <img
                            src={`https:${weatherData.condition.icon}`}
                            alt={weatherData.condition.text}
                            width={64}
                            height={64}
                            className="inline-block"
                        />
                        <p className="text-muted-foreground">
                            {weatherData.condition.text}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

const LocationCard = () => {
    const [isLocationVisible, setIsLocationVisible] = useState(false);
    return (
        <Card className="flex-1">
            <CardContent className="flex flex-1 items-center justify-between font-mono">
                <div className="flex flex-1 items-center">
                    <Map className="mr-4 mb-1 inline-block" />
                    <p className="text-foreground-secondary bg-secondary flex w-full items-center justify-between rounded-md px-3 py-1">
                        {isLocationVisible
                            ? 'Milan, Italy'
                            : '45°28´N 009°12´E'}
                        <Button
                            variant="ghost"
                            onClick={() =>
                                setIsLocationVisible(!isLocationVisible)
                            }
                        >
                            {isLocationVisible ? (
                                <EyeOff className="inline-block" />
                            ) : (
                                <Eye className="inline-block" />
                            )}
                        </Button>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

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
            <CardContent className="flex gap-2 lg:flex-col">
                <div className="bg-secondary flex flex-1 gap-4 rounded-md p-4">
                    <CircleSmall className="animate-pulse text-green-500" />
                    Available for hire
                </div>
                <div className="bg-secondary flex flex-1 gap-4 rounded-md p-4">
                    <BookOpen className="inline-block" />
                    <p>Learning About Blockchains</p>
                </div>
            </CardContent>
        </Card>
    );
};

const AboutMeCard = () => {
    return (
        <Card className="flex flex-1 flex-col">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-6">
                <p className="max-w-prose">
                    In Italy, we obsess over details. We believe that
                    'structure' and 'beauty' are basically the same thing. You
                    can't have one without the other.
                    <br />
                    <br />I bring that same obsession to my code. I'm not
                    interested in shipping generic websites; I want to craft
                    experiences that actually feel special. I believe the best
                    products come from a clear, unified vision, not a committee.
                </p>
                <div>
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
            </CardContent>
        </Card>
    );
};

export const AboutMe = ({ weatherData }: { weatherData: WeatherData }) => {
    return (
        <Section id="about-me">
            <FadeIn>
                <div className="flex flex-col gap-3 lg:flex-row">
                    <div className="flex flex-1 flex-col gap-3">
                        <AboutMeCard />
                        <AvailabilityCard />
                    </div>
                    <div className="flex flex-[1.7] flex-col gap-3 sm:flex-row">
                        <MusicCard />
                        <div className="flex flex-[1.1] flex-col gap-3">
                            <LocationCard />
                            <WeatherCard weatherData={weatherData} />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
};
