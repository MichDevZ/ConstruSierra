import { Email, Facebook, Instagram, LocalPhone } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <Grid container height={50} 
    bgcolor={'#151515'} 
    display={'flex'}  
    textAlign={'center'} 
    alignContent={'center'}
    margin={0}
    padding={0}
    sx={{width: '100%'}}
    >
        <Grid item xs={12}  >
              <Box display={'flex'} textAlign={'center'} justifyContent={'center'}>
                   <Box display={'flex'} marginRight={2}> 
                        <Email sx={{color: 'red', marginRight: 1}} fontSize='small' />
                        <Typography  color={'white'} fontSize={'12px'} fontWeight={'bold'}>sierrafer.construdecor@gmail.com</Typography>
                    </Box> 

                    <Box display={'flex'}>
                        <LocalPhone sx={{color: 'red', marginRight: 1}} fontSize='small' />
                        <Typography color={'white'} fontSize={'12px'} fontWeight={'bold'}>641 44 72 38</Typography>
                    </Box> 

                    <Box>

                    </Box>
              </Box>
        </Grid>

    </Grid>
    
  )
}
