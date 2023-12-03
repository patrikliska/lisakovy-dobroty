import { createTheme } from '@mui/material';

export const theme = createTheme({
  spacing: 4,
  palette: {
    background: { default: '#FBF7F3' },
    primary: {
      contrastText: '#DBA39A',
      main: '#F5EBE0',
      light: '#FBF7F3',
      dark: '#E9D2B9',
    },
    secondary: {
      contrastText: '#FEFCF3',
      main: '#DBA39A',
      light: '#E8C5C0',
      dark: '#CE8174',
    },
    text: {
      primary: '#FEFCF3',
      secondary: '#DBA39A',
    },
  },
});
