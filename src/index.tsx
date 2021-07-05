import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';
import { createBrowserHistory } from 'history';

const initialState: any = {};
const history = createBrowserHistory();

const store = configureStore(initialState, history);

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);
