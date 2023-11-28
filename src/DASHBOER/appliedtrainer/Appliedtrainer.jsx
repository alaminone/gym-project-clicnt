import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../../HOOK/useAxiossecure";
import { TbEyePlus } from "react-icons/tb";
import Sectiontitle from "../../component/sectiontitle/Sectiontitle";
import useAuthHook from "../../HOOK/useAuthHook";


const Appliedtrainer = () => {
    const axiosSecure = useAxiossecure();
    const {user} = useAuthHook();

    const { data: appliedtrainer = [], isLoading,  } = useQuery({
        queryKey: ["appliedtrainer"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });
    console.log(appliedtrainer)

    if(isLoading) return <progress className="progress  flex justify-center items-center w-full"></progress>

 
    const trainerApplications = appliedtrainer.filter(user => user.application === "trainer");

    return (
     <section>
        <Sectiontitle
        subtitle={''}
        mainTitle={'Applied Trainers'}
        ></Sectiontitle>

<h2 className="text-2xl my-7">
                <span> # Admin </span>: 
                {
                    user?.displayName ? user.displayName : ''
                }
            </h2>
           <div>
          
            
            {!isLoading && trainerApplications.length === 0 && <p>No trainers have applied.</p>}
            {!isLoading && trainerApplications.length > 0 && (
               <div  className="overflow-x-auto mx-8 rounded-t-xl">
                 <table className="table table-zebra w-full">
                    <thead  className="bg-rose-500 text-white text-xl font-semibold">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>View More</th>
                            {/* Add more headers as needed */}
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
                    <p className="py-4">Age: {trainer.age}</p>

                    {/* Add more details here */}
                    <p>Skills: {trainer.skills.join(', ')}</p>
                   
                    <p>Experience: {trainer.Experience}</p>
                    <p>Available Time in a Week: {trainer.availableTimeWeek}</p>
                    {/* <p>Time Slots: {trainer.timeSlots}</p> */}
              <div>
              <p>Time Slots:</p>
<ul className="grid grid-cols-2">
  {trainer?.timeSlots &&
    trainer?.timeSlots?.map((slot, index) => (
      <li key={index}>{slot}</li>
    ))}
</ul>
              </div>

                    <div className="flex justify-around">
                        <button>ab</button>
                        <button>bc</button>
                    </div>
                    
                </div>
            </dialog>
        </td>
    </tr>
))}

                    </tbody>
                </table>
               </div>
            )}
        </div>
     </section>
    );
};

export default Appliedtrainer;
