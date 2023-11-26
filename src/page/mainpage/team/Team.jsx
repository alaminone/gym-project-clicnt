import { Helmet } from "react-helmet";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useKeenSlider } from "keen-slider/react";
import { MdMarkEmailRead } from "react-icons/md";
import "keen-slider/keen-slider.min.css";
import "./Team.css"; 
import Sectiontitle from "../../../component/sectiontitle/Sectiontitle";

const Team = () => {
  

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });

  return (
  <div >
      <section className="team-section my-20 w-full md:w-8/12 mx-auto mb-96">
      <Helmet>
        <title>Bistro Boss | Team</title>
      </Helmet>
      <Sectiontitle subtitle="Meet Our Team" />
      <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 bg-black">
        <div>
<img className="" src={"https://i.ibb.co/7VWzR20/medium-shot-smiley-man-gym-fotor-20231126124340.jpg"} alt="" />
        </div>
        <div className="bg-blue-950 mx-4 md:mx-16 text-white md:py-10 py-4 md:px-5 -mt-10 opacity-90">
            <h2 className="font-bold md:text-lg"> Alamin Shaikh</h2>
            <p> Fitness Trainer</p>
            <p className="md:text-3xl flex justify-evenly mt-4">
            <FaFacebookSquare />
            <FaInstagram />
            <MdMarkEmailRead />
             </p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 bg-black">
        <div>
<img className="" src={"https://i.ibb.co/d20Lvx7/front-view-male-training-with-weights-fotor-20231126134933.jpg"} alt="" />
        </div>
        <div className="bg-blue-950 mx-4 md:mx-16 text-white md:py-10 py-4 md:px-5 -mt-10 opacity-90">
            <h2 className="font-bold md:text-lg"> Mike Johnson</h2>
            <p> Fitness Trainer</p>
            <p className="md:text-3xl flex justify-evenly mt-4">
            <FaFacebookSquare />
            <FaInstagram />
            <MdMarkEmailRead />
             </p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 bg-black">
        <div>
<img className="" src={"https://i.ibb.co/Kw81K5F/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall-fotor-20231126134349.jpgs"} alt="" />
        </div>
        <div className="bg-blue-950 mx-4 md:mx-16 text-white md:py-10 py-4 md:px-5 -mt-10 opacity-90">
            <h2 className="font-bold md:text-lg"> Sarah Labib</h2>
            <p> Fitness Trainer</p>
            <p className="md:text-3xl flex justify-evenly mt-4">
            <FaFacebookSquare />
            <FaInstagram />
            <MdMarkEmailRead />
             </p>
        </div>
      </div>
      
     
     
    </div>
    </section>
  </div>
  );
};

export default Team;
