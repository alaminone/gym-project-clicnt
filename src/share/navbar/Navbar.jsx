import { NavLink } from "react-router-dom";
import useAuthHook from "../../HOOK/useAuthHook";

const Navbar = () => {
    const {user} = useAuthHook();
  const navbarLinks = (
    <li><NavLink to={'/'}>Home</NavLink></li>
    // Add more navigation links as needed
  );

  const profileSection = user ? (
    <div className="navbar-end">
      <div className="flex items-center space-x-2">
        <img src={user.photo} alt="User" className="w-8 h-8 rounded-full" />
        <span className="text-white">{user.name}</span>
      </div>
    </div>
  ) : (
    <div className="navbar-end">
      <a className="btn bg-indigo-600 hover:bg-indigo-400 text-white">Sign Up</a>
    </div>
  );

  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 to-purple-500">
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
      {profileSection}
    </div>
  );
};

export default Navbar;
