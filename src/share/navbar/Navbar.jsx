import { Link } from "react-router-dom";
import useAuthHook from "../../HOOK/useAuthHook";

const Navbar = () => {
    const {user} = useAuthHook();
  const navbarLinks = <>
   <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/trainer">Trainer Page</Link></li>
          <li><Link to="/classes">Classes Page</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/community">Community/Forums</Link></li>
          {user ? (
            <>
              <li><Link to="/profile">User Profile</Link></li>
              <li><button onClick={() => console.log('Logout')}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
  </>


  return (
    <div className="navbar  fixed z-10 bg-opacity-50 max-w-6xl mx-auto bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-base-900 rounded-box w-52 text-base">
            {navbarLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Your Gym Name</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {navbarLinks}
        </ul>
      </div>
  
    </div>
  );
};

export default Navbar;
