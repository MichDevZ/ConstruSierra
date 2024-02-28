import {v2 as cloudinary} from 'cloudinary';
import { NextResponse } from 'next/server';
          
cloudinary.config({ 
  cloud_name: 'dy8xwij0y', 
  api_key: '466599762669458', 
  api_secret: 'mkMQj1x7cdjmIa_wIxGFuI3wQWc' 
});


export async function POST (req: any, res: any) { 

  const formData = await req.formData();
  const file = formData.get("file")

  if (!file) {
    return Response.json('No se ha subido ninguna imagen')
  }

  const bytes = await file.arrayBuffer();

  var mime = file.type; 
  var encoding = 'base64'; 
  var base64Data = Buffer.from(bytes).toString('base64');
  var fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  
  try {
    
    const uploadToCloudinary = () => {
      return new Promise((resolve, reject) => {

          var result = cloudinary.uploader.upload(fileUri, {
            invalidate: true
          })
            .then((result) => {
              console.log(result);
              resolve(result);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
      });
    };

    const result: any = await uploadToCloudinary();
    
    let imageUrl = result.secure_url;

    return NextResponse.json('Subida con éxito');
  } catch (error) {
    console.log("server err", error);
    return NextResponse.json({ err: "Internal Server Error" }, { status: 500 });
  }

}


export async function DELETE (req: any) {  

    const formData = await req.formData();

    const fileName = formData.get('filename')

    if (!fileName) {
      return Response.json('No hay ningún archivo por ese nombre')
    }

    try {
      const [fileId, extension] = fileName.substring(fileName.lastIndexOf('/') + 1).split('.')
      const result = await cloudinary.uploader.destroy(fileId);
          return Response.json('Imagen eliminada con éxito');
        } catch (error) {
            console.error('Error durante la eliminación de la imagen:', error);
  }

}