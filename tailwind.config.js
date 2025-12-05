/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        "cta-bg": "var(--color-cta-bg)",
        "cta-hover": "var(--color-cta-hover)",
        "surface-dark": "var(--color-surface-dark)",
        "surface-darker": "var(--color-surface-darker)",
        "surface-light": "var(--color-surface-light)",
        "surface-lighter": "var(--color-surface-lighter)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        "border-subtle": "var(--color-border-subtle)",
      },
      fontSize: {
        hero: ["56px", { lineHeight: "1.05", fontWeight: "700" }],
        section: ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "1.1", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        body: ["16px", { lineHeight: "1.6" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
      },
      boxShadow: {
        "card-hover": "0 20px 60px rgba(93, 46, 140, 0.3)",
      },
    }
  },
  plugins: []
};
