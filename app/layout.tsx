import dynamic from 'next/dynamic';
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });


export const metadata: Metadata = {
    title: "FileFlex - Free Unlimited File Converter",
  description: `Unleash your creativity with Fileflex - the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: "SHANAWAZ",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="container max-w-4xl min-h-screen pt-32 lg:pt-36 2xl:pt-44 lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
