import { NextjsIconDark } from '@/components/ui/svgs/nextjsIconDark';
import { ReactDark } from '@/components/ui/svgs/reactDark';
import { Tailwindcss } from '@/components/ui/svgs/tailwindcss';
import { ShadcnUi } from '@/components/ui/svgs/shadcnUi';
import { Postgresql } from '@/components/ui/svgs/postgresql';
import { Typescript } from '@/components/ui/svgs/typescript';
import { Figma } from '@/components/ui/svgs/figma';
import { Git } from '@/components/ui/svgs/git';
import { VercelDark } from '@/components/ui/svgs/vercelDark';
import { GithubDark } from '@/components/ui/svgs/githubDark';
import { Linkedin } from '@/components/ui/svgs/linkedin';
import { X } from '@/components/ui/svgs/x';

import { cn } from '@/lib/utils';

type brandLogoProps = {
    className?: string;
    props?: React.SVGProps<SVGSVGElement>;
};

export const BrandLogos = {
    Typescript: (props: brandLogoProps) => (
        <Typescript {...props.props} className={props.className} />
    ),
    Postgresql: (props: brandLogoProps) => (
        <Postgresql {...props.props} className={props.className} />
    ),
    Git: (props: brandLogoProps) => (
        <Git {...props.props} className={props.className} />
    ),
    React: (props: brandLogoProps) => (
        <ReactDark {...props.props} className={props.className} />
    ),
    Tailwindcss: (props: brandLogoProps) => (
        <Tailwindcss {...props.props} className={props.className} />
    ),
    Shadcnui: (props: brandLogoProps) => (
        <ShadcnUi
            {...props.props}
            className={cn(`text-foreground`, props.className)}
        />
    ),
    Nextjs: (props: brandLogoProps) => (
        <NextjsIconDark {...props.props} className={props.className} />
    ),
    Vercel: (props: brandLogoProps) => (
        <VercelDark
            {...props.props}
            className={cn(`text-foreground`, props.className)}
        />
    ),
    Figma: (props: brandLogoProps) => (
        <Figma {...props.props} className={props.className} />
    ),
    Github: (props: brandLogoProps) => (
        <GithubDark
            {...props.props}
            className={cn(`text-foreground`, props.className)}
        />
    ),
    Linkedin: (props: brandLogoProps) => (
        <Linkedin {...props.props} className={props.className} />
    ),
    X: (props: brandLogoProps) => (
        <X
            {...props.props}
            className={cn(`text-foreground`, props.className)}
        />
    ),
};

export const BrandLogoNames = Object.keys(BrandLogos);
