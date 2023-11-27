import { useEffect, useState } from "react";
import useAxiossecure from "../../HOOK/useAxiossecure";
import Sectiontitle from "../../component/sectiontitle/Sectiontitle";

const Allsubscribers = () => {
    const axiosSecure = useAxiossecure(); 

    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        // Define an asynchronous function to fetch data
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('subscriber');
                // Access the data property of the response
                setSubscribers(response.data);
            } catch (error) {
                console.error("Error fetching subscribers:", error);
            }
        };

        // Call the async function
        fetchData();
    }, [axiosSecure]);

    return (
        <section>
            <div>
                <Sectiontitle
                    subtitle={'Power'}
                    mainTitle={'All subscribers'}
                ></Sectiontitle>

                <div className="overflow-x-auto mx-16 rounded-t-xl">
                    <table className="table w-full text-center">
                        {/* head */}
                        <thead className="bg-rose-400 text-black text-xl font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody className="bg-red-50 text-xl">
                            {subscribers.map((sub, idx) => (
                                <tr key={sub._id}>
                                    <th>{idx + 1}</th>
                                    <td>{sub.name}</td>
                                    <td>{sub.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Allsubscribers;
