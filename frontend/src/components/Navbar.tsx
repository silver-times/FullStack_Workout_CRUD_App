import { Link } from "react-router-dom";
import { useSignout } from "../hooks/useSignout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { signoutHandler } = useSignout();
  const { user } = useAuthContext();

  const handleClick = () => {
    signoutHandler();
  };

  return (
    <nav className="p-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-6xl font-extralight">TRACKWISE</h1>
        </Link>
        <div className="flex gap-10">
          {user ? (
            <>
              <p className="text-xl font-medium">Hi, {user.name} 👋🏻</p>
              <button
                onClick={handleClick}
                className="text-xl font-medium hover:font-bold"
              >
                Signout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <p className="text-xl font-bold">Signin</p>
              </Link>
              <Link to="/signup">
                <p className="text-xl font-bold">Signup</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
