import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Providers from "../components/Providers";
import Layout from "../components/Layout";
import "./globals.css";

const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "SFU Fellowship",
    description: "SFU Fellowship Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
