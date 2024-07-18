"use client";

import { useRouter } from "next/navigation";

import Main from "@/app/(beforeLogin)/_component/Main";
// redirect에 적힌 주소로 리다이렉트 됨
export default function Login() {
  const router = useRouter();

  router.replace("/i/flow/login");
  return <Main />;
}
