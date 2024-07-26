import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
  return (
    <Stack alignItems={'center'} mt={'35px'} justifyContent={'center'} p={'20px'}>
      <Typography fontWeight={'700px'} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb={'50px'} textAlign={'center'}>
        Awesome Exercises you <br /> should know
      </Typography>
      <Box position={'relative'} mb={'72px'}>
        <TextField
          // height="100px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={" "}
          onChange={(e) => { }}
          type="text"
          placeholder='Search Exercises'
        />

      </Box>
    </Stack>
  )
}

export default SearchExercises;