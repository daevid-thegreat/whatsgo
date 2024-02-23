import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      lexend: ['Lexend Deca', 'sans-serif'],
      jetbrains: ['JetBrains Mono', 'monospace'],
    },
    screens: {
                "2xl": "1400px",
                "3xl": "1600px",
                'xl': {'max': '1279px'},
                'lg': {'max': '1023px'},
                'md': {'max': '767px'},
                'sm': {'max': '639px'},
            },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
