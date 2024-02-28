import { Box, Card, CardActions, CardMedia, Grid, Typography } from '@mui/material'
import { getAllProjects } from '../api/projects'
import { UploadPhoto } from './UploadPhoto';
import { DeletePhoto } from './DeletePhoto';
import { getServerSession } from 'next-auth';


const page = async () => {

  const images = await getAllProjects();
  
  const session = await getServerSession();

    if (!session) {
        window.location.href = process.env.NEXTAUTH_URL!
        return;
    }

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
          images.map((img: {img: string, url: string})  => (
              <Grid key={img.url} item xs={3} md={1} mr={4}  > 
                    <Card>
                        <CardMedia 
                            component='img'
                            className='fadeIn'
                            image={ `${img.url}` }
                            alt={ img.url }
                            height={100}
                        />
                        <CardActions>
                            <DeletePhoto img={img.url} />
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