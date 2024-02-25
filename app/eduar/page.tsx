import { Box, Button, Card, CardActions, CardMedia, Grid, Typography } from '@mui/material'
import { getAllProjects } from '../api/projects'
import { UploadPhoto } from './UploadPhoto';
import { DeletePhoto } from './DeletePhoto';

const page = async () => {

  const images = await getAllProjects();
  

  return (
    <>
    <Grid container 
    bgcolor={'black'} display={'flex'} justifyContent={'space-around'}
    alignItems={'center'}
    >
        <Box textAlign={'center'} padding={1}>
            <Typography variant="h1" 
            component={'h1'} 
            fontSize={'20px'} 
            fontStyle={'italic'}
            fontWeight={'bold'} color={'white'}>Reformas Integrales <br />
            <span style={{color: 'red' }}>Sierra</span></Typography>

        </Box>
      

    </Grid>

    <Box textAlign={'center'}  >
        <Typography fontSize={'30px'}>Bienvenido, Eduar</Typography>
    </Box>

        <Box ml={1} my={1} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
            <UploadPhoto />
        </Box>

    <Grid container display={'flex'} my={3} ml={2}>


        {
          images.map( img => (
              <Grid key={img} item xs={3} md={1} mr={4}  > 
                    <Card>
                        <CardMedia 
                            component='img'
                            className='fadeIn'
                            image={ `projects/${img}` }
                            alt={ img }
                            height={100}
                        />
                        <CardActions>
                            <DeletePhoto img={img} />
                        </CardActions>
                    </Card>
              </Grid>
            ))
        }

    </Grid>
        
    </>
  )
}

export default page