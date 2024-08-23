import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {

  const [search, setSearch] = useState('')

  // handle Search Function
  const handleSearch = async () => {
      // if search exists
      if (search) {
        const exercisesData = await fetchData();     //fetchData() is in utils folder
        
      }
  }

  return (
    <Stack alignItems={'center'} mt={'35px'} justifyContent={'center'} p={'20px'}>
      <Typography fontWeight={'700px'} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb={'50px'} textAlign={'center'}>
        Awesome Exercises you <br /> should know
      </Typography>
      <Box position={'relative'} mb={'72px'}>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: {
              lg: '800px',
              xs: '350px'
            },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase())}}
          type='text'
          label="Search Exercises" 
          />
          <Button className='search-btn'
            sx={{
              bgcolor:"#ff2625",
              color:"#fff",
              textTransform:'none',
              width:{ lg: '175px', xs:'80px'},
              fontSize: { lg: '20px', xs:'14px'},
              height:'56px',
              position: "absolute",
              right:'0'
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises;