import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider } from '@material-ui/core';
import megaReducer from './redux/reducerConfig';
import Routes from './routes';
import materialTheme from './materialTheme';
import './shared.scss';

const store = createStore(megaReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={materialTheme}>
          <Switch>
            <Routes />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
