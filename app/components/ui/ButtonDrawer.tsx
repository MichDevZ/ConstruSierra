'use client'
import { ArrowRightAlt, FormatListBulleted } from '@mui/icons-material'
import { Button, Divider, Drawer, List, ListItem } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

export const ButtonDrawer = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const scrollToSection = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          handleDrawerClose();
        }
      };

    
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
    <Button
    sx={{ml: 1}}
    color="inherit"
    variant='contained'
    size="large"
    component={motion.div}
    whileHover={{
      scale: 1.2,
      transition: { duration: 0.3 }
    }}
    whileTap={{ scale: 0.9 }}
    onClick={handleDrawerOpen}
    >
        <FormatListBulleted />

    </Button>

        <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        >
        <List sx={{fontWeight: 'bold'}}>
            <Button sx={{color: 'black', fontWeight: 'bold'}} onClick={() => scrollToSection('Reformas')}>
            <ListItem>
                <ArrowRightAlt />
                Reformas
            </ListItem>
            </Button>
            <Divider />
            <Button sx={{color: 'black', fontWeight: 'bold'}} onClick={() => scrollToSection('Baños')}>
            <ListItem>
                <ArrowRightAlt />
                Baños
            </ListItem>
            </Button>
            <Divider />
            <Button sx={{color: 'black', fontWeight: 'bold'}} onClick={() => scrollToSection('Cocina')}>
            <ListItem>
                <ArrowRightAlt />
                Cocina
            </ListItem>
            </Button>
            <Divider />
            <Button sx={{color: 'black', fontWeight: 'bold'}} onClick={() => scrollToSection('Parquet')}>
            <ListItem>
                <ArrowRightAlt />
                Parquet
            </ListItem>
            </Button>
            <Divider />
            <Button sx={{color: 'black', fontWeight: 'bold'}} onClick={() => scrollToSection('Servicios del hogar')}>
            <ListItem>
                <ArrowRightAlt />
                Servicios del hogar
            </ListItem>
            </Button>
            <Divider />
            <Button sx={{color: 'black', fontWeight: 'bold'}} onClick={() => scrollToSection('Interiorismo')}>
            <ListItem>
                <ArrowRightAlt />
                Interiorismo
            </ListItem>
            </Button>
            <Divider />
            <Button sx={{color: 'black', fontWeight: 'bold'}} onClick={() => scrollToSection('Tejados')}>
            <ListItem>
                <ArrowRightAlt />
                Tejados
            </ListItem>
            </Button>
            <Divider />
            <Button sx={{color: 'black', fontWeight: 'bold'}} onClick={() => scrollToSection('Contacto')}>
            <ListItem>
                <ArrowRightAlt />
                Contacto
            </ListItem>
            </Button>
            <Divider />
        </List>
        </Drawer>
</>
  )
}
