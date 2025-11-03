import { NextResponse } from 'next/server'

export async function GET() {
  // TODO: Replace with real provider call. You can use environment variables.
  // Example: const resp = await fetch(process.env.METALS_API_URL!, { headers: { 'X-API-Key': process.env.METALS_API_KEY! }})
  const data = { goldSpotUSD: 0, silverSpotUSD: 0 }
  return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } })
}
