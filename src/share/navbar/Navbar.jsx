import { Link } from "react-router-dom";
import useAuthHook from "../../HOOK/useAuthHook";
// import useAdmin from "../../HOOK/useAdmin";
// import useTriner from "../../HOOK/useTriner";
// import useMember from "../../HOOK/useMember";

const Navbar = () => {
    const {user ,logOut,loading } = useAuthHook();

    // const [isAdmin] = useAdmin();
    // const [isTrainer] = useTriner();
    // const [isMember] = useMember();

    const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }
  const navbarLinks = <>
   <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/trainer">Trainer Page</Link></li>
          <li><Link to="/classespage">Classes Page</Link></li>
         
            <li><Link to="/dashbord">Dashboard</Link></li>
          
          <li><Link to="/community">Community/Forums</Link></li>
     
    {
            user ? <>
            <p>{user?.displayName}</p>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
  </>
 if(loading){
  return <progress className="progress w-full progress-secondary"></progress>
}

  return (
    <div className="navbar  fixed z-10 bg-opacity-70 max-w-7xl mx-auto bg-black text-white">
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
        <div>
        {/* <h3 className="btn btn-ghost text-2xl text-white"><MdOutlineFitnessCenter className="text-2xl" />  POWER PLUS <MdOutlineFitnessCenter className="text-2xl" /> </h3>
        <p className="text-center shadow-2xl"> FITNESS CLUB</p> */}
<img className="w-3/12 h-1/6" src={'https://i.ibb.co/xznNLxk/logo-no-background.png'} alt="" />

        </div>
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
