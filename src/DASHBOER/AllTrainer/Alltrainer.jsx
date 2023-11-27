import { useEffect, useState } from "react";
import useAxiossecure from "../../HOOK/useAxiossecure";

const Alltrainer = () => {
    const axiosSecure = useAxiossecure();
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('/trainers');
                setTrainers(response.data);
            } catch (error) {
                console.error('Error fetching trainers:', error);
            }
        };

        fetchData();
    }, [axiosSecure]);

    return (
        <div className="overflow-x-auto mx-16 rounded-t-xl">
       
            <table className=" table w-full text-center">
                <thead  className="bg-rose-400 text-white  text-xl font-semibold">
                    <tr>
                        <th>#</th>
                        <th>Profile Image</th>
                        <th>Name</th>
                        <th>Payment</th>
                       
                       
                    </tr>
                </thead>
                <tbody>
                    {trainers.map((trainer, index) => (
                        <tr key={trainer.id}>
                            <td>{index + 1}</td>
                            <td>
                                {trainer.profileImage && (
                                    <img
                                        src={trainer.profileImage}
                                        alt= ''
                                     className=" w-20 h-20 rounded-full mx-auto"
                                    />
                                )}
                            </td>
                            <td>{trainer.trainerName}</td>
                            <td><button className="btn-outline text-red-500 btn btn-sm w-full">Pay</button> </td>
                            
                        
                            {/* Add more cells if needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Alltrainer;
