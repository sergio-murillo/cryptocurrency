import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getPath } from './constants/router-paths';
import MainLayout from './layouts/Main';
import loadable from '@loadable/component';

const CoinContainerLoadable = loadable(() => import('./containers/CoinContainer'));
const DetailContainerLoadable = loadable(() => import('./containers/DetailContainer'));

const Routes: React.FC = () => (
  <React.StrictMode>
    <Switch>
      <RouteWrapper
        exact
        component={CoinContainerLoadable}
        layout={MainLayout}
        path={getPath('home')}
      />
      <RouteWrapper
        exact
        component={DetailContainerLoadable}
        layout={MainLayout}
        path={getPath('detail', ':coinId')}
      />
      <Route render={() => <div>Page not found!</div>} />
    </Switch>
  </React.StrictMode>
);

const RouteWrapper = ({
  component: Component, 
  layout: Layout, 
  ...rest
}) => {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
};

export default Routes;
