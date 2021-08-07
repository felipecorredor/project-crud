import React from 'react'
// React-Hook-Form
import { useForm } from "react-hook-form";
// ROUTES
import { useHistory } from "react-router-dom";
// CUSTOM HOOKS
import { LoginHook } from '../../CutomHooks/LoginHook'
// WIDGETS
import { Error } from '../../Widgets/Error';
import { Loading } from '../../Widgets/Loading';
// Material-ui
import useStyles from './styles';
import { Button } from '@material-ui/core';

export const Form = () => {
  let history = useHistory();
  // React Hook From
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Custom Hooks
  const { loginUSer, loading, error } = LoginHook(history)
  // styles
  const classes = useStyles()

  const onSubmit = data => {
    // history.push('/admin')
    loginUSer(data)
  }

  // Loaders and Errors
  if (loading) return <Loading />
  if (error) return <Error error={error.message}/>

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <input {...register("cellphone", { required: true })}
        className={classes.input}
        placeholder="Your cellphone" />
      {errors.cellphone && <span>This field is required</span>}

      <input {...register("password", { required: true })}
        className={classes.input}
        type="password"
        placeholder="Your Password" />
      {errors.password && <span>This field is required</span>}

      <div className={classes.contentButton}>
        <Button type="submit" variant="outlined" color="primary">
          Login
        </Button>
      </div>
    </form>
  )
}
