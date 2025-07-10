import { createTheme } from '@mui/material/styles';

const typographySettings = {
    fontFamily: '"Roboto", sans-serif',

    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem' },
    h4: { fontSize: '1.5rem' },
    h5: { fontSize: '1.25rem' },
    h6: { fontSize: '1rem' },

    subtitle1: { fontSize: '0.9rem' },
    subtitle2: { fontSize: '0.8rem' },

    body1: { fontSize: '1rem' }, // default for normal text
    body2: { fontSize: '0.875rem' },

    button: { textTransform: 'none', fontWeight: 500 },
  };

export const lightTheme = createTheme({
  typography: typographySettings,
  palette: {
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  typography: typographySettings,
  palette: {
    mode: 'dark',
  },
});
