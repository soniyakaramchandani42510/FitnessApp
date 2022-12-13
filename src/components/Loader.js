import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {InfinitySpin} from 'react-loader-spinner'
function Loader() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <InfinitySpin color="grey" />
  </Stack>
  )
}

export default Loader