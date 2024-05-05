import { Box, Grid, Typography } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';


export const AboutUs = () => {
  return (
    <Box>
        <Typography
        textAlign={'center'}
        position={'relative'}
        variant='h2' 
        fontSize={'25px'}
        borderRadius={4}
        sx={{'&::after' : {
            content: '""',
          position: 'absolute',
          bottom: -5,
          left: '45%',
          width: '10%',
          height: '2px', 
          backgroundColor: 'red', 
        }}}
        >Sobre Nosotros</Typography>

        <Grid container display={'flex'} justifyContent={'center'}>

          <Grid item xs={12} md={8} my={3} bgcolor={'#F6F6F6'} textAlign={'center'} >
              <Box>
                <Typography fontWeight={'bold'} padding={2}>Reformas Integrales en Palma de Mallorca y en toda España <br /><br /> Reformas Integrales Sierra empresa familiar ubicada en <span style={{color: 'red', fontWeight: 'bold'}} >Palma de Mallorca</span> <br /> Especializados en reformas integrales 
                  de pisos, locales comerciales y portales. Contamos también con servicios de electricidad, fontaneria.
                  <span style={{color: 'red', fontWeight: 'bold'}}> Y mucho más! </span> <br /> <br />
                  Puedes pedir tu presupuesto sin compromiso alguno. Escribenos a nuestro WhatsApp o a nuestro correo anclados
                  en la página web! (Trabajamos en toda España) 
                  </Typography>
              </Box>
          </Grid>
          
        </Grid>

    </Box>
  )
}
