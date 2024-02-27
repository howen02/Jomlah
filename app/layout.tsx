import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: "Jomlah",
    description: "Car Rental at the Push of a Button",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
