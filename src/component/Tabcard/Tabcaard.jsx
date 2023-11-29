import { CgDollar } from "react-icons/cg";
import PropTypes from 'prop-types';
import { IoCheckbox } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const Tabcaard = ({cls}) => {
    const { name, description, price, additionalPerks, imageURL } = cls;

  return (
   <section className="max-w-5xl mx-auto">

    <Link to={'/payment'}>
    <div className="flex flex-col h-full bg-indigo-500">
      <div>
        <img className="h-48 w-full rounded-t-sm" src={imageURL} alt="" />
      </div>
      <div className="bg-gray-100 hover:bg-blue-950 hover:text-white ml-1 pb-8 px-4 flex flex-col flex-grow">
        <div className=''>
          <h1 className='text-5xl font-bold flex  py-5'><CgDollar />{price}</h1>
          <h3 className="font-bold ">{name}</h3>
          <hr className='w-8/12  mt-2 bg-indigo-500 h-1' />
        </div>
        <div className="flex-grow">
          <p className="text-xs mt-5 mb-8"> {description} </p>
       
          
          {/* Conditionally render checkboxes with dynamic sizing */}
          {additionalPerks && (
            <div className="flex flex-col items-start">
              {additionalPerks.map((perk, index) => (
                <p key={index} className={`flex gap-3 items-center ${additionalPerks.length > 3 ? 'text-sm' : 'text-xl'}`}>
                  <IoCheckbox className="text-indigo-500" />
                  {perk}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <button className="  text-white py-3 font-medium flex items-center justify-center gap-4">JOIN NOW <MdKeyboardDoubleArrowRight className="text-2xl" /></button>
    </div>
    </Link>
   </section>
  );
}

Tabcaard.propTypes = {
    cls: PropTypes.object,
}

export default Tabcaard;