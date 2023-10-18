import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setToken } = useAuthContext();

  const signin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8800/api/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      setIsLoading(false);
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));
    setUser(data.user);
    setToken(data.token);
    setIsLoading(false);
  };

  return { signin, error, isLoading };
};
