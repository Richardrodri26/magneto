import { getCookie } from 'cookies-next'

type FetchOptions = {
    cache?: RequestCache;
    next?: NextFetchRequestConfig;
  };
  
  type RequestInit = {
    headers: (HeadersInit & FetchOptions) | FetchOptions;
  };
  
  const backendUrl = `${process.env.NEXT_PUBLIC_URL_BACKEND_API}`;
  const apiKey = process.env.NEXT_PUBLIC_MAGNETO_APIKEY;
  const userToken = getCookie(process.env.NEXT_PUBLIC_USER_TOKEN!) as string | undefined
  
  export const fetcher = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit["headers"]
  ) => {
    return async (): Promise<TData> => {
      const { next, cache, ...restOptions } = options || {};
      const res = await fetch(
        `${backendUrl}graphql`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...restOptions,


            "Authorization": `Bearer ${userToken || ""}`,
            "apiKey": apiKey!
          },
          body: JSON.stringify({ query, variables }),
          next,
          cache,
        }
      );
  
      const json = await res.json();
  
      if (json.errors) {
        const { message } = json.errors[0];
  
        throw new Error(message);
      }
  
      return json.data;
    };
  };