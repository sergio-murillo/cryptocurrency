import { FC } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import '../styles/sass/main.sass';
import Routes from '../routes';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Global, ThemeProvider } from '@emotion/react';
import customTheme from '../themes/default';
import { globalStyles } from 'src/styles/commons';
import { ApplicationState } from 'src/reducers';

/**
 * Properties to initialize application state
 */
interface MainProps {
  /**
   * Application store
   * @type {Store<ApplicationState>}
   */
  store: Store<ApplicationState>;
  /**
   * Location history
   * @type {History}
   */
  history: History;
}


/**
 * Main component
 */
const Root: FC<MainProps> = ({ store, history }) => (
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
