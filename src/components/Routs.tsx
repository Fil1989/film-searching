import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Registration from './Registration.jsx'
import HomePage from './HomePage'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import WrongWay from './WrongWay'

function Routs() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/login" exact component={Login} />
      <Route path="/browse" component={Browse} />
      <Route component={WrongWay} />
    </Switch>
  )
}

export default Routs
