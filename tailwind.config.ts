import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nexus: {
          gold: "#C8A14B",
          dark: "#0B0B0B",
          light: "#F9F6EE"
        }
      }
    }
  },
  plugins: []
}
export default config
