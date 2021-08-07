import React from 'react'
import { Form } from './Form';
// Material-ui
import useStyles from './styles';

export const Auth = () => {
  // styles
  const classes = useStyles()
  return (
    <div className="mt-5">
      <h3 style={{ marginLeft: 20 }} data-testid="info-title">
        Welcome to our page, please login to continue
      </h3>
      <hr />
      <div className={classes.container}>
        <div className={classes.contentForm}>
          <Form />
        </div>
      </div>
    </div>
  )
}
