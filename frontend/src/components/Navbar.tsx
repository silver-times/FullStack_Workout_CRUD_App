import { Link } from "react-router-dom";
import { useSignout } from "../hooks/useSignout";

const Navbar = () => {
  const { signoutHandler } = useSignout();

  const handleClick = () => {
    signoutHandler();
  };

  return (
    <nav className="p-5 bg-[#BFDB38]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-6xl font-extralight">💪🏻workouts</h1>
        </Link>
        <div className="flex gap-5">
          <button onClick={handleClick} className="text-xl font-bold">
            Signout
          </button>

          <Link to="/signin">
            <p className="text-xl font-bold">Signin</p>
          </Link>
          <Link to="/signup">
            <p className="text-xl font-bold">Signup</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
