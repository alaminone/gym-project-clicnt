import  { useState, useEffect } from 'react';
import useAxiosOpen from '../../../HOOK/useAxiosOpen';
import ClassCard from './ClassCard';
import Sectiontitle from '../../../component/sectiontitle/Sectiontitle';

const Classes = () => {
  const axiosopen = useAxiosOpen();
  const [classData, setClassData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosopen.get('/class');
       
        setClassData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [axiosopen]);

  return (
<section className='max-w-6xl mx-auto my-28'>
<Sectiontitle
    subtitle={'pricing plan'}
    mainTitle={'Choose Your Exclusive Plan'}
    >

    </Sectiontitle>
<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20' >
    {
        classData.map(classes => <ClassCard
             key={classes._id}
             classes={classes}
        ></ClassCard>)
    }

  
    </div>
</section>
  );
};

export default Classes;
