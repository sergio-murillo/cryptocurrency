import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import '../assets/sass/main.sass';
import Routes from '../routes';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Global, ThemeProvider } from '@emotion/react';
import customTheme from '../themes/default';
import { globalStyles } from 'src/styles/commons';

interface MainProps {
  store: Store<any>;
  history: History;
}

const Root: React.FC<MainProps> = ({ store, history }) => (
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <Global
        styles={globalStyles}
      />
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default Root;
