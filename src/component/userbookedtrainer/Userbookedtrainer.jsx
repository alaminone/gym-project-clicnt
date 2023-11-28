import { useState } from 'react'; // Import useState for defining tabIndex state
import { useQuery } from '@tanstack/react-query';
import useAxiosOpen from '../../HOOK/useAxiosOpen';
import Sectiontitle from '../sectiontitle/Sectiontitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tabcaard from '../Tabcard/Tabcaard';

const Userbookedtrainer = () => {
  const axiosopen = useAxiosOpen();
  const { data: classes = [] } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axiosopen.get('/class');
      return res.data;
    },
  });
  const plans = ['silver', 'gold','diamond']
  const initialIndex = classes.indexOf(plans);
  
  
  const [tabIndex, setTabIndex] = useState(initialIndex);

 
  const silverClasses = classes.filter((cls) => cls.plans === 'silver');
  const goldClasses = classes.filter((cls) => cls.plans === 'gold');
  const diamondClasses = classes.filter((cls) => cls.plans === 'diamond');

  return (
    <section className="py-28">
      <Sectiontitle mainTitle={'Trainer Booking'}></Sectiontitle>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex gap-4 justify-center text-xl font-semibold my-8">
          <Tab className="btn btn-outline">Silver</Tab>
          <Tab className="btn btn-outline">Gold </Tab>
          <Tab className="btn btn-outline">Diamond</Tab>
        </TabList>

        <TabPanel className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
          {silverClasses.map((cls, idx) => (
            <Tabcaard key={idx} cls={cls}></Tabcaard>
          ))}
        </TabPanel>
        <TabPanel className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
          {goldClasses.map((cls, idx) => (
            <Tabcaard key={idx} cls={cls}></Tabcaard>
          ))}
        </TabPanel>
        <TabPanel className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
          {diamondClasses.map((cls, idx) => (
            <Tabcaard key={idx} cls={cls}></Tabcaard>
          ))}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Userbookedtrainer;
