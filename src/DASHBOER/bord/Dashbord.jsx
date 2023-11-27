import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../HOOK/useAdmin";
import useAuthHook from "../../HOOK/useAuthHook";


const Dashbord = () => {
    const {user} = useAuthHook();

    const [isAdmin] = useAdmin();

    return (
       <section className="max-w-7xl mx-auto ">
        <div className="flex">
            {/* left side */}
                <div className="min-h-screen w-3/12 bg-slate-200">
                    <div className="bg-slate-900 py-2">
                    <img className="h-28 mx-auto " src={'https://i.ibb.co/xznNLxk/logo-no-background.png'} alt="" />
                    </div>
                <ul className="">
                    <li>
                        <NavLink to={'/dashbord/allsubscribers'}> All subscribers</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}> All Trainers</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}> Applied Trainer</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}> Balance</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}> Manage Slots</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}> Manage member</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}> Add new Forum</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}> Add new Class</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}>Activity Log</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}> Profile Settings</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}>Recommended Classes Page</NavLink>
                    </li>
                    <li>
                        <NavLink to={''}></NavLink>
                    </li>
                </ul>


                </div>
                {/* right side */}
                <div className="flex-1 px-4 pt-10">
<Outlet></Outlet>
                </div>
        </div>
       </section>
    );
};

export default Dashbord;