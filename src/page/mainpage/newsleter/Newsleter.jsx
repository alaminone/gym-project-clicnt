import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosOpen from "../../../HOOK/useAxiosOpen";
import Swal from 'sweetalert2';
import Sectiontitle from "../../../component/sectiontitle/Sectiontitle";

const Newsleter = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const axiosopen = useAxiosOpen();

  const onSubmit = async (data) => {
    try {
      const userInfo = { name: data.name, email: data.email };
      await axiosopen.post("/subscriber", userInfo);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Thank you for subscribing!",
        showConfirmButton: false,
        timer: 1500
      });

      reset();
      console.log("Subscription successful!");
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  return (
    <section className="my-20 max-w-7xl mx-auto">
      <Helmet>
        <title>Power | Home</title>
      </Helmet>
      <div className="hero min-h-screen py-12">
        <div className="hero-content flex flex-col md:flex-row-reverse lg:pb-20 shadow-2xl bg-yellow-400 md:px-20 rounded-lg">
          <div className="w-full md:w-7/12 lg:-mt-36">
            <img className="w-full rounded-lg" src={'https://i.ibb.co/njgqmdd/7618934-fotor-20231126103056.jpg'} alt="" />
          </div>
          <div className="card w-full md:w-6/12 lg:-mb-44 bg-yellow-400 md:pt-20">
            <Sectiontitle subtitle={'welcome'} 
            mainTitle={'Our Community'}
            />
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-purple-500">Name is required</span>}
              </div>
              <div className="form-control">
                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                {errors.email && <span className="text-purple-500">Email is required</span>}
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-purple-600 hover:bg-red-500 text-white w-full" type="submit" value="Subscribe Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsleter;
