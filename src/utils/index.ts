import { getCookie } from "cookies-next"
import { getUserTokenServer } from "./serverUtils";

export const getUserToken = () => {
  if (typeof window === 'undefined') {
    return getUserTokenServer()
  } else {
    const userToken = getCookie(process.env.NEXT_PUBLIC_USER_TOKEN!) as string | undefined
    return userToken
  }
}