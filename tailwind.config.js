/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fundi: {
          dark: "#121212",
          slate: "#1e293b",
          rust: "#c2410c", // The "Craftsman" orange
          lime: "#bef264", // The "Tech" green
          amber: "#f59e0b",
          concrete: "#94a3b8",
        },
      },
      fontFamily: {
        mono: ["var(--font-space-mono)"],
        serif: ["var(--font-lora)"],
      },
      backgroundImage: {
        grain:
          'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E\')',
      },
    },
  },
  plugins: [],
};
