import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Astral Ascendency",
  description: "4x space strategy game",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col  bg-gray-900 text-white font-sans">
            <header className="p-4 bg-gray-900/10 backdrop-blur-md sticky top-0 z-50">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold flex items-center">
                  <Star className="mr-2 text-green-500" />
                  <span className="text-white">Astral Ascendency</span>
                </Link>
                <nav className="hidden md:flex space-x-6">
                  <HeaderAuth />
                  {/* <ThemeSwitcher /> */}
                </nav>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </header>
            {children}

            <footer className="bg-gray-900 text-gray-300 py-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <Link
                      href="/"
                      className="text-2xl font-bold flex items-center"
                    >
                      <Star className="mr-2 text-green-500" />
                      <span className="text-white">Astral Ascendency</span>
                    </Link>
                  </div>
                  <nav className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
                <div className="mt-8 text-center text-sm">
                  © {new Date().getFullYear()} Stellar Ascendency. All rights
                  reserved.
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
