import { useEffect, useState } from "react";
import useAxiossecure from "../../HOOK/useAxiossecure";
import Sectiontitle from "../../component/sectiontitle/Sectiontitle";

const Allsubscribers = () => {
    const axiosSecure = useAxiossecure(); 

    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('subscriber');
                setSubscribers(response.data);
            } catch (error) {
                console.error("Error fetching subscribers:", error);
            }
        };

        fetchData();
    }, [axiosSecure]);
    

    return (
        <section>
            <div>
                <Sectiontitle
                    subtitle={'All subscribers'}
                    mainTitle={'All Newsletter Subscribers'}
                ></Sectiontitle>

                <div className="overflow-x-auto mx-16 rounded-t-xl">
                    <table className="table w-full text-center">
                        <thead className="bg-rose-400 text-white  text-xl font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers.map((sub, idx) => (
                                <tr key={sub._id}>
                                    <td>{idx + 1}</td>
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
