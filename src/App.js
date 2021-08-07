import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute';
// Hooks
import { Admin } from './Admin';
import { Auth } from './Components/Auth';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route type="public" exact path="/" component={Auth} />
        <PrivateRoute type="private" exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  )
}

export default App
