import React, { createContext, useState } from "react";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  signup: (name: string, email: string) => void;
  signin: (email: string, password: string) => void;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  signup: () => {},
  signin: () => {},
  signout: () => {},
});

interface ChildrenProps {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  console.log("User:", user);

  const signup = (name: string, email: string) => {
    setUser({
      name,
      email,
    });
  };

  const signin = (email: string, password: string) => {
    setUser({
      name: "John Doe",
      email,
    });
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
