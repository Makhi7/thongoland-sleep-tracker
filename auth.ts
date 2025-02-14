import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            //...specify which fields should be submitted, by adding keys to the `credentials` object.
            credentials:{
                email: {},
                password: {},
            },
            
        })
    ],
})

