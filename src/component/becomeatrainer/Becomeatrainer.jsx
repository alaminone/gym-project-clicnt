
import useAuthHook from "../../HOOK/useAuthHook";
import Sectiontitle from "../sectiontitle/Sectiontitle";
import { useForm } from "react-hook-form";
import useAxiosOpen from "../../HOOK/useAxiosOpen";
import Swal from "sweetalert2";



const img_hosting_token = "e0e97842c0888508ae58176d4f6aeb0d";
const img_hosting_Api = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const Becomeatrainer = () => {

  const axiosopen = useAxiosOpen()

    const {user ,loading} = useAuthHook();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = async (data ,e) => {

      const imagefile = { image: data.image[0] };

      const res = await axiosopen.post(img_hosting_Api, imagefile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      try {
        const img = res.data.data.url
      console.log(img)
        const userInfo = {
          application:data.application,
          name: data.name,
          email:user.email,
          age: data.age,
          Image: img,
          skills: data.skills,
          availableTimeWeek: data.availableTimeWeek,
          timeSlots: data.timeSlots,
          Experience: data.Experience,
          duration:data.duration,
         
        };
  
       
        const response = await axiosopen.post(`/users/become/${user.email}`, userInfo);

        // console.log(user.email)

        console.log(response)
  
        if (response.data.message) {
          
       e?.target?.reset()
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: `${user.name} Applycation is Success`,
            showConfirmButton: false,
            timer: 1500,
          });
        } 

      } catch (error) {
        console.error('Error patching user data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    };

     if(loading) return <progress className="progress  flex justify-center items-center w-full"></progress>
    

  return (
    <div className="py-28">
    <Sectiontitle subtitle={'Become a Trainer'} mainTitle={'Application Form'}></Sectiontitle>
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-6 bg-white rounded-md shadow-md ">
  <div className="grid grid-cols-2 gap-7">
  <div className="mb-4">
  <label className="block text-sm font-bold mb-2" htmlFor="application">
    Application
  </label>
  <select
    {...register("application", {required: true })}
    name="application"
    className="w-full p-2 border rounded-md"
  >
    <option value="" disabled>Select an Option</option>
    <option value="trainer">Trainer</option>
   
  </select>
  {errors.application && <span className="text-red-600">Please select an option</span>}
</div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          {...register("name", { required: true })}
          name="name"
          placeholder="Full Name"
          className="w-full p-2 border rounded-md"
        />
        {errors.name && <span className="text-red-600">Full Name is required</span>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email (read-only)
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          name="email"
          placeholder="Email"
          defaultValue={user.email}
          className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
          readOnly
        />
        {errors.email && <span className="text-red-600">Email is required</span>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          {...register("age", { required: true })}
          name="age"
          placeholder="Age"
          className="w-full p-2 border rounded-md"
        />
        {errors.age && <span className="text-red-600">Age is required</span>}
      </div>

      <div className="form-control w-full my-6 border rounded-md">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div className="mb-4">
  <label className="block text-sm font-bold mb-2">Skills (Select multiple)</label>
  <div className="flex flex-wrap">
    <label className="flex items-center mr-4 mb-2">
      <input type="checkbox" {...register("skills")} value="StrengthTraining" />
      <span className="ml-2">Strength Training</span>
    </label>
    <label className="flex items-center mr-4 mb-2">
      <input type="checkbox" {...register("skills")} value="Cardio" />
      <span className="ml-2">Cardio</span>
    </label>
    <label className="flex items-center mr-4 mb-2">
      <input type="checkbox" {...register("skills")} value="Yoga" />
      <span className="ml-2">Yoga</span>
    </label>
    <label className="flex items-center mr-4 mb-2">
      <input type="checkbox" {...register("skills")} value="Pilates" />
      <span className="ml-2">Pilates</span>
    </label>
    <label className="flex items-center mr-4 mb-2">
      <input type="checkbox" {...register("skills")} value="HIIT" />
      <span className="ml-2">HIIT (High-Intensity Interval Training)</span>
    </label>
    <label className="flex items-center mr-4 mb-2">
      <input type="checkbox" {...register("skills")} value="FlexibilityTraining" />
      <span className="ml-2">Flexibility Training</span>
    </label>
    
  </div>
</div>


      <div className="mb-4 ">
  <label className="block text-sm font-bold mb-2">Available Time in a Day</label>
  <div className="flex flex-wrap gap-4">
    <label className="flex items-center">
      <input type="checkbox" {...register("availableTimeWeek", { required: true })} value="Monday" />
      <span className="ml-2">Monday</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" {...register("availableTimeWeek", { required: true })} value="Tuesday" />
      <span className="ml-2">Tuesday</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" {...register("availableTimeWeek", { required: true })} value="Wednesday" />
      <span className="ml-2">Wednesday</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" {...register("availableTimeWeek", { required: true })} value="Thursday" />
      <span className="ml-2">Thursday</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" {...register("availableTimeWeek", { required: true })} value="Friday" />
      <span className="ml-2">Friday</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" {...register("availableTimeWeek", { required: true })} value="Saturday" />
      <span className="ml-2">Saturday</span>
    </label>
    <label className="flex items-center">
      <input type="checkbox" {...register("availableTimeWeek", { required: true })} value="Sunday" />
      <span className="ml-2">Sunday</span>
    </label>
  </div>
  {errors.availableTimeWeek && <span className="text-red-600">At least one day is required</span>}
</div>
<div className="mb-4">
  <label className="block text-sm font-bold mb-2" htmlFor="availableTimeDay">
    Available Time in a Day
  </label>
  <div className="">

     
   
    <div>
      <label className="block text-sm font-bold mb-2">Select Time Slots <span className="text-rose-400">(Seclect Any 6 Slot)*</span> </label>
      <div className="flex flex-wrap gap-4">
      <label className="block text-sm font-bold mb-2">Day Shift</label> <br />
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots",{ required: true })} value="6am-7am" />
          <span className="ml-2">6am-7am</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="7am-8am" />
          <span className="ml-2">7am-8am</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="8am-9am" />
          <span className="ml-2">8am-9am</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="9am-10am" />
          <span className="ml-2">9am-10am</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="10am-11am" />
          <span className="ml-2">10am-11am</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="11am-12am" />
          <span className="ml-2">11am-12am</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="12am-1pm" />
          <span className="ml-2">12am-1pm</span>
        </label> <br />

        <label className="block text-sm font-bold mb-2">Evening Shift</label><br />
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="5pm-6pm" />
          <span className="ml-2">5pm-6pm</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="6pm-7pm" />
          <span className="ml-2">6pm-7pm</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="7pm-8pm" />
          <span className="ml-2">7pm-8pm</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="8pm-9pm" />
          <span className="ml-2">8pm-9pm</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="8pm-9pm" />
          <span className="ml-2">8pm-9pm</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="10pm-11pm" />
          <span className="ml-2">10pm-11pm</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="11pm-12pm" />
          <span className="ml-2">11pm-12pm</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("timeSlots" ,{ required: true })} value="12pm-1am" />
          <span className="ml-2">12pm-1am</span>
        </label>
       
      </div>
      {errors.timeSlots && <span className="text-red-600">Please select at least one time slot</span>}
    </div>
  </div>
</div>


      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="Experience">
        Experience
        </label>
        <input
        type="number"
          {...register("Experience", { required: true })}
          name="Experience"
          
          placeholder="Experience"
          className="w-full p-2 border rounded-md"
        />
        {errors.Experience && <span className="text-red-600">Experience is required</span>}
      </div>
  </div>

      <div className="mb-4">
        <button type="submit" className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
          Apply now
        </button>
      </div>
    </form>
  </div>
);
};
export default Becomeatrainer;


