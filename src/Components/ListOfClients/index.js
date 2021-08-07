import React, { useEffect, useState, Fragment } from 'react';
// Apollo CLIENT
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../../Queries'
// PropTypes
import PropTypes from 'prop-types';
// Material-UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
// ICONS
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// WIDGETS
import { Loading } from '../../Widgets/Loading';
import { Error } from '../../Widgets/Error';

export const ListOfClients = ({ clients, setClients, setField, setIsEdit }) => {
  // variable for user data
  const [page, setPage] = useState(0)
  let term = ""
  let perPage = 30
  // Query @apollo/client
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    variables: { page, term, perPage },
  });
  // Functions

  useEffect(() => {
    setClients(data ? data.clientsSearch.results : [])
  }, [data, setClients])

  const handleEdit = client => {
    setField(client)
    setIsEdit(true)
  }

  // Loading and Error
  if (loading) return <Loading />
  if (error) return <Error error={error.message} />

  return (
    <>
      {clients.map(client => (
        <List key={client.id}>
          <ListItem>
            <ListItemText
              primary={client.firstName}
              secondary={client.lastName}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEdit(client)}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      ))}

      <Button variant="outlined" color="primary" onClick={() => setPage(page - 1)} style={{ marginRight: 30 }}>
        <ChevronLeftIcon />
      </Button>

      <Button variant="outlined" color="primary" onClick={() => setPage(page + 1)}>
        <ChevronRightIcon />
      </Button>
    </>
  )
}

ListOfClients.propTypes = {
  clients: PropTypes.array,
  setClients: PropTypes.func,
  setField: PropTypes.func,
  setIsEdit: PropTypes.func
}