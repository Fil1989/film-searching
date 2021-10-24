import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Registration from './Registration.jsx'
import { useSelector } from 'react-redux'

import HomePage from './HomePage'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import WrongWay from './WrongWay'

function Routs() {
  const afterLogin = useSelector(state => state.token)
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/registration" exact component={Registration} />
      {/* {afterLogin ? (
        <Redirect to="/browse" component={Browse} />
      ) : (
        <Route path="/login" exact component={Login} />
      )} */}
      <Route path="/login" exact component={Login}>
        {afterLogin && <Redirect to="/browse" />}
      </Route>
      <Route path="/browse" component={Browse} />
      <Route component={WrongWay} />
    </Switch>
  )
}

export default Routs
