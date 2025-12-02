import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const normalizeKey = (str: string): string => {
    // 1. Remove everything that is NOT a letter
    const cleaned = str.replace(/[^a-zA-Z]/g, '');

    // 2. Handle empty strings to prevent crashes
    if (!cleaned) return '';

    // 3. Capitalize first letter + lowercase the rest
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
};

export const toSlug = (str: string): string => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
};

export async function copyToClipboard(text: string): Promise<void> {
    try {
        // Primary modern approach
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy!', err);
    }
}
