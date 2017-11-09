import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import HomePageContainer from '../pages/homePage/HomePageContainer'
import ReposContainer from '../pages/reposPage/ReposContainer'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={HomePageContainer} exact />
      <Route path='/repos' component={ReposContainer} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;