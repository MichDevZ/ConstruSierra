import { Box, Grid, Typography } from '@mui/material';
import { Service } from './Service';
import { readdirSync } from 'fs';

const services = [
    {
        image: 'construccion.jpg',
        title: 'Reformas',
        services: ['Reformas integrales', 'Reformas de baños', 'Reformas de cocina','Reformas de locales']
    },
    {
        image: 'banos.jpg',
        title: 'Baños',
        services: ['Cambiar bañera por plato ducha', 'Reformas de baños', 'Muebles de baño', "Solado y alicatado"]
    },
    {
        image: 'cocina.jpg',
        title: 'Cocina',
        services: ['Reformas de cocina', 'Encimeras de cocina', 'Alicatado y soldado', 'Instalación de fontaneria y electricidad']
    },
    {
        image: 'parquet.jpg',
        title: 'Parquet',
        services: ['Instalación de parquet', 'Acuchillado de parquet', 'Tarima flotante', 'Reparación de parquet']
    },
    {
        image: 'servicios.jpg',
        title: 'Servicios del hogar',
        services: ['Fontaneria', 'Electricidad', 'Carpinteria y muebles', 'Instalación de ventanas y puertas', 'Techos desmontables']
    },
    {
        image: 'tejado.jpg',
        title: 'Tejados',
        services: ['Tejados', 'Impermeabilización', 'Instalación de canalones y bajantes', 'Instalación de tejas', 'Panel sandwich y todo tipo de tejado', 'Instalación de mamparas' ]
    },
    {
        image: 'interior.jpg',
        title: 'Interiorismo',
        services: ['Alisado de paredes', 'Pintura pladur', 'Falso techo' ]
    },

]

export const Services = () => {


  return (
    <Box textAlign={'center'} my={2}>
        <Typography
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
           >Nuestro Servicios</Typography>

        <Grid container display={'flex'} flexDirection={'row'}  justifyContent={'center'} my={3}>
            {
                services.map(service => (
                    <Grid key={service.image} item xs={12} md={4} >
                        <Service key={service.title} service={service} />
                    </Grid>
                ))
            }

        </Grid>

    </Box>
  )
}
