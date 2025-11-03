export default function Pricing() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Live Pricing</h1>
      <div className="card">
        <p className="text-sm text-white/80">
          This is a placeholder for live metal pricing. Connect your external API (e.g., metals provider) via server route or edge function and render quotes here.
        </p>
        <pre className="mt-4 bg-black/50 p-4 rounded-xl text-xs overflow-x-auto">
GET /api/quotes
&gt; {`{ goldSpotUSD: 0, silverSpotUSD: 0 }`}
        </pre>
      </div>
    </section>
  )
}
