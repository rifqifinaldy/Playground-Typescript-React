import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
        main: '#20283e',
      },
      secondary: {
        main: '#fefefe',
      },
      error: {
        main: '#ac3e31',
      },
      warning: {
        main: '#dbae58',
      },
      info: {
        main: '#2196f3',
      },
      success: {
        main: '#488a99',
      },
      background : {
        default: '#dadada',
        paper: '#f1f1f1'
      },
      text: {
        primary: 'rgba(19, 19, 19, 1)',
        secondary : 'rgba(24,23,23,0.87)',
        disabled: 'rgba(24,23,23,0.87)'
      },
  },
});

export default theme;
