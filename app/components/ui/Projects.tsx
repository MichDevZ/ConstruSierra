'use client'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';


interface Props {
  images: Image[]
}

interface Image {
  url: string;
}


export const Projects: FC <Props> = ({images}) => {

    const [firstSlide, setFirstSlide] = useState(true);
    const MotionImage = motion(Image);
    const esMovil = useMediaQuery('(max-width:600px)');

    const handleSlideChange = () => {
      if (firstSlide) {
        setFirstSlide(false);
      } else {
        setFirstSlide(true)
      }
      
    };

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
           >Échale un vistazo a nuestro trabajo</Typography>

        <Grid container my={3} justifyContent={'center'} >
            <Grid item xs={12} md={12} ml={esMovil ? 0 : 5}>
              {
                esMovil ? 
                <Swiper
                onSlideChange={handleSlideChange}
                 autoplay={{
                    delay: 3000
                  }}
                  pagination={{ clickable: true}}
                  modules={[Navigation, Pagination, Autoplay]}
                  className='mySwiper'
                  slidesPerView={1}
                  spaceBetween={30} >
                {
                    images.map(image => (
                        <SwiperSlide key={image as any}>
                        <MotionImage 
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1 }}
                        src={`${image.url}`} alt={'Proyecto'} width={200} height={50} style={{width: '100%', height: esMovil ? 250 : 500}}  />
                        </SwiperSlide>
                    ))
                }
                </Swiper> : <Box textAlign={'center'} >

                      {
                        images.map(image => (
                            <Image key={image.url} className='gallery' src={`${image.url}` } alt={'Proyecto'} width={300} height={150}  />
                        )
                        )
                      }

                </Box>
              }
            </Grid>
            
        </Grid>

    </Box>
        
  )
}
