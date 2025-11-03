export default function Services() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: 'Logistics & Shipping', text: 'Global insured shipping with partner carriers.' },
          { title: 'Insurance', text: 'Coverage for transit and vaulted storage.' },
          { title: 'Metals Testing', text: 'Assay & verification services via certified labs.' },
          { title: 'Recycling', text: 'Competitive rates for refining scrap gold.' }
        ].map((s, i) => (
          <div key={i} className="card">
            <h3 className="font-medium">{s.title}</h3>
            <p className="text-sm text-white/80 mt-2">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
