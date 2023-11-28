import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import useAuthHook from "../../HOOK/useAuthHook";
import Googlelogin from "../../component/Googlelogin/Googlelogin";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthHook();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate('/dashboard');
      });
  };

  return (
    <div className="mx-auto bg-white p-8 rounded-lg shadow-md flex w-9/12 py-28">
      <Helmet>
        <title>Dhaka Spice | Login</title>
      </Helmet>
      <div className="text-center mb-8 w-6/12">
        <img src={'https://i.ibb.co/jZSL8M3/computer-security-with-login-password-padlock.jpg'} alt="Authentication" className="w-full rounded-lg" />
        
      </div>
      <div className="w-6/12">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 flex items-center">
              <span>Email</span>
            </label>
            <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 flex items-center">
              <span>Password</span>
            </label>
            <input type="password" name="password" placeholder="Your password" className="input input-bordered w-full" />
          </div>
          <div className="mt-6">
            <input className="btn bg-indigo-600 hover:bg-indigo-200 text-white w-full" type="submit" value="Login" />
          </div>
        </form>
     <p className="text-right my-4">
     <Link to={'/register'} className="font-bold text-indigo-500 ">Create a New Account</Link>
     </p>
     <Googlelogin></Googlelogin>
      </div>
    </div>
  );
};

export default Login;
