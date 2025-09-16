import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", /* 9px */
        md: ".375rem", /* 6px */
        sm: ".1875rem", /* 3px */
      },
      colors: {
        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        // Qolour Brand Colors
        qolour: {
          "electric-indigo": "hsl(var(--qolour-electric-indigo) / <alpha-value>)",
          "ion-green": "hsl(var(--qolour-ion-green) / <alpha-value>)",
          "rich-black": "hsl(var(--qolour-rich-black) / <alpha-value>)",
          "sky-blue": "hsl(var(--qolour-sky-blue) / <alpha-value>)",
          "quantum-pink": "hsl(var(--qolour-quantum-pink) / <alpha-value>)",
          "helio-yellow": "hsl(var(--qolour-helio-yellow) / <alpha-value>)",
          "salt-white": "hsl(var(--qolour-salt-white) / <alpha-value>)",
          "ember-orange": "hsl(var(--qolour-ember-orange) / <alpha-value>)",
        },
        quantum: {
          primary: "hsl(var(--quantum-primary) / <alpha-value>)",
          secondary: "hsl(var(--quantum-secondary) / <alpha-value>)",
          success: "hsl(var(--quantum-success) / <alpha-value>)",
          warning: "hsl(var(--quantum-warning) / <alpha-value>)",
          error: "hsl(var(--quantum-error) / <alpha-value>)",
          neutral: "hsl(var(--quantum-neutral) / <alpha-value>)",
        },
        qubit: {
          active: "hsl(var(--qubit-active) / <alpha-value>)",
          superposition: "hsl(var(--qubit-superposition) / <alpha-value>)",
          entangled: "hsl(var(--qubit-entangled) / <alpha-value>)",
          measured: "hsl(var(--qubit-measured) / <alpha-value>)",
          idle: "hsl(var(--qubit-idle) / <alpha-value>)",
        },
        circuit: {
          line: "hsl(var(--circuit-line) / <alpha-value>)",
          gate: "hsl(var(--circuit-gate) / <alpha-value>)",
          measurement: "hsl(var(--circuit-measurement) / <alpha-value>)",
          connection: "hsl(var(--circuit-connection) / <alpha-value>)",
        },
        probability: {
          "0": "hsl(var(--probability-0) / <alpha-value>)",
          "1": "hsl(var(--probability-1) / <alpha-value>)",
        },
        fidelity: {
          high: "hsl(var(--fidelity-high) / <alpha-value>)",
          medium: "hsl(var(--fidelity-medium) / <alpha-value>)",
          low: "hsl(var(--fidelity-low) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ["Figtree", "var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        figtree: ["Figtree", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "quantum-pulse": "quantum-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "quantum-superposition": "quantum-superposition 1s ease-in-out infinite alternate",
        "quantum-entanglement": "quantum-entanglement 2s ease-in-out infinite",
        "data-flow": "data-flow 3s linear infinite",
      },
      spacing: {
        'q1': 'var(--space-1)',
        'q2': 'var(--space-2)', 
        'q3': 'var(--space-3)',
        'q4': 'var(--space-4)',
        'q5': 'var(--space-5)',
        'q6': 'var(--space-6)',
        'q7': 'var(--space-7)',
        'q8': 'var(--space-8)',
        'q9': 'var(--space-9)',
        'q10': 'var(--space-10)',
        'q11': 'var(--space-11)',
        'q12': 'var(--space-12)',
      },
      fontSize: {
        'xs': 'var(--text-xs)',
        'sm': 'var(--text-sm)',
        'base': 'var(--text-base)', 
        'lg': 'var(--text-lg)',
        'xl': 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
