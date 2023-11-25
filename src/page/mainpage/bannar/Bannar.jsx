import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Bannar = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
    <div className="keen-slider__slide number-slide1 relative">
      {/*  */}
      <div>
        <img src={'https://i.ibb.co/n8ym0XZ/brunette-woman-doing-battle-rope-training-fotor-2023112414555.jpg'} alt="" />
      </div>
      {/*  */}
      <div className="absolute flex h-full items-center   right-0 bottom-0 gap-5 bg-gradient-to-r from-[rgba(21, 21, 21, 0.00)] to-[#151515] text-white">
      <div className="banner-content text-white space-y-7 pl-4 md:pl-14 w-full">
    <h1 className="banner-title text-3xl md:text-6xl font-bold">Total Body Wellness</h1>
    <p className="banner-description text-xs md:text-xl">
      Experience total body wellness with our holistic approach to
      fitness.
    </p>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white">Our Classes</button>
  </div>
      </div>
      
    </div>
    <div className="keen-slider__slide number-slide2">
    <div>
        <img src={'https://i.ibb.co/HCt08Xt/young-fitness-man-studio-fotor-2023112414597.jpg'} alt="" />
      </div>
      {/*  */}
      <div className="absolute flex h-full items-center   left-0 top-0 gap-5 bg-gradient-to-r from-[rgba(21, 21, 21, 0.00)] to-[#151515] text-white">
      <div className="banner-content text-white space-y-7 pl-4 md:pl-14 w-full">
    <h1 className="banner-title text-3xl md:text-6xl font-bold">Elevate Your Fitness</h1>
    <p className="banner-description text-xs md:text-xl">
    Achieve your fitness goals with our expert trainers.
    </p>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white">Our Classes</button>
  </div>
      </div>
    </div>
    <div className="keen-slider__slide number-slide3">
    <div>
        <img src={'https://i.ibb.co/YLBJtqk/woman-holding-weights-near-barbells-fotor-2023112414584.jpg'} alt="" />
      </div>
      {/*  */}
      <div className="absolute flex h-full items-center   left-0 top-0 gap-5 bg-gradient-to-r from-[rgba(21, 21, 21, 0.00)] to-[#151515] text-white">
      <div className="banner-content text-white space-y-7 pl-4 md:pl-14 w-full">
    <h1 className="banner-title text-3xl md:text-6xl font-bold">Strength Redefined</h1>
    <p className="banner-description text-xs md:text-xl">
    Build strength and endurance with our diverse workout programs.
    </p>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white">Our Classes</button>
  </div>
      </div>
    </div>
    <div className="keen-slider__slide number-slide4">
    <div>
        <img src={'https://i.ibb.co/gJWp5Sf/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club-fotor-2023112415048.jpg'} alt="" />
      </div>
      {/*  */}
      <div className="absolute flex h-full items-center   left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white">
      <div className="banner-content text-white space-y-7 pl-4 md:pl-14 w-full">
    <h1 className="banner-title text-3xl md:text-6xl font-bold">Unleash Your Potential</h1>
    <p className="banner-description text-xs md:text-xl">
    Unlock your true potential with our personalized fitness plans.
    </p>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white">Our Classes</button>
  </div>
      </div>
    </div>
    <div className="keen-slider__slide number-slide5">
    <div>
        <img src={'https://i.ibb.co/F3RfgWk/dumbbells-floor-gym-ai-generative-fotor-20231124145722.jpg'} alt="" />
      </div>
      {/*  */}
      <div className="absolute flex h-full items-center   left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white">
      <div className="banner-content text-white space-y-7 pl-4 md:pl-14 w-full">
    <h1 className="banner-title text-3xl md:text-6xl font-bold">Focused Workouts</h1>
    <p className="banner-description text-xs md:text-xl">
    Get focused and achieve results with our tailored workout plans.  </p>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white">Our Classes</button>
  </div>
      </div>
    </div>
    <div className="keen-slider__slide number-slide6">
    <div>
        <img src={'https://i.ibb.co/nBhB5HW/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.jpg'} alt="" />
      </div>
      {/*  */}
      <div className="absolute flex h-full items-center   left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white">
      <div className="banner-content text-white space-y-7 pl-4 md:pl-14 w-full">
    <h1 className="banner-title text-3xl md:text-6xl font-bold">Total Body Wellness</h1>
    <p className="banner-description text-xs md:text-xl">
    Experience total body wellness with our holistic approach to
      fitness.  </p>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white">Our Classes</button>
  </div>
      </div>
    </div>
  </div>
  );
};

export default Bannar;




