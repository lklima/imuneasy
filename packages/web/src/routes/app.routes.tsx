import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Dashboard } from '../pages/Dashboard';

export const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  </Layout>
);
