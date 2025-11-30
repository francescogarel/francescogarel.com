import React from 'react';

export interface ProjectMeta {
    slug: string;
    title: string;
    description: string;
    year: number;
    role: string;
    type: string;
    technologies: string[];
    cover: string;
    url?: {
        repo?: string;
        demo?: string;
    };
}

export interface CaseStudy extends ProjectMeta {
    content: string;
}

export interface WeatherData {
    temperature: number;
    condition: { text: string; icon: string };
}
