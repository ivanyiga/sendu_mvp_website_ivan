const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",

  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "24px",
        lg: "48px",
      },
      screens: {
        xl: "1120px",
      },
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    spacing: {
      "0": "0px",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "6": "24px",
      "8": "32px",
      "12": "48px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-data)", "monospace"],
      },
      fontSize: {
        "heading-xl": ["var(--font-heading-xl)", { fontWeight: "700", lineHeight: "var(--leading-heading)" }],
        "heading-lg": ["var(--font-heading-lg)", { fontWeight: "700", lineHeight: "var(--leading-heading)" }],
        "heading-md": ["var(--font-heading-md)", { fontWeight: "600", lineHeight: "var(--leading-heading)" }],
        "body-lg": ["var(--font-size-body-lg)", { fontWeight: "400", lineHeight: "var(--leading-body)" }],
        "body-sm": ["var(--font-size-body-sm)", { fontWeight: "400", lineHeight: "var(--leading-body)" }],
        "label": ["var(--font-label)", { fontWeight: "600", lineHeight: "var(--leading-body)" }],
        "data-lg": ["var(--font-data-lg)", { fontWeight: "600", lineHeight: "var(--leading-data)" }],
        "data-md": ["var(--font-data-md)", { fontWeight: "400", lineHeight: "var(--leading-data)" }],
        "data-sm": ["var(--font-data-sm)", { fontWeight: "400", lineHeight: "var(--leading-data)" }],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Brand Colors
        "green-vivid": "var(--green-vivid)",
        "green-soft": "var(--green-soft)",
        "blue-deep": "var(--blue-deep)",
        "blue-dark": "var(--blue-dark)",
        "blue-mid": "var(--blue-mid)",
        "blue-bright": "var(--blue-bright)",

        // Secondary Palette
        "teal": "var(--teal)",
        "green-solid": "var(--green-solid)",
        "purple": "var(--purple)",
        "orange": "var(--orange)",
        "red-orange": "var(--red-orange)",

        // Product Colors
        "pay": "var(--product-pay)",
        "circle": "var(--product-circle)",
        "till": "var(--product-till)",
        "float": "var(--product-float)",
        "rating": "var(--product-rating)",

        // Neutrals
        "white": "var(--white)",
        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        "level-0": "var(--shadow-0)",
        "level-1": "var(--shadow-1)",
        "level-2": "var(--shadow-2)",
        "level-3": "var(--shadow-3)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
