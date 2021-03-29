import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  
  palette: {
    // background: {
    //   default: '#C0C0C0',
    // },
  },
  overrides: {
    MuiButton: {
      text: {
        background: 'linear-gradient(45deg, #969696 30%, #4d4d4d 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 24,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(28, 28, 28, .3)',
        whiteSpace: "nowrap",
        maxWidth: "100%",
      },
    },
  },
});
