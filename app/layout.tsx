import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "V0 Gyorstalpaló 2.0: Tippek és trükkök az AI Prototípus-készítéshez",
  description:
    "Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a winmix.hu használatával. Interaktív útmutató dizájnereknek, fejlesztőknek és termékmenedzsereknek.",
  openGraph: {
    title: "Winmix Gyorstalpaló 2.0: Tippek és trükkök az AI Prototípus-készítéshez",
    description:
      "Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a winmix.hu használatával. Interaktív útmutató dizájnereknek, fejlesztőknek és termékmenedzsereknek.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'