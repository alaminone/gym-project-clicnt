import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../../HOOK/useAxiossecure";
import { TbEyePlus } from "react-icons/tb";
import Sectiontitle from "../../component/sectiontitle/Sectiontitle";
// import useAuthHook from "../../HOOK/useAuthHook";
import Swal from "sweetalert2";


const Appliedtrainer = () => {
    const axiosSecure = useAxiossecure();
    // const {user} = useAuthHook();

    const { data: appliedtrainer = [], isLoading,refetch } = useQuery({
        queryKey: ["appliedtrainer"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });
    

    // console.log('font ',appliedtrainer.email , )

    const handletrainerapplication = (trainer) => {
        axiosSecure.put(`/users/become/${trainer.email}`)
          .then((res) => {
            console.log('hhh',res.data)
            if (res.data.message) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${trainer.name} is now a Trainer!`,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed to update user role",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.error("Error updating user role:", error);
            // Handle error, show error message to the user, etc.
          });
      };
      
      

    if(isLoading) return <progress className="progress  flex justify-center items-center w-full"></progress>

 
    const trainerApplications = appliedtrainer.filter(user => user.application === "trainer");

    return (
     <section>
        <Sectiontitle
        subtitle={''}
        mainTitle={'Applied Trainers'}
        ></Sectiontitle>


           <div>
          
            
            
               <div  className="overflow-x-auto mx-8 rounded-t-xl">
                 <table className="table table-zebra w-full">
                    <thead  className="bg-rose-500 text-white text-xl font-semibold">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>View More</th>
                           
                        </tr>
                    </thead>
                    <tbody className="text-xl bg-red-50">
                    {trainerApplications.map((trainer) => (
    <tr key={trainer._id}>
        <td>{trainer.name}</td>
        <td>{trainer.email}</td>
        <td>
            <button className="btn" onClick={() => document.getElementById(`my_modal_3_${trainer._id}`).showModal()}>
                <TbEyePlus className="text-4xl" />
            </button>
            <dialog id={`my_modal_3_${trainer._id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-xl font-bold my-5">Name: <span className=" text-2xl"> {trainer.name}</span> </h3>
                    <h3 className=" text-xl font-bold my-5">Email: <span className="text-2xl">{trainer.email}</span></h3>
                    <img src={trainer.Image} alt="" />
                 <div className="flex gap-3 mt-4">
                 <p  className="font-bold">Age: </p>
                 {trainer.age}
                 </div>

                    <div className="flex gap-3 my-6">
                    <p className="font-bold ">Skills: </p>
                    {trainer.skills.join(', ')}
                    </div>
                   
                    <div className="flex gap-3">
                    <p className="font-bold">Experience: </p>
                    {trainer.Experience}
                    </div>
                    <div>
                    < p className="font-bold"> Available Time in a Week: </p>
                    <ul className="grid grid-cols-2 gap-4 border p-3">
                        {trainer.availableTimeWeek && trainer.availableTimeWeek.map((day ,idx)=>(
                            <li  className="border p-1" key={idx}>{day}</li>
                        ))}
                    </ul>
                    </div>
                    
                
              <div>
              <p className="font-bold">Time Slots:</p>
<ul className="grid grid-cols-2 gap-4 border p-3 ">
  {trainer?.timeSlots &&
    trainer?.timeSlots?.map((slot, index) => (
      <li className="border p-1" key={index}>{slot}</li>
    ))}
</ul>
              </div>

                    <div className="flex justify-around gap-4 my-8">
                        <button  onClick={() => handletrainerapplication(trainer)} className="btn btn-outline text-green-500 w-6/12">Accept Application</button>
                        <button className="btn btn-outline text-red-500 w-6/12">Reject Application</button>
                    </div>
                    
                </div>
            </dialog>
        </td>
    </tr>
))}

                    </tbody>
                </table>
               </div>
           
        </div>
     </section>
    );
};

export default Appliedtrainer;
