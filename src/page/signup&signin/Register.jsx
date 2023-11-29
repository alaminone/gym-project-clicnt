import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import useAuthHook from "../../HOOK/useAuthHook";
import useAxiosOpen from "../../HOOK/useAxiosOpen";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Register = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuthHook();
    const navigate = useNavigate();
    const axiosopen = useAxiosOpen()

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = { name: data.name, email: data.email }

                        axiosopen.post("/users", userInfo).then((res) => {
                            console.log(res);
                          });

                          toast.success('Register successful!', {
                            duration: 4000, 
                          });

                          navigate('/')
                        })
                        .catch((error) => {
                          console.error("Error during Google sign-in:", error);
                        



                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        < section >
        <Helmet>
            <title>Power | Sign Up</title>
        </Helmet>
        <div className="hero min-h-screen  py-12 ">
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl max-w-5xl mx-auto rounded-lg">
                <div className="w-6/12">
                  <img className="w-full rounded-lg" src={'https://i.ibb.co/jZSL8M3/computer-security-with-login-password-padlock.jpg'} alt="" />
                </div>
                <div className="card  w-6/12 max-w-sm  ">
                    <h3 className="text-4xl font-bold text-center">Register Now</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 8,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-indigo-600 hover:bg-indigo-200 text-white w-full" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="  text-center  rounded-full py-1 text-cente"> Already registered?<Link to={'/login'}><samp className=" font-bold text-indigo-500">Go to log in</samp></Link> </p>
                 
                </div>
                
            </div>
        </div>
    </section>
    );
};

export default Register;