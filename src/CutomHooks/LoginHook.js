import { useCallback } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../Mutations'

export const LoginHook = (history) => {
  // Graphql Query
  const [login, { loading, error }] = useMutation(LOGIN);

  // Function
  const loginUSer = useCallback((data) => {
    login({ variables: { cellphone: data.cellphone, password: data.password } })
      .then((response) => {
        sessionStorage.setItem('token', response.data.login.token)
        history.push("/admin")
      })
      .catch((error) => {
        console.error(error)
      })
  }, [login, history])

  return { loginUSer, loading, error }
}
