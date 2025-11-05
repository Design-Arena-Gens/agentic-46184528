import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'IRIS ? Incident Response Assessment',
  description: 'AI-powered incident response playbook assessment platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="container-grid">
          <Sidebar />
          <main className="p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
