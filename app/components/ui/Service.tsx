'use client'
import { ArrowCircleRight, Construction } from "@mui/icons-material";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

interface Props {
  service: IService
}

interface IService {
  image: string;
  title: string;
  services: string[];
}

export const Service: FC <Props> = ({service}) => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    
    useEffect(() => {
      if (isInView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, isInView]);


  return (
          <>
          <motion.div key={service.title} ref={ref} animate={controls} initial={{opacity: 0, y: 20}} transition={{ease: 'easeInOut', duration: 2}}>
          <Grid id={service.title} container  my={1} >
              
          <Image src={`/${service.image}`} alt={`${service.title}`} width={410} height={200} />
          

          <Box display={'block'} 
          width={410}
          textAlign={'start'} 
        bgcolor={"#F6F6F6"} >
              <Box display={'flex'} ml={2} alignItems={'center'} my={1}>
                  <Construction sx={{fontSize: '30px', marginRight: 1}} />
                  <Typography variant='h3' component='h3' fontSize={'23px'}>{service.title}</Typography>
              </Box>
              <Box>
              <List>
                  {
                      service.services.map(ser => (

                  <ListItem key={ser}>
                      <ArrowCircleRight fontSize='small' />
                      <Typography ml={1} fontStyle={'oblique'}>{ser}</Typography>
                  </ListItem>
                      ))
                  }
              </List>
              </Box>
          </Box>
          </Grid>
          </motion.div>
  </>
      
  
  )
}
