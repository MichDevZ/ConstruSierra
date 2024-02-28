import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dy8xwij0y', 
  api_key: '466599762669458', 
  api_secret: 'mkMQj1x7cdjmIa_wIxGFuI3wQWc' 
});




export async function POST (req: any) { 

  const formData = await req.formData();
  const file = formData.get("file")

  if (!file) {
    return Response.json('No se ha subido ninguna imagen')
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes)

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({}, (error, result) => {
      if (error) {
        reject(error)
      }
      resolve(result)
    }).end(buffer)

  })

  return Response.json('Subida con éxito')

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
      console.log(fileName)
          return Response.json('Imagen eliminada con éxito');
        } catch (error) {
            console.error('Error durante la eliminación de la imagen:', error);
  }

}