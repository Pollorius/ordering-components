import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Ordering } from './ordering-api-sdk.min'

import { Home } from './views/Home/index.js'
import { Login } from './views/Login/index.js'
import { Signup } from './views/Signup'

const ordering = new Ordering()

export default function App () {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/login'>
            <Login ordering={ordering} />
          </Route>
          <Route path='/signup'>
            <Signup ordering={ordering} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}