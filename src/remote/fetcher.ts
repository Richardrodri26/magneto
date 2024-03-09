import { getCookie, hasCookie } from 'cookies-next'


type FetchOptions = {
    cache?: RequestCache;
    next?: NextFetchRequestConfig;
  };
  
  type RequestInit = {
    headers: (HeadersInit & FetchOptions) | FetchOptions;
  };
  
  const backendUrl = `${process.env.NEXT_PUBLIC_URL_BACKEND_API}`;
  const apiKey = process.env.NEXT_PUBLIC_MAGNETO_APIKEY;
  // const userToken = getCookie(process.env.NEXT_PUBLIC_USER_TOKEN!, { cookies }) as string | undefined
  const hasUserToken = hasCookie(process.env.NEXT_PUBLIC_USER_TOKEN!,)
  export const fetcher = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit["headers"]
  ) => {
    return async (): Promise<TData> => {
      const { next, cache, ...restOptions } = options || {};

      let userToken = "";

      if (typeof window === "undefined") {
        const { cookies } = await import("next/headers")
        const userTokenServer = getCookie(process.env.NEXT_PUBLIC_USER_TOKEN!, { cookies }) as string | undefined

        userToken = userTokenServer || ""
      } else  {
        const userTokenClient = getCookie(process.env.NEXT_PUBLIC_USER_TOKEN!) as string | undefined
        userToken = userTokenClient || ""
      }

      const res = await fetch(
        `${backendUrl}graphql`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...restOptions,


            // "Authorization": `Bearer ${getUserToken() || ""}`,
            // "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJrb3Vkc2lAY29tZXJjaWFsaXphZG9yYS1zMy5jb20iLCJmaXJzdE5hbWUiOiJzdXBlciBhZG1pbiIsImxhc3ROYW1lIjpudWxsLCJpZGVudGlmaWNhdGlvblR5cGUiOm51bGwsImlkZW50aWZpY2F0aW9uTnVtYmVyIjpudWxsLCJoYXNBdXRob3JpemVkIjp0cnVlLCJvcmdhbml6YXRpb24iOm51bGwsImlhdCI6MTcwOTk1NDYyMCwiZXhwIjoxNzEwMDQxMDIwfQ.OJDlQXcYaXSNKw5XxJ004ArXmX-2mPMJE90TkRlVwfE`,
            "Authorization": `Bearer ${userToken}`,
            // "Authorization": `Bearer ${getCookies()[process.env.NEXT_PUBLIC_USER_TOKEN!] || ""}`,
            "apiKey": apiKey!
          },
          body: JSON.stringify({ query, variables }),
          next,
          cache,
        }
      );


      // console.log('getUserToken()', getUserToken())
      // console.log('hasUserToken', hasUserToken)
      // // console.log('userToken', userToken)
      // console.log('res', res)
      // console.log('getCookies()', getCookies())
  
      const json = await res.json();
  
      if (json.errors) {
        const { message } = json.errors[0];
        
        console.log('json', json)
        throw new Error(message);
      }
  
      return json.data;
    };
  };