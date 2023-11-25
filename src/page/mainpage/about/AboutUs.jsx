import Sectiontitle from "../../../component/sectiontitle/Sectiontitle";
import { IoCheckbox } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
const AboutUs = () => {
  return (
    <section className="max-w-5xl mx-auto py-12  " >
          <Sectiontitle
            subtitle={'about us'}
            mainTitle={''}
            ></Sectiontitle>
      <div className="flex gap-8 mt-16 mx-3 ">
        {/* Left Section */}
        <div className="flex-1 pr-9 ">
          
          <div className="">
            <h3 className="text-xl md:text-5xl font-bold mb-4">We are Create Best Training Fitness </h3>
            <p className="text-gray-600 text-justify text-xs">
            Welcome to our fitness haven, where we believe in sculpting both body and mind. At our gym, we are dedicated to fostering a community of health enthusiasts. Our state-of-the-art facilities, expert trainers, and personalized programs ensure that every fitness journey is a success story. Join us on the path to a healthier, stronger, and happier you. Embrace the vitality that comes with a lifestyle committed to wellness at our gym.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 my-4">
                <p className="flex gap-3"><IoCheckbox className="text-indigo-500 text-xl"></IoCheckbox>   Flexible Time</p>
                <p className="flex gap-3"><IoCheckbox className="text-indigo-500 text-xl"></IoCheckbox>   High Quality Gym</p>
                <p className="flex gap-3"><IoCheckbox className="text-indigo-500 text-xl"></IoCheckbox>   Membership Cards</p>
                <p className="flex gap-3"><IoCheckbox className="text-indigo-500 text-xl"></IoCheckbox>   Personal Training</p>
            </div>
            <p className="text-gray-600 text-justify text-xs">
             Join us on the path to a healthier, stronger, and happier you. Embrace the vitality that comes with a lifestyle committed to wellness at our gym.
            </p>
           
          </div>
          <button className=" btn  btn-outline mt-10 text-indigo-500 text-sm  py-3 md:px-5 px-2 flex items-center md:gap-4 ">ABOUT MORE <MdKeyboardDoubleArrowRight className="md:text-2xl" /></button>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative">
          {/* 1st Image */}
          <div className="flex justify-end mb-6 ml-10">
            <img className="w-4/6 h-4/6 rounded-md" src="https://i.ibb.co/LtycT7g/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.png" alt="" />
           
          </div>
          <h3 className="flex justify-end">
            ggggg
          </h3>

          {/* 2nd Image */}
          <div className="absolute top-1/4 right-0 -bottom-8">
            <img className="w-6/12 h-6/12 border-r-[16px] border-t-[16px] border-white rounded-md" src="https://i.ibb.co/2FbCfKW/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


// style={{
//     background: `rgba(0, 0, 0, 0.5) url("https://i.ibb.co/tBbQtQK/victor-freitas-h-Ou-JYX2-K5-DA-unsplash.jpg")`,
//     backgroundBlendMode: 'multiply',
//     backgroundAttachment: 'fixed',
//     height: '800px',
//     position: 'relative',
//     overflow: 'hidden',
//   }}