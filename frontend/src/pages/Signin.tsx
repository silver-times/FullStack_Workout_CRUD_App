import React, { useState } from "react";
import { useSignin } from "../hooks/useSignin";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, error } = useSignin();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signin(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-2"
    >
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        className="my-4 block w-1/3 px-4 py-4 bg-white border-2 border-heading rounded-lg text-xl placeholder-primary focus:outline-none focus:border-heading focus:ring-1 focus:ring-heading invalid:border-warning invalid:text-warning focus:invalid:border-warning focus:invalid:ring-warning "
      />

      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        className="my-4 block w-1/3 px-4 py-4 bg-white border-2 border-heading rounded-lg text-xl placeholder-primary focus:outline-none focus:border-heading focus:ring-1 focus:ring-heading invalid:border-warning invalid:text-warning focus:invalid:border-warning focus:invalid:ring-warning "
      />

      <button
        type="submit"
        className="my-4 block w-1/3 px-4 py-4 bg-secondary hover:bg-primary border-2 border-heading rounded-lg text-2xl text-white "
      >
        Sign In
      </button>
      {error && <p className="text-warning">{error}</p>}
    </form>
  );
};

export default Signin;
