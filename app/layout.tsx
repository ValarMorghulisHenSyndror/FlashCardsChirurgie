import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "FlashCards Chirurgie",
    description: "Studying Dental Surgery",
    icons: [
        {
            url: "/logo.png",
            href: "/logo.png",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
