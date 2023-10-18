import { useAuthContext } from "./useAuthContext";

export const useSignout = () => {
  const { signout } = useAuthContext();

  const signoutHandler = async () => {
    localStorage.removeItem("user");
    signout();
  };

  return { signoutHandler };
};
