export default function Trade() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Trade</h1>
      <div className="card">
        <p className="text-sm text-white/80">
          Trade dashboard skeleton. Add order forms for buying/selling bars & coins, and a P2P module for old-gold sellers.
        </p>
        <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
          <li>Buy/Sell market orders</li>
          <li>Customer KYC onboarding</li>
          <li>P2P listings & escrow flow</li>
        </ul>
      </div>
    </section>
  )
}
