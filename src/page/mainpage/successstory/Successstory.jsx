import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import useAxiosOpen from '../../../HOOK/useAxiosOpen';
import Sectiontitle from '../../../component/sectiontitle/Sectiontitle';

const Successstory = () => {
  const axiosopen = useAxiosOpen();
  const [story, setStory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosopen.get('/successstory');
        setStory(response.data);
      } catch (error) {
        console.error('Error fetching success stories:', error);
      }
    };

    fetchData();
  }, [axiosopen]);

  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative'>
          <img 
            src={'https://i.ibb.co/Mn60RMP/top-view-gym-equipment-with-copy-space-fotor-202311262716.jpg'}
            alt=''
            className='w-full'
          />

          <div className='w-[780px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-950 text-white opacity-80 rounded-xl p-8'>

<Sectiontitle
subtitle={'succes story'}
mainTitle={'What Our Clients Say'}
></Sectiontitle>

            <Swiper navigation={true} modules={[Navigation]} className='mySwipe'>
              {story.map((storyItem) => (
                <SwiperSlide key={storyItem._id}>
                  <div className='md:mx-8 md:my-4 flex flex-col items-center justify-center'>
                    <div>
                      {/* Additional content goes here */}
                    </div>
                    <p className='my-2 text-xl text-center'>{storyItem.testimonial}</p>
                    <p className='text-4xl font-bold'>{storyItem.name}</p>
                    <p className=''>{storyItem.role}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Successstory;
