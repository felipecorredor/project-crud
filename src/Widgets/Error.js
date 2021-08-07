import React from 'react'

export const Error = ({ error }) => {
  return (
    <>
      <img src='/server-error.jpg' alt="server-error" width="80%" height="300" />
      <h3>{error} - Please try again later</h3>
    </>
  )
}
