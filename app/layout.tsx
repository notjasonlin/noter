import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConvexClientProvider } from '@/components/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noter',
  description: 'The workplace where your idea comes to life, and your ink flows',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.jpeg",
        href: "/favicon.jpeg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicondark.jpeg",
        href: "/favicondark.jpeg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey='noter-theme-2'
        >
          <Toaster position='bottom-center'/>
          {children}

          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
