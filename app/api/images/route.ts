import { unlink, writeFile } from "fs";


export async function POST (req: any) { 

    const formData = await req.formData();

    const file = formData.get('file')

    if (!file) {
        return Response.json({ success: false })
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const path = `public/projects/${file.name}`
      await writeFile(path, buffer, (error) => {
        if (error) {
          console.error('Error durante la escritura del archivo:', error);
          // Puedes manejar el error de acuerdo a tus necesidades
        } else {
          console.log('Archivo escrito con éxito');
        }
      });

      return Response.json('Subida con éxito')

}


export async function DELETE (req: any) {  

    const formData = await req.formData();

    const fileName = formData.get('filename')

    if (!fileName) {
      return Response.json('No hay ningún archivo por ese nombre')
    }

    try {
      const imagePath = `public/projects/${fileName}`;
      await unlink(imagePath, (error) => {
          return Response.json({ success: false, message: 'Error durante la eliminación de la imagen' });
      });
          return Response.json('Imagen eliminada con éxito');
        } catch (error) {
            console.error('Error durante la eliminación de la imagen:', error);
  }

}