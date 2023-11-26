
import moment from "moment";
import { MdOutlineFitnessCenter } from "react-icons/md";
const Footer = () => {
    const yrar = moment().format('YYYY');
    return (
        <div className="bg-slate-600 text-white">
            <footer className="footer p-10  ">
  <aside>
  <div>
        <h3 className="btn btn-ghost text-2xl text-white"><MdOutlineFitnessCenter className="text-2xl" />  POWER PLUS <MdOutlineFitnessCenter className="text-2xl" /> </h3>
        <p className="text-center shadow-2xl text-white"> FITNESS CLUB</p>
        </div>
    <p>Thank you for choosing us as your fitness partner. <br /> Let is embark on this empowering journey together!

<br /> 💪 Power Plus Fitness Club - Where Strength Meets Lifestyle!</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright {yrar} - All right reserved by Power Plus Fitness Club</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;