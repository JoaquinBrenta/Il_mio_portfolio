import { Analytics } from '@vercel/analytics/next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { StyleProvider } from '@/context/styleContext' // ⚠️ Fai attenzione alla S minuscola o maiuscola nel percorso!
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${bricolage.variable} bg-background`}>
      <body className="font-sans antialiased px-2 py-2">
        {/* L'intero children deve stare DENTRO StyleProvider */}
        <StyleProvider>
          {children}
        </StyleProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}