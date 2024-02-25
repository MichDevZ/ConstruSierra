import bcrypt from 'bcryptjs';


export const getConfirmationPass = async () => { 

    const password = 'Eduar1234'

    const finalPass = bcrypt.hashSync(password)

    return finalPass;

}