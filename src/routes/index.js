import React from 'react';
import { Dashboard, StoryEditor } from '../modules/App';
import { Route, Switch } from 'react-router-dom';

export const routes = (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/editor' component={StoryEditor}/>
  </Switch>
);
