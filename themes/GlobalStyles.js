import { createStyles, makeStyles } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() =>

  createStyles(
    {
    
    '@global': {
      
      '*, *::before, *::after': {
        padding:'0',
        margin:'0',
        boxSizing: 'border-box',
        transition:'all .5s linear'
      }
      /*,'@media screen and (min-width: 560px)':{
        '*, *::before, *::after': {
          backgroundColor:'red'
        }
      }*/

      
    }
  })
);
const GlobalStyles = () => {
  const theme = useTheme().palette
console.log(theme)

  useStyles();

  return null;
};

export default GlobalStyles;