import bcrypt from 'bcryptjs';


export const getConfirmationPass = async () => { 

    const password = 'Fer1920*'

    const finalPass = bcrypt.hashSync(password)

    return finalPass;

}