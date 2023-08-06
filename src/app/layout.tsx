import './globals.scss';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MateriProvider from "@/data/MateriProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pelatihan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MateriProvider>{children}</MateriProvider>
      </body>
    </html>
  )
}
