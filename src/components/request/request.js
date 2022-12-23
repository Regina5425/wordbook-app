// export const request = async (
//   url,
//   method = "GET",
//   body = null,
//   headers = { "Content-Type": "application/json" }
// ) => {
//   try {
//     const response = await fetch(url, { method, body, headers });

//     if (!response.ok) {
//       throw new Error(`Could not fetch ${url}, status: ${response.status}`);
//     }

//     return response;
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
// };

import { useState, useCallback } from "react";

export const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setIsLoading(true);
      try {
				
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        setIsLoading(false);
				

        return response;
      } catch (e) {
        console.log(e);
        setIsLoading(false);
        setError(true);
        throw e;
      }
    },
    []
  );

  // const clearError = useCallback(() => setError(null), []);

  return { isLoading, request, error };
};
