// import { Link } from "react-router-dom";
// import { useSignout } from "../hooks/useSignout";
// import { useAuthContext } from "../hooks/useAuthContext";

// const Navbar = () => {
//   const { signoutHandler } = useSignout();
//   const { user } = useAuthContext();

//   const handleClick = () => {
//     signoutHandler();
//   };

//   return (
//     <nav className="p-5 bg-[#BFDB38]">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//           <h1 className="text-6xl font-extralight">💪🏻workouts</h1>
//         </Link>
//         <div className="flex gap-5">
//           {user ? (
//             <>
//               <p className="text-xl font-bold">Hi, {user.name} 👋🏻</p>
//               <button onClick={handleClick} className="text-xl font-bold">
//                 Signout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/signin">
//                 <p className="text-xl font-bold">Signin</p>
//               </Link>
//               <Link to="/signup">
//                 <p className="text-xl font-bold">Signup</p>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  return <h1>Navbar</h1>;
};

export default Navbar;
