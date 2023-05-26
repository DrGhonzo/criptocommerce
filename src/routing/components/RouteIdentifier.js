import React, { memo, lazy, Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { DEFAULT_PATHS } from 'config.js';
import RouteItem from './RouteItem';

const ViewIndividual = lazy(() => import('views/pages/profile/ProfileStandard'));

const RouteIdentifier = ({ routes, fallback = <div className="loading" />, notFoundPath = DEFAULT_PATHS.NOTFOUND }) => (
  <Suspense fallback={fallback}>
    <Switch>
      {routes.map((route, rIndex) => (
        <RouteItem key={`r.${rIndex}`} {...route} />
      ))}

      <Route path="/profile/:id" component={ViewIndividual} />
      
      <Redirect to={notFoundPath} />
    </Switch>
  </Suspense>
);

export default memo(RouteIdentifier);
