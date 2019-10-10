import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors.scss';

export default createMuiTheme({
  typography: {
    fontSize: '1em',
  },
  palette: {
    primary: { main: colors.gold },
    secondary: { main: colors.lightGrey },
  },
});
