import Image from 'next/image';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { Hero } from '@/components/sections/Hero';
import { CuratedWork } from '@/components/sections/CuratedWork';
import { Technologies } from '@/components/sections/Technologies';
import { AboutMe } from '@/components/sections/AboutMe';
import { ContactMe } from '@/components/sections/ContactMe';

import { Separator } from '@/components/ui/separator';

import { fetchWeather } from '@/lib/weather';

export default async function Home() {
    const weather = await fetchWeather();
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <CuratedWork />
                <Separator />
                <Technologies />
                <Separator />
                <AboutMe weatherData={weather} />
                <Separator />
                <ContactMe />
            </main>

            <Footer />
        </>
    );
}
