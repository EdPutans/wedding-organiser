import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors.scss';

export default createMuiTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    primary: { main: colors.pink },
    secondary: { main: colors.grey },
  },
  overrides: {},
});
