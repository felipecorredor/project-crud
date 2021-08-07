import React, { useState } from 'react';
// Material-ui
import { Grid, Container } from '@material-ui/core';
// Hooks
import { ListOfClients } from '../Components/ListOfClients';
import { FormClients } from '../Components/FormClients';

export const Admin = () => {
  // useStates
  const [clients, setClients] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [field, setField] = useState({}) // Stores fields to assign a value to form inputs

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div style={{ width: '70%' }}>
            <ListOfClients clients={clients}
              setClients={setClients}
              setField={setField}
              setIsEdit={setIsEdit}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormClients clients={clients}
            setClients={setClients}
            isEdit={isEdit}
            field={field}
            setIsEdit={setIsEdit}
            setField={setField}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
