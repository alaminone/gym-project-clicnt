import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { IoCheckbox } from 'react-icons/io5';
import { MdMarkEmailRead } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import Sectiontitle from '../../component/sectiontitle/Sectiontitle';

const TrainerDetails = () => {
  const details = useLoaderData();

  const { trainerName, profileImage, yearsOfExperience, skills, availableTimeSlot } = details;

  // Parse the availableTimeSlot string into a JavaScript object
  const parsedTimeSlots = JSON.parse(availableTimeSlot);

  return (
    <section className='max-w-6xl mx-auto md:py-44'>
      <Sectiontitle
      subtitle={'About'}
      mainTitle={`${trainerName}`}
      ></Sectiontitle>
      <div className="p-8">
        <div className="flex items-center">
          <img className="w-9/12 mr-4" src={profileImage} alt={trainerName} />
          <div>
            <h2 className="text-2xl md:text-7xl font-bold">{trainerName}</h2>
            <p className='md:text-2xl'>Experience: <span className='text-2xl md:text-7xl text-red-600 font-bold'>{yearsOfExperience} </span> Years</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="md:text-2xl text-xl font-bold mb-2">Skills</h3>
          <div className="flex flex-wrap ">
            {skills &&
              skills.map((perk, index) => (
                <p key={index} className="flex items-center mr-4 text-xl mb-2">
                  <IoCheckbox className="text-indigo-500 mr-1" />
                  {perk}
                </p>
              ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Available Time Slots</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            {parsedTimeSlots &&
              parsedTimeSlots.map((slot) => (
                <div key={slot?.classNumber} className="p-4 border border-gray-300 rounded-md">
                  <p className="text-lg font-semibold mb-2">
                    {slot?.startTime} - {slot?.endTime}
                  </p>
                  {/* Add any additional styling or information here */}
                </div>
              ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl md:text-3xl font-bold mb-7">Connect with {trainerName}</h3>
          <div className="flex">
            <FaFacebookSquare className="text-3xl mr-4" />
            <FaInstagram className="text-3xl mr-4" />
            <MdMarkEmailRead className="text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerDetails;
