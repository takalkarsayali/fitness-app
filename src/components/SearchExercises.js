import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData';

const SearchExercises = () => {

  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])


  // handle Search Function
  const handleSearch = async () => {
    // if search exists
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      //fetchData() is in utils folder ---- exerciseOptions are used to authorize the details 
      // api: https://exercisedb.p.rapidapi.com/exercises  -->> gives all the exercises available 
      // source of API: https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb

      // flitering out data according to search
      const searchedExercises = exercisesData.filter(
        // add all the conditions that will find the exercises according to search of name,target,equipment or bodypart
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      // clear search
      setSearch('');
      setExercises(searchedExercises);

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
          onChange={(e) => { setSearch(e.target.value.toLocaleLowerCase()) }}
          type='text'
          label="Search Exercises"
        />
        <Button className='search-btn'
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: "absolute",
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      {/* Display Body Parts List */}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises;