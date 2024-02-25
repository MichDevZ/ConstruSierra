import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import { getConfirmationPass } from "../../user"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: 
            {
                password: { label: "Ingrese la contraseña", type: "password" }
              },
              async authorize(credentials, req) {

                const pass = await getConfirmationPass()
                const isValidPassword = await bcrypt.compare(credentials!.password, pass!)

               if(!isValidPassword) throw new Error('Invalid Credentials')


               const user = {
                id: '1',
                name: 'Eduar'
            };
            
                return user;
              }
        })
    ],
    callbacks: {
        jwt({user, token}){
            if (user) token.user = user;
            return token;
        },
        session({session, token}){
            session.user = token.user as any
            return session;
        }
    }, 
  })
  
export { handler as GET, handler as POST }