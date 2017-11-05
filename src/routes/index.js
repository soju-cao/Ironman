import React from 'react';
import { StoryEditor, StoryContent } from '../modules/App';
import { Login, Register, PersonalDetail, Setting, Profile } from '../modules/Profile';
import { Route, Switch } from 'react-router-dom';

export const routes = (
  <Switch>
    <Route exact path='/' component={StoryContent}/>
    <Route path='/story' component={StoryContent}/>
    <Route path='/editor' component={StoryEditor}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>

    <Route exact path='/profile/' component={Profile}/>
    <Route path='/profile/personaldetail' component={PersonalDetail}/>
    <Route path='/profile/setting' component={Setting}/>
  </Switch>
);

// exact（bool）：为 true 时, 只有当地址完全匹配 class 和 style 才会应用；
