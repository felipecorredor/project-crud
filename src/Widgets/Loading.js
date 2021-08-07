import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: 35 }}>
      <CircularProgress />
    </div>
  )
}
