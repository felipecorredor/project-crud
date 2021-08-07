import { useCallback } from 'react'
import { CREATE_CLIENT } from '../Mutations'
import { useMutation } from '@apollo/client';

export const CreateHook = (clients, setClients, formRef) => {
  // Graphql Query
  const [createClient, { loading, error }] = useMutation(CREATE_CLIENT);
  // Function
  const create = useCallback((data, event) => {
    createClient({ variables: { input: data } })
      .then((response) => {
        // Update setClients with the response of graphql
        let newData = response.data.createClient
        setClients([...clients, { ...newData }])
        formRef.current.reset()
      })
  }, [createClient, clients, setClients, formRef])

  return { create, loading, error }
}