import './globals.css'
import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ShoppingCart, Coins, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gold Nexus',
  description: 'Global gold trading & services — bars, coins, recycling, logistics, insurance, testing.',
  icons: [{ rel: 'icon', url: '/logo.svg' }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-white/10">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Gold Nexus" className="h-8 w-8" />
              <span className="font-semibold tracking-wide">Gold Nexus</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/pricing" className="hover:text-nexus-gold">Pricing</Link>
              <Link href="/trade" className="hover:text-nexus-gold">Trade</Link>
              <Link href="/services" className="hover:text-nexus-gold">Services</Link>
              <Link href="/contact" className="btn">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="mt-20 border-t border-white/10">
          <div className="container py-8 text-sm opacity-80">
            © {new Date().getFullYear()} Gold Nexus LLC · 16192 Coastal Hwy, Lewes, DE 19958 · File No. 10381659
          </div>
        </footer>
      </body>
    </html>
  )
}
