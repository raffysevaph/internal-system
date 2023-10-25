import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'main-color-1': '#595959',
        'main-color-2': '#FB7422',
        'hatchit-border': '#CCCCCC',
        'disabled-value': '#B5B5B5',
        'hatchit-blue': '#008EDE',
        'hatchit-green': '#00C04D',
        'hatchit-yellow': '#DEAD00',
        'hatchit-table-header-bg': '#E5E7EB',
        'hatchit-table-header-text-color': '#4B5563',
        'hatchit-table-body-border': '#E6E8EC',
        'hatchit-table-view-button': '#00CFC3',
        'hatchit-table-edit-button': '#DEAD00'
      }
    },
  },
  plugins: [],
}
export default config
