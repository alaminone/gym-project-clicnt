import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../HOOK/useAdmin";
import useTriner from "../../HOOK/useTriner";
import useMember from "../../HOOK/useMember";



const Dashboard = () => {
  // Hooks to determine user roles
 
  const [isAdmin] = useAdmin();
  const [isTrainer] = useTriner();
  const [isMember] = useMember();

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex">
        {/* left side */}
        <div className="min-h-screen w-3/12 bg-slate-200">
          <div className="bg-slate-900 py-2">
            <img
              className="h-28 mx-auto"
              src="https://i.ibb.co/xznNLxk/logo-no-background.png"
              alt=""
            />
          </div>
          <ul>
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashbord/allsubscribers">All Subscribers</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/allusers">Manage Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/alltrainers">All Trainers</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/appliedtrainer">Applied Trainers</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/balance">Balance</NavLink>
                </li>
              </>
            )}

            {isTrainer && (
              <>
                <li>
                  <NavLink to="/dashbord/manageslots">Manage Slots</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/managemember">Manage Members</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/forum">Add New Forum</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/addnewclass">Add New Class</NavLink>
                </li>
              </>
            )}

            {isMember && (
              <>
                <li>
                  <NavLink to="/dashbord/activilog">Activity Log</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/profile">Profile Settings</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/recommendedclass">Recommended Classes Page</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* right side */}
        <div className="flex-1 px-4 pt-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
