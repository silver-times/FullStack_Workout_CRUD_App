import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuthContext();

  const signup = async (email: string, name: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8800/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      setIsLoading(false);
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));
    setUser(data.user);
    setIsLoading(false);
  };

  return { signup, error, isLoading };
};
