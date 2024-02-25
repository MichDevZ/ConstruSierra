import { readdirSync } from "fs";


export const getAllProjects = async () => { 

    const files = readdirSync('public/projects');

    return files;

}