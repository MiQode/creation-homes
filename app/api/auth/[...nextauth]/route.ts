import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      httpOptions: {
        timeout: 10000, // Increase timeout to 10 seconds
      },
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],

  pages: {
    // signIn: '/',
    signIn: '/login',
  },

  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,

  // callbacks: {
  //   // Merge users with same email (Google + credentials)
  //   async signIn({ user, account }) {
  //     if (account?.provider !== 'credentials') {
  //       const existingUser = await prisma.user.findUnique({
  //         where: { email: user.email! },
  //       });

  //       if (existingUser && existingUser.id !== user.id) {
  //         // Merge OAuth account to existing credentials user
  //         await prisma.account.updateMany({
  //           where: { userId: user.id },
  //           data: { userId: existingUser.id },
  //         });
  //         await prisma.user.delete({ where: { id: user.id } });
  //       }
  //     }
  //     return true;
  //   },
  // },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
