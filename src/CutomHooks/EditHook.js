import { useCallback } from 'react'
import { UPDATE_CLIENT } from '../Mutations';
import { useMutation } from '@apollo/client';

export const EditHook = (clients, setClients, formRef) => {
  // Graphql Query
  const [updateClient] = useMutation(UPDATE_CLIENT);
  // Function
  const edit = useCallback((id, data) => {
    updateClient({ variables: { id, input: data } })
    .then(response => {
      // Update setClients with the response of graphql
      let newData = response.data.updateClient
      const filterarray = clients.map(item => (item.id === id ? { ...newData } : item))
      setClients(filterarray)
      formRef.current.reset()
    })
  }, [updateClient, clients, setClients, formRef])
  return { edit }
}