import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

interface PageLayoutProps {
    readonly id: string;
    readonly title: string;
    readonly children: ReactNode;
}

function PageLayout({ id, title, children }: PageLayoutProps) {
    return (
        <Box sx={{ mt: 5 }}>
            <section id={id}>
                <h1>{title}</h1>
                <div>{children}</div>
            </section>
        </Box>
    );
}

export default PageLayout;
