export const PerformanceBlock = ({
    score,
    label,
}: {
    score: string;
    label: string;
}) => {
    return (
        <div className="bg-secondary mb-5 p-4">
            <p className="type-subsubheading mb-4 font-mono text-2xl">
                {score}
            </p>
            <p className="type-small text-muted-foreground text-end">{label}</p>
        </div>
    );
};

export const FontDisplayBlock = ({
    fontFamily,
    sampleText = 'The quick brown fox jumps over the lazy dog.',
}: {
    fontFamily: string;
    sampleText?: string;
}) => {
    return (
        <div className="bg-secondary mb-5 p-4">
            <p
                className="mb-4 font-serif text-2xl"
                style={{ fontFamily: fontFamily }}
            >
                {sampleText}
            </p>
            <p className="type-small text-muted-foreground text-end">
                {fontFamily}
            </p>
        </div>
    );
};
