'use client'
import { Button, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useRef } from 'react'

export const UploadPhoto = () => {

    const router = useRouter()

    const fileInputRef = useRef<HTMLInputElement>(null)

    
    const onFilesSelected = async ({target}: ChangeEvent<HTMLInputElement>) => {
        if (!target.files || target.files.length === 0 ) {
            return;
        }

        try {
            const filesArray = Array.from(target.files)
            for( const file of filesArray) {
                const formData = new FormData();
                formData.append('file', file);
                const {data} = await axios.post<string>('api/images', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });

                console.log('Respuesta del servidor:', data);

                if (data === 'Subida con éxito') {
                    router.refresh()
                }
            }
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    <Typography>Elimina o agrega imágenes:</Typography>
            <input
                ref={fileInputRef}
                type='file'
                multiple
                accept='image/png, image/gif, image/jpeg'
                style={{display: 'none'}}
                onChange={onFilesSelected}
            />
          <Button variant='contained' sx={{mr: 2}}  onClick={() => fileInputRef.current?.click()} >Agregar</Button>
          </>
  )
}

