import Sectiontitle from "../../../component/sectiontitle/Sectiontitle";

const Feature = () => {
  return (
   <section className=" my-28">

      <Sectiontitle
      subtitle={'Featured '}
      mainTitle={'We Are Create Best'}
      >

      </Sectiontitle>

     <div className="grid grid-cols-2  md:grid-cols-3  mt-20">
      {/* 1 */}
  <div className="bg-white overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:rotate-6 hover:shadow-md">
      <div className="flex justify-center">
        <img
          className="w-20 h-20"
          src="https://i.ibb.co/4Yst0nx/6636-fotor-202311251639.jpg"
          alt="Feature"
        />
      </div>
      <div className="p-6 bg-slate-50">
        <h3 className="text-sm font-bold mb-2 text-gray-800  transition-all duration-300 ease-in-out transform hover:rotate-[-2deg]">Personalized Workout Plans</h3>
        <p className="text-gray-600 overflow-hidden text-justify text-xs">
          Tailored fitness regimens designed by certified trainers to meet your specific goals, whether it is building muscle, losing weight, or improving overall fitness. Achieve results faster with personalized guidance.
        </p>
      </div>
    </div>
      {/* 2 */}
      {/* <div></div> */}
      {/* 3 */}
      <div className="bg-white overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:rotate-6 hover:shadow-md -mt-16">
     <div className=" flex justify-center">
         <img  className="w-20 h-20"
          src={"https://i.ibb.co/0MFrLhG/6636-fotor-202311251136.jpg"}
          alt=""
        />
     </div>
        <div  className="p-6 bg-slate-50">
          <h3  className="text-sm font-bold mb-2 text-gray-800">State-of-the-Art Equipment</h3>
          <p className="text-gray-600 overflow-hidden text-justify text-xs">
            Train with confidence using our top-notch gym equipment. From
            cutting-edge cardio machines to advanced strength training gear, our
            facility is equipped with the latest technology to enhance your
            workout experience.
          </p>
        </div>
      </div>
      {/* 4 */}
      {/* <div></div> */}
      {/* 5 */}
      <div className="bg-white overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:rotate-6 hover:shadow-md">
      <div className=" flex justify-center">
          <img  className="w-20 h-20"
          src={"https://i.ibb.co/SvcZ08W/6636-fotor-202311251454.jpg"}
          alt=""
        />
      </div>
        <div  className="p-6 bg-slate-50">
          <h3  className="text-sm font-bold mb-2 text-gray-800">Virtual Fitness Classes</h3>
          <p className="text-gray-600 overflow-hidden text-justify text-xs">
            Join live virtual fitness classes led by expert instructors. From
            high-intensity interval training (HIIT) to calming yoga sessions,
            our virtual classes bring the gym experience to your home, providing
            flexibility and variety in your fitness routine.
          </p>
        </div>
      </div>
      {/* 6 */}
      {/* <div></div> */}
      {/* secend row */}
      {/* 1 */}
      {/* <div></div> */}
      {/* 2 */}
      <div className="bg-white overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:rotate-6 hover:shadow-md ">
      <div className=" flex justify-center">
          <img  className="w-20 h-20"
          src={"https://i.ibb.co/hXrZBdr/6636-fotor-202311251859.jpg"}
          alt=""
        />
      </div>
        <div  className="p-6 bg-slate-50">
          <h3  className="text-sm font-bold mb-2 text-gray-800">Nutrition Coaching</h3>
          <p className="text-gray-600 overflow-hidden text-justify text-xs">
            Achieve holistic wellness with our nutrition coaching services. Our
            certified nutritionists will guide you on making healthy food
            choices, creating customized meal plans, and optimizing your diet to
            support your fitness goals.
          </p>
        </div>
      </div>
      {/* 3 */}
      {/* <div></div> */}
      {/* 4 */}
      <div className="bg-white overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:rotate-6 hover:shadow-md -mb-16">
     <div className=" flex justify-center">
         <img  className="w-20 h-20"
          src={"https://i.ibb.co/zfLV3ZB/6636-fotor-2023112505710.jpg"}
          alt=""
        />
     </div>
        <div  className="p-6 bg-slate-50">
          <h3  className="text-sm font-bold mb-2 text-gray-800">Progress Tracking and Analytics</h3>
          <p className="text-gray-600 overflow-hidden text-justify text-xs">
            Monitor your fitness journey with our advanced tracking tools. Keep
            tabs on your workout performance, set goals, and track your progress
            over time. Visualize your achievements and stay motivated on the
            path to success.
          </p>
        </div>
      </div>
      {/* 5 */}
      {/* <div></div> */}
      {/* 6 */}
      <div className="bg-white overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:rotate-6 hover:shadow-md">
       <div className=" flex justify-center">
         <img  className="w-20 h-20"
          src={"https://i.ibb.co/dKx5kFY/6636-fotor-2023112511011.jpg"}
          alt=""
        />
       </div>
        <div  className="p-6 bg-slate-50">
          <h3  className="text-sm font-bold mb-2 text-gray-800">24/7 Access and Security</h3>
          <p className="text-gray-600 overflow-hidden text-justify text-xs">
            Enjoy the convenience of round-the-clock gym access with advanced
            security measures in place. Our facilities are designed to
            accommodate your busy schedule, providing a safe and secure
            environment for your workouts at any time of the day.
          </p>
        </div>
      </div>
    </div>
   </section>
  );
};

export default Feature;
