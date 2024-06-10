import type { Metadata } from "next";

import { Car } from "@/types";
import { apiUrl } from "@/utils/globalVariables";

//import "@/styles/globals/_typography.scss"; //import separately in "layout.tsx";
import "./globals.scss";
import "../styles/index.scss";

//import { getCars } from "@/lib/actions/cars.actions";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { Header, Footer } from "@/components";

export const metadata: Metadata = {
    title: "RE Autos",
    description: "Autos usados, o seminuevos a los mejores precios",
};

async function getCars() {
    try {
        if(!apiUrl) return undefined;

        const data: {cars: Car[]} = await fetch(apiUrl).then(res => res.json());
    
        return data;
    } catch (error) {
        return undefined;
    }
} 

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
