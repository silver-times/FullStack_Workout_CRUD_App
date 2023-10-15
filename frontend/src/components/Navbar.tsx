import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-5 bg-[#BFDB38]">
      <div className="container mx-auto">
        <Link to="/">
          <h1 className="text-6xl font-extralight">💪🏻workouts</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
