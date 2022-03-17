import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
      fontFamily: 'Inter, sans-serif'
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#111111',
        },
        background: {
            paper: '#111111',
            default: '#000000',
        },
        text: {
            primary: '#f0f0f0',
            secondary: '#C4C4C4',
            tertiary: '#6CACE4',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    boxShadow: 'none'
                },
            },
        },
        MuiCard: {
          variants: [
              {
                  props: {variant: 'CardProject'},
                  style: {
                      background: 'none',
                  },
              },
          ],
        },
        MuiCardContent: {
          styleOverrides: {
              root: {
                  padding: '16px 0 16px 0',
              },
          },
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '8px 0 8px 0',
                },
            },
        },
        MuiButton: {
          variants: [
              {
                  props: {variant: 'gradientOne'},
                  style: {
                      border: '1px solid',
                      borderImageSlice: '1',
                      borderWidth: '2px',
                      color: '#f0f0f0',
                      width: '200px',
                      height: '55px',
                      borderImageSource: `linear-gradient(90deg, rgba(210,64,116,1) 0%, rgba(101,24,180,1) 100%)`,
                  },
              },
              {
                  props: {variant: 'gradientTwo'},
                  style: {
                      border: '1px solid',
                      borderImageSlice: '1',
                      borderWidth: '2px',
                      color: '#f0f0f0',
                      width: '200px',
                      height: '55px',
                      borderImageSource: `linear-gradient(90deg, rgba(244,66,108,1) 0%, rgba(251,242,177,1) 100%)`,
                  },
              },
              {
                  props: {variant: 'gradientThree'},
                  style: {
                      border: '1px solid',
                      borderImageSlice: '1',
                      borderWidth: '2px',
                      color: '#f0f0f0',
                      width: '200px',
                      height: '55px',
                      borderImageSource: `linear-gradient(90deg, rgba(105,100,222,1) 0%, rgba(252,166,233,1) 100%)`,
                  },
              },
              {
                  props: {variant: 'gradientFour'},
                  style: {
                      border: '1px solid',
                      borderImageSlice: '1',
                      borderWidth: '2px',
                      color: '#f0f0f0',
                      width: '155px',
                      height: '55px',
                      borderImageSource: `linear-gradient(51.06deg, #9358F7 0.87%, #9259F7 7.31%, #8E5DF6 13.75%, #8862F5 20.19%, #806BF4 26.63%, #7575F2 33.07%, #6882F0 39.51%, #5990EE 45.95%, #4A9FEB 52.39%, #3BADE9 58.84%, #2EBAE7 65.28%, #23C4E5 71.72%, #1BCDE4 78.16%, #15D2E3 84.6%, #11D6E2 91.04%, #10D7E2 97.48%)`,
                  },
              },
          ],
        },
    },
});
