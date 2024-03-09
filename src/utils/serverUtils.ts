"use server"
import { getCookie } from "cookies-next"
import { cookies } from 'next/headers';

export const getUserTokenServer = () => {
  const userToken = getCookie(process.env.NEXT_PUBLIC_USER_TOKEN!, { cookies }) as string | undefined
  return userToken
}