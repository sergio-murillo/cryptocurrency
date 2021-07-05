import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getPath } from './constants/router-paths';
import MainLayout from './layouts/Main';
import CoinContainer from './containers/CoinContainer';
import DetailContainer from './containers/DetailContainer';

const Routes: React.FC = () => (
  <Switch>
    <RouteWrapper
      exact
      component={CoinContainer}
      layout={MainLayout}
      path={getPath('home')}
    />
    <RouteWrapper
      exact
      component={DetailContainer}
      layout={MainLayout}
      path={getPath('detail', ':coinId')}
    />
    <Route render={() => <div>Page not found!</div>} />
  </Switch>
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
