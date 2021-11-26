import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Registration from './Registration'
import { useSelector } from 'react-redux'

import HomePage from './HomePage'
import Login from './Login'
import Browse from './Browse'
import WrongWay from './WrongWay'
import { IState } from '../redux/reduxInterfaces/reduxMain.interface'

function Routs() {
  const afterLogin = useSelector((state: IState) => state.token)
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/login" exact component={Login}>
        {afterLogin && <Redirect to="/browse" />}
      </Route>
      <Route path="/browse" component={Browse} />
      <Route component={WrongWay} />
    </Switch>
  )
}

export default Routs
