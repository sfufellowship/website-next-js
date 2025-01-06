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
    title: "SFU团契",
    description: "SFU团契面向加拿大西门菲莎大学(Simon Fraser University) (SFU)校园内來自中国的学生学者, 分享信仰，传播福音",
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
