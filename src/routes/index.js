import React from 'react';
import { Dashboard, StoryEditor, Login, Profile, StoryContent, Register } from '../modules/App';
import { Route, Switch } from 'react-router-dom';

export const routes = (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/story' component={StoryContent}/>
    <Route path='/editor' component={StoryEditor}/>
    <Route path='/login' component={Login}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/register' component={Register}/>
    <Route path='/home/:tabIndex' component={Dashboard}/>
  </Switch>
);
