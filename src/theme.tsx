import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';

import '@fontsource/red-hat-display/900.css';
import '@fontsource/fira-mono/700.css';
import '@fontsource/fira-mono/400.css';

function AutoTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: [
            'Fira Mono',
            '--apple-system',
            'Segoe UI',
            'Roboto',
            'Arial',
            'sans-serif',
          ].join(','),
        },
      }),
    [prefersDarkMode],
  );
  return theme;
};

export default AutoTheme;