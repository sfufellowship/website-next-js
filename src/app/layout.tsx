import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Providers from "@/src/components/common/Providers";
import Layout from "@/src/components/layout/Layout";
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
        <html lang="zh">
            <body className={openSans.className}>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
