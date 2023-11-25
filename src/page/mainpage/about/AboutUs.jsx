import Sectiontitle from "../../../component/sectiontitle/Sectiontitle";


const AboutUs = () => {
  return (
    <section className=" mx-3 py-12">
          <Sectiontitle
            subtitle={'about us'}
            mainTitle={''}
            ></Sectiontitle>
      <div className="flex gap-8 mt-16">
        {/* Left Section */}
        <div className="flex-1 pr-9">
          
          <div className="">
            <h3 className="text-xl md:text-4xl font-bold mb-4">We are Create Best Training Fitness </h3>
            <p className="text-gray-600 text-justify text-xs">
            Welcome to our fitness haven, where we believe in sculpting both body and mind. At our gym, we are dedicated to fostering a community of health enthusiasts. Our state-of-the-art facilities, expert trainers, and personalized programs ensure that every fitness journey is a success story. Join us on the path to a healthier, stronger, and happier you. Embrace the vitality that comes with a lifestyle committed to wellness at our gym.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative">
          {/* 1st Image */}
          <div className="flex justify-end mb-6 ml-10">
            <img className="w-4/6 h-4/6 rounded-md" src="https://i.ibb.co/LtycT7g/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.png" alt="" />
          </div>

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
