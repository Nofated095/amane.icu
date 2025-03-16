import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';

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
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              @font-face{font-family:'Fira Mono';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgK_7Ss9XZYalI.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgIv7Ss9XZYalI.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgKv7Ss9XZYalI.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJf7Ss9XZYalI.woff2) format('woff2');unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgKP7Ss9XZYalI.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJv7Ss9XZYQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDto1d3Hk_fUS5NBBASF.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDto1d3HmvfUS5NBBASF.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDto1d3HkvfUS5NBBASF.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDto1d3HnffUS5NBBASF.woff2) format('woff2');unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDto1d3HkPfUS5NBBASF.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDto1d3HnvfUS5NBBA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDtondvHk_fUS5NBBASF.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDtondvHmvfUS5NBBASF.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDtondvHkvfUS5NBBASF.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDtondvHnffUS5NBBASF.woff2) format('woff2');unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDtondvHkPfUS5NBBASF.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Mono';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/firamono/v14/N0bS2SlFPv1weGeLZDtondvHnvfUS5NBBA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Red Hat Display';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/redhatdisplay/v20/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbsWRQkEz_lWZk33BGmGH.woff) format('woff');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Red Hat Display';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/redhatdisplay/v20/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbsWRQk8z_lWZk33BGg.woff) format('woff');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
            `,
          },
        },
      }),
    [prefersDarkMode],
  );
  return theme;
};

export default AutoTheme;