// Color palette configuration
export const theme = {
  colors: {
    primary: {
      50: '#f9f6f2',
      100: '#f1ebe0',
      200: '#e6d8c2',
      300: '#d9c5a3',
      400: '#ccb285',
      500: '#bfa066', // Main beige
      600: '#a68b57',
      700: '#8c7548',
      800: '#725e3a',
      900: '#594b2e',
    },
    secondary: {
      50: '#f6f3f0',
      100: '#e8e0d5',
      200: '#d5c3ad',
      300: '#c2a686',
      400: '#b08a63',
      500: '#9d6e40', // Main brown
      600: '#885b34',
      700: '#734a29',
      800: '#5e3a1f',
      900: '#492c16',
    },
    accent: {
      50: '#f0f4fa',
      100: '#d9e2f0',
      200: '#b3c5e0',
      300: '#8ea9d1',
      400: '#678cc1',
      500: '#426fb2',
      600: '#355a8e',
      700: '#29456b',
      800: '#1c3047',
      900: '#0f1b24',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  space: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '1rem',
    full: '9999px',
  },
};

export default theme;