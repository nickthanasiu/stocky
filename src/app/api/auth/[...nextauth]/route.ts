import NextAuth, { type NextAuthOptions } from "next-auth";
import { prisma } from "../../../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@examples.com'
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                // Handle auth!

                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user) return null;

                const isPasswordValid = await compare(
                    credentials.password,
                    user.password
                );

                if (!isPasswordValid) return null;

                return {
                    id: user.id,
                    email: user.email
                };
            }
        })
    ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };