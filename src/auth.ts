import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import { signIn as nextSignIn } from "next-auth/react";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
    newUser: "/signup",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        id: { label: "id", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.id,
              password: credentials.password,
            }),
          },
        );

        if (!authResponse.ok) {
          throw new Error("Authentication failed");
        }

        const user = await authResponse.json();
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
};

// signIn과 authOptions 내보내기
export const signIn = nextSignIn;
export const getSession = getServerSession;
