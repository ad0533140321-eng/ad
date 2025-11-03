import Link from 'next/link'
import { ArrowRight, ShieldCheck, BadgeDollarSign, Globe2 } from 'lucide-react'

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="card">
        <h1 className="text-3xl md:text-4xl font-semibold">The global nexus for <span className="text-nexus-gold">gold</span>.</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Buy & sell bars and coins, recycle old gold, and access logistics, insurance and certified testing — all in one place.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/trade" className="btn btn-primary">Start Trading <ArrowRight className="ml-2 h-4 w-4" /></Link>
          <Link href="/pricing" className="btn">Live Pricing</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Globe2, title: 'Global Reach', text: 'Best-in-class international rates for shipping & insurance.' },
          { icon: BadgeDollarSign, title: 'Competitive Pricing', text: 'Transparent spreads on bars, coins, and recycling.' },
          { icon: ShieldCheck, title: 'Secure & Compliant', text: 'KYC-ready onboarding and auditable workflows.' }
        ].map((f, i) => (
          <div key={i} className="card">
            <div className="flex items-center gap-3">
              <f.icon className="h-5 w-5 text-nexus-gold" />
              <h3 className="font-medium">{f.title}</h3>
            </div>
            <p className="mt-2 text-sm text-white/80">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
