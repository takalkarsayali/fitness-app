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
          id="outlined-basic" 
          label="Search Exercises" 
          variant="outlined" />
      </Box>
    </Stack>
  )
}

export default SearchExercises;