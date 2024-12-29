import styles from "@/app/(beforeLogin)/_component/main.module.css";

import { redirect } from "next/navigation";
import Main from "./_components/Main";
import { getSession } from "@/lib/session";
export default async function Home() {
  // 로그인 페이지로 리다이렉트
  const session = await getSession();

  // 유저가 있으면 홈으로 리다이렉트 (after login 상태)
  if (session?.user) {
    redirect("/home");
    return null;
  }
  return <Main />;
}
