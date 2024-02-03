// tailwind.config.js
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const theme = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent:'#B809C3',
      },
      backgroundImage: {
        site:
        about:  
        services:
      }
    }
  },
  plugins: [],

/*   extend: {
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
  }, */
}

