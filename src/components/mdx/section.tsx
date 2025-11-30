import { Separator } from '@/components/ui/separator';

export const Section = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <section className="py-16">{children}</section>
            <Separator />
        </>
    );
};
