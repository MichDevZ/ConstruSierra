'use client'
import { Button } from '@mui/material'
import axios from 'axios';
import { unlink } from 'fs';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

interface Props {
    img: string
}

export const DeletePhoto: FC <Props> = ({img}) => {

    const router = useRouter();

    const handleDeleteImage = async (imageName: string) => { 
        const formData = new FormData();
        formData.append('filename', imageName);
        try {
            const {data} = await axios.delete<string>('api/images', {
                data: formData});
            if (data === 'Imagen eliminada con éxito') {
                router.refresh();
            }
        } catch (error) {
            
        }
    }

  return (
    <Button 
    fullWidth 
    color="error"
    onClick={e => handleDeleteImage(img)}
    >
        Borrar
    </Button>
  )
}
