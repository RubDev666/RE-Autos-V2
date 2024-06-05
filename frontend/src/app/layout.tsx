import type { Metadata } from "next";

import "@/styles/globals/_typography.scss"; //import separately in "layout.tsx"
import "../styles/index.scss";

import { getCars } from "@/lib/actions/cars.actions";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { Header, Footer } from "@/components";

export const metadata: Metadata = {
    title: "RE Autos",
    description: "Autos usados, o seminuevos a los mejores precios",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const res = await getCars(); 

    return (
        <html lang="en">
            <body>
                <Header data={res} />

                {children}

                <Footer />
            </body>
        </html>
    );
}
