import PropTypes from 'prop-types';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { IoCheckbox } from 'react-icons/io5';
import { MdMarkEmailRead } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TrainerCard = ({ trainer }) => {
  const { trainerName, profileImage, yearsOfExperience, skills,} = trainer;

  return (
   <section>
    <Link to={`/trainerdetails/${trainer._id}`}>
    <div className="bg-black flex flex-col">
      <div>
        <img className="" src={profileImage} alt={trainerName} />
      </div>
      <div className="bg-blue-950 mx-4 md:mx-10 text-white md:py-10 py-4 md:px-5 -mt-10 opacity-90 grow flex flex-col">
        <h2 className="font-bold md:text-lg">{trainerName}</h2>
        <p>
          Experience:
          <span className='text-5xl text-rose-600 font-extrabold'> {yearsOfExperience}</span> Years.
        </p>
        <p className="md:text-3xl flex justify-evenly mt-4">
          <FaFacebookSquare />
          <FaInstagram />
          <MdMarkEmailRead />
        </p>
        <div className='my-5'>
          {skills && (
            <div className="flex flex-col items-start">
              {skills.map((perk, index) => (
                <p key={index} className={`flex gap-3 items-center ${skills.length > 3 ? 'text-sm' : 'text-xl'}`}>
                  <IoCheckbox className="text-indigo-500" />
                  {perk}
                </p>
              ))}
            </div>
          )}
        </div>
        
      </div>
      <button className='mt-auto bg-rose-600 py-3  text-white font-bold w-full'>
          Know More
        </button>
    </div>
    </Link>
   </section>
  );
};

TrainerCard.propTypes = {
  trainer: PropTypes.object,
};

export default TrainerCard;
