'use client';

import { motion } from 'framer-motion';

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    trigger?: 'load' | 'scroll';
};

export const FadeIn = ({
    children,
    delay = 0,
    className = '',
    trigger = 'scroll',
}: FadeInProps) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(10px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate={trigger === 'load' ? 'visible' : undefined}
            whileInView={trigger === 'scroll' ? 'visible' : undefined}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
