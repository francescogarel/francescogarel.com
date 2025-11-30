'use client';

import React from 'react';
import Link from 'next/link';

import { useState } from 'react';

import Image from 'next/image';

import { Section } from '@/components/layout/Section';

import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/button';

import { Menu, X, ArrowRight } from 'lucide-react';

import Pfp from '@/../public/images/pfp-rounded.png';

type NavbarProps = {
    className?: string;
};

const items = [
    { label: 'Curated Work', href: '/#curated-work' },
    { label: 'Collaborate With Me', href: '/#contact-me' },
];

export const Navbar = ({ className }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header
            className={`bg-background border-border sticky top-0 z-50 flex h-20 w-full items-center border-b ${className}`}
        >
            <div className="mx-auto flex w-full max-w-[min(95%,_1200px)] items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image
                            src={Pfp}
                            alt="Francesco Garel Profile Picture"
                            width={50}
                            height={50}
                            className="border-border aspect-square w-12 rounded-full border object-cover"
                        />
                    </Link>
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="text-foreground -mt-1 -mb-2 font-serif text-xl font-[700]">
                            Francesco Garel
                        </h1>
                        <p className="text-muted-foreground -mb-1 text-sm">
                            Full-Stack Developer, Web designer
                        </p>
                    </div>
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-6">
                        {items.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>
                                    <Button variant="link">{item.label}</Button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {!isMenuOpen && (
                    <Button
                        onClick={() => {
                            setIsMenuOpen(true);
                        }}
                        variant="ghost"
                        className="block lg:hidden"
                    >
                        <Menu />
                    </Button>
                )}
                {isMenuOpen && (
                    <nav className="bg-sidebar/55 border-sidebar-border absolute top-0 right-0 z-50 block flex h-screen w-8/10 flex-col border-l p-8 backdrop-blur-md lg:hidden">
                        <Button
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                            variant="ghost"
                            className="w-fit"
                        >
                            <X />
                        </Button>
                        <ul className="flex flex-col gap-3 p-6">
                            {items.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href}>
                                        <Button variant="link">
                                            {item.label}
                                        </Button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};
