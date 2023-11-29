import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Sectiontitle from "../../component/sectiontitle/Sectiontitle";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
const TrainerDetails = () => {
  const details = useLoaderData();

  const {
    name,
Image,
 skills,
    availableTimeWeek,
    timeSlots,
    Experience,
  } = details;

  return (
    <section className="max-w-6xl mx-auto md:py-44">
      <Sectiontitle subtitle={"About"} mainTitle={`${name}`}></Sectiontitle>
      <div className="p-8">
        <div className="flex items-center">
          <img className="w-9/12 mr-4" src={Image} alt={name} />
          <div>
            <h2 className="text-2xl md:text-7xl font-bold">{name}</h2>
            <p className="md:text-2xl">
              Experience:{" "}
              <span className="text-2xl md:text-7xl text-red-600 font-bold">
                {Experience}{" "}
              </span>{" "}
              Years
            </p>
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
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Available Time Week
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center my-5">
            {availableTimeWeek &&
              availableTimeWeek.map((day,idx) => (
                <div
                  key={idx}
                  className="p-4 border border-gray-300 rounded-md"
                >
                  <p className="text-lg font-semibold mb-2">{day}</p>
                </div>
              ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Available Time Slots
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            {timeSlots &&
              timeSlots.map((slot) => (
                <div
                  key={slot?.classNumber}
                  className="p-4 border border-gray-300 rounded-md"
                >
                  <p className="text-lg font-semibold mb-2">{slot}</p>
                </div>
              ))}
          </div>
        </div>
        <Link to={'/userbookedtrainer'}>
        <div className="  flex justify-end my-9">
       
         <button className=" btn-outline btn  w-3/12 text-rose-500 text-xl flex gap-1 "> Book Now Your Trainer <MdKeyboardDoubleArrowRight className="md:text-2xl" /></button>
        
        </div>
        </Link>
        <div className="mt-6">
          <h3 className="text-xl md:text-3xl font-bold mb-7">
            Connect with {name}
          </h3>
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
