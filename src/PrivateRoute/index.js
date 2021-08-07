import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component }) => {
  const token = sessionStorage.getItem('token')

  return (
    <Route
      render={() =>
        token ?
          <Component />
          :
          <Redirect to="/" />
      }
    />
  )
}
