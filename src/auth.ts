import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import { signIn as nextSignIn } from 'next-auth/react';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/signin',
    newUser: '/signup',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        id: { label: 'id', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        console.log('!@@!#!@#@');

        const formData = new FormData();

        formData.set('username', credentials.id);
        formData.set('password', credentials.password);

        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
          {
            method: 'POST',
            body: formData,
          },
        );

        if (!authResponse.ok) {
          throw new Error('Authentication failed');
        }

        return {
          id: credentials.id,
        };
      },
    }),
  ],
};

// signIn과 authOptions 내보내기
export const signIn = nextSignIn;
export const getSession = getServerSession;
