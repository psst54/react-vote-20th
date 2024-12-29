import NextAuth from "next-auth";
import { authOptions } from "@/auth";

export const GET = NextAuth(authOptions); // GET 메서드 명시
export const POST = NextAuth(authOptions); // POST 메서드 명시
