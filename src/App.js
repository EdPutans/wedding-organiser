import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import megaReducer from './redux/reducerConfig';
import Routes from './routes';

const store = createStore(megaReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
