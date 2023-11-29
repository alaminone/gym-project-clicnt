/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosOpen from '../../HOOK/useAxiosOpen';
import Sectiontitle from '../sectiontitle/Sectiontitle';


const Classespage = () => {
  const axiosopen = useAxiosOpen();

  const { data: weeklyschedule, isLoading } = useQuery({
    queryKey: ['weeklyschedule'],
    queryFn: async () => {
      try {
        const res = await axiosopen.get('/weeklyschedule');
        console.log(res.data); // Log the response to inspect its structure
        return res.data; // Return the relevant data property
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
  <section className='py-28'>

    <Sectiontitle 

    subtitle={'weekly'}
    mainTitle={'schedule'}
    
    ></Sectiontitle>
      <div className="weekly-schedule-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
    {weeklyschedule.map(({ _id, ...days }) =>
      Object.entries(days).map(([day, classList]) => (
        <React.Fragment key={day}>
          {classList.map(({ class_name, time }, index) => (
            <div key={`${day}-${class_name}`} className="schedule-item border p-4 text-center space-y-2 bg-red-50">
              {index === 0 && (
                <div className="schedule-id">{}</div>
              )}
              <div className="schedule-day text-xl first-letter font-bold">{day}</div>
              <div className="schedule-class font-bold">{class_name}</div>
              <div className="schedule-time">{time}</div>
            </div>
          ))}
        </React.Fragment>
      ))
    )}
  </div>


  </section>
  );
};

export default Classespage;
