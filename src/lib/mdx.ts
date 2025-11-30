import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { CaseStudy } from '@/lib/types';

import { toSlug } from '@/lib/utils';

const contentDirectory = path.join(process.cwd(), 'content/case-studies');
const coversDirectory = '/images/case-studies';

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy> {
    slug = toSlug(slug);
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);

    // 1. Read the file
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 2. Separate Frontmatter (meta) from Content
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug as string,
        title: data.title as string,
        description: data.description as string,
        year: data.year as number,
        role: data.role as string,
        type: data.type as string,
        technologies: data.technologies as string[],
        cover: `${coversDirectory}/${realSlug}.jpeg` as string,
        content: content as string,
        url: {
            repo: data.url?.repo as string | undefined,
            demo: data.url?.demo as string | undefined,
        },
    };
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
    const files = fs.readdirSync(contentDirectory);

    const CaseStudies = files.map((fileName) => {
        const { data } = matter(
            fs.readFileSync(path.join(contentDirectory, fileName), 'utf8')
        );
        const slug = fileName.replace(/\.mdx$/, '');
        return {
            slug,
            title: data.title as string,
            description: data.description as string,
            year: data.year as number,
            role: data.role as string,
            type: data.type as string,
            technologies: data.technologies as string[],
            cover: `${coversDirectory}/${slug}.jpeg` as string,
        } as unknown as CaseStudy;
    });

    return CaseStudies;
}
