import { useQuery } from "@tanstack/react-query";
import { FaSearchengin } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiossecure from "../../HOOK/useAxiossecure"

const AllUsers = () => {
  const axiosSecure = useAxiossecure()

  const { data: users = [],isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMaketrainer = (user) => {
    axiosSecure.patch(`/users/trainer/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${user.name} is an Trainer Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakemember = (user) => {
    axiosSecure.patch(`/users/member/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${user.name} is an Member Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/users/${user._id}`)
          .then((response) => {
            if (response.data) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the item.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire("Error", "Failed to delete the item.", "error");
          });
      }
    });
  };
  if(isLoading) return <progress className="progress w-56"></progress>
  return (
    <div className="w-full">
      <Helmet>
        <title>Power Plase | All users</title>
      </Helmet>
   
   <div className="flex gap2 justify-end mr-8 my-2 relative">
      
   <input
        type="text"
        placeholder="Search..."
      className="border rounded-md p-2"
      />
      <button className="btn-ghost btn absolute" type="submit"><FaSearchengin className="text-3xl" /></button>
   </div>
 
     
      <div className="overflow-x-auto mx-8 rounded-t-xl">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-rose-500 text-white text-xl font-semibold">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-xl bg-red-50">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* {user.role === "admin" ? (
                    "admin"
                  ) : (
                 
                  )} */}
                  {user?.role}
                </td>
                <td>
                <div className="grid grid-cols-2 gap-1">
                <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn text-green-500 btn-ghost btn-sm btn-outline"
                    >
                    Admin
                    </button>
                <button
                      onClick={() => handleMaketrainer(user)}
                      className="btn text-amber-500  btn-sm btn-outline btn-ghost "
                    >
                   Trainer
                    </button>
                <button
                      onClick={() => handleMakemember(user)}
                      className="btn text-indigo-500 btn-sm btn-outline btn-ghost "
                    >
                   Member
                    </button>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn text-red-600 btn-ghost btn-sm btn-outline"
                  >
                    Delete
                  </button>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
