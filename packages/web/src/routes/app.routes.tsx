import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Attendance } from '../pages/Attendance';
import { Campaigns } from '../pages/Campaigns';
import { Dashboard } from '../pages/Dashboard';
import { Stocks } from '../pages/Stocks';
import { Units } from '../pages/Units';
import { Users } from '../pages/Users';

export const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/campaigns" exact component={Campaigns} />
      <Route path="/units" exact component={Units} />
      <Route path="/users" exact component={Users} />
      <Route path="/stocks" exact component={Stocks} />
      <Route path="/attendance" exact component={Attendance} />
    </Switch>
  </Layout>
);
