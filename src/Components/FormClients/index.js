import React, { useRef } from 'react'
// react-hook-form
import { useForm } from "react-hook-form";
// Material-ui
import useStyles from './styles'
import { Button } from '@material-ui/core';
// CUSTOM HOOKS
import { CreateHook } from '../../CutomHooks/CreateHook';
import { EditHook } from '../../CutomHooks/EditHook';
// PropTypes
import PropTypes from 'prop-types';
import { Loading } from '../../Widgets/Loading';
import { Error } from '../../Widgets/Error';

export const FormClients = ({ clients, setClients, isEdit, field, setIsEdit, setField }) => {
  // useRef
  const formRef = useRef() // with the use of useRef removes the form data
  // styles
  const classes = useStyles()
  // react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();
  // CUSTOM HOOKS https://es.reactjs.org/docs/hooks-custom.html
  const { create, loading, error } = CreateHook(clients, setClients, formRef)
  const { edit } = EditHook(clients, setClients, formRef)

  // Arrow Functions
  const onSubmit = (data) => {
    setIsEdit(false)
    setField({})
    const address = { streetAddress: data.address }
    // delete data.streetAddress
    const newData = { ...data, address }
    isEdit ? edit(field.id, newData) : create(newData)
  };

  const handleCancelEdit = () => {
    setField({})
    setIsEdit(false)
  }

  console.log("ISEDIT", isEdit);
  console.log("ISEDIT", isEdit);

  // Loaders and Errors
  if (loading) return <Loading />
  if (error) return <Error error={error.message} />

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" ref={formRef}>
        <input {...register("firstName", { required: true })}
          defaultValue={field.firstName ?? ''}
          className={classes.input}
          placeholder="Add your firstName" />
        {errors.firstName && <span className={classes.inputError}>This field is required</span>}

        <input {...register("lastName", { required: true })}
          defaultValue={field.lastName ?? ''}
          className={classes.input}
          placeholder="Add your lastName" />
        {errors.lastName && <span className={classes.inputError}>This field is required</span>}

        <input {...register("cellphone", { required: true })}
          defaultValue={field.cellphone ?? ''}
          className={classes.input}
          placeholder="Add your cellphone" />
        {errors.cellphone && <span className={classes.inputError}>This field is required</span>}

        <h2>Addres info</h2>

        <input {...register("address", { required: true })}
          defaultValue={field.address ?? ''}
          className={classes.input}
          placeholder="Add your address" />
        {errors.address && <span className={classes.inputError}>This field is required</span>}

        <div className={classes.containerButton}>
          <Button type="submit" variant="outlined" color="primary">
            Send
          </Button>
            {isEdit &&
              <Button type="button"
                variant="outlined"
                color="secondary"
                style={{ marginLeft: 20 }}
                onClick={handleCancelEdit}>
                Cancel Edit
              </Button>
            }
        </div>
      </form>
    </>
  )
}

FormClients.propTypes = {
  clients: PropTypes.array,
  setClients: PropTypes.func,
  isEdit: PropTypes.bool,
  field: PropTypes.object,
  setIsEdit: PropTypes.func,
  setField: PropTypes.func,
}