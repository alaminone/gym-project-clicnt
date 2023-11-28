// import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import TrainerCard from "./TrainerCard";
import Sectiontitle from "../../component/sectiontitle/Sectiontitle";

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../HOOK/useAxiosOpen";


const Trainers = () => {
 

  const axiosopen = useAxiosOpen()
  

  const { data: trainer = [], isLoading, } = useQuery({
      queryKey: ["trainer"],
      queryFn: async () => {
          const res = await axiosopen.get("/trainers");
          return res.data;
      },
  });


  const confirmTrainer = trainer.filter(user => user.role === "trainer");
  
  // console.log('ll', trainer)


  if(isLoading) return <progress className="progress  flex justify-center items-center w-full"></progress>

  return (
   <section className=" max-w-5xl mx-auto py-44">
<Sectiontitle 
subtitle={'trainer section'}
mainTitle={'Choose Your Training Coach'}

></Sectiontitle>

<Link to={'/becomeatrainer'}>
<div className="w-3/12 mx-auto hover:bg-rose-200 ">
  <img className="w-7/12 h-4/6 mx-auto" src={'https://i.ibb.co/PTk023T/valery-sysoev-LDAir-ERNzew-unsplash-fotor-2023112619814-removebg-preview.png'} alt="" />
  <button className="btn w-full text-xl  bg-rose-500 text-white flex items-center justify-center gap-2"> Become a Trainer. <MdKeyboardDoubleArrowRight className="md:text-2xl" /></button>

</div>
</Link>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {confirmTrainer.map(trainer => (
        <TrainerCard key={trainer._id} trainer={trainer} />
        
      ))}
    </div>
   </section>
  );
};

export default Trainers;
