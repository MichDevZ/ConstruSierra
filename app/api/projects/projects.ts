import { readdir } from "fs/promises";
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dy8xwij0y', 
  api_key: '466599762669458', 
  api_secret: 'mkMQj1x7cdjmIa_wIxGFuI3wQWc' 
});


export const getAllProjects = async () => { 

    const files = await cloudinary.api.resources({ type: 'upload' ,  max_results: 500})

    return files.resources
    
}