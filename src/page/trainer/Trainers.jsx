import { useEffect, useState } from "react";

import TrainerCard from "./TrainerCard";
import Sectiontitle from "../../component/sectiontitle/Sectiontitle";
import useAxiossecure from "../../HOOK/useAxiossecure";

const Trainers = () => {
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
   <section className=" max-w-5xl mx-auto py-44">
<Sectiontitle 
subtitle={'trainer section'}
mainTitle={'Choose Your Training Coach'}

></Sectiontitle>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {trainers.map(trainer => (
        <TrainerCard key={trainer._id} trainer={trainer} />
      ))}
    </div>
   </section>
  );
};

export default Trainers;
