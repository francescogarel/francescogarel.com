import { Info as InfoIcon } from 'lucide-react';

export const Note = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="mb-6 flex gap-4 rounded-md border p-4">
            <InfoIcon className="text-muted-foreground mt-2 h-4" />
            <span className="type-small text-muted-foreground h-fit">
                {children}
            </span>
        </div>
    );
};
