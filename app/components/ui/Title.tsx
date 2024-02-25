import { FormatListBulleted } from "@mui/icons-material"
import { Box, Button, Grid, Typography, styled } from '@mui/material';
import { motion } from "framer-motion"
import Image from 'next/image'
import { ButtonDrawer } from "./ButtonDrawer"


export const Title = () => {
  
  return (
    <>
    <Grid container 
    bgcolor={'#F6F6F6'} display={'flex'} justifyContent={'space-around'}
    alignItems={'center'}
    >
        <Box textAlign={'center'} padding={1}>
            <Typography variant="h1" 
            component={'h1'} 
            fontSize={'20px'} 
            fontStyle={'italic'}
            fontWeight={'bold'}>Reformas Integrales <br />
            <span style={{color: 'red' }}>Sierra</span></Typography>

        </Box>

      <ButtonDrawer />
      

    </Grid>
        
         <Box sx={{marginLeft: -1}}>
          <Image src={"/principal.jpeg"} alt={"Baño lujoso"} width={450} height={200} style={{width: '100%', height: 350}} />
        </Box>
        </>
  )
}
