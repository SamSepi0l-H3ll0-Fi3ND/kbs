import { useCallback, useState } from "react";
import API from "../env";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API}${requestConfig.url}`, {
        method: requestConfig.method,
        headers: !requestConfig.headers
          ? {
              "Content-Type": "application/json",
              Accept: "application/json",
            }
          : requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      setIsLoading(false);

      return await response.json();
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
