/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
      transformStyle: ['hover', 'group-hover'],
      perspective: ['hover', 'group-hover'],
      rotate: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
    },
  },
  variants: {
    extend: {
      transform: ['group-hover'],
      translate: ['group-hover'],
      rotate: ['group-hover'],
    },
  },
  plugins: [],
}

