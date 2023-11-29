import { Link } from "react-router-dom";
import Navbar from "../../share/navbar/Navbar";
import Footer from "../../share/footer/Footer";


const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={'https://i.ibb.co/vmsDBYt/Na-Nov-26.jpg'} alt="" />

           <Link to={'/'}>
           <button className="btn btn-outline my-10">back home </button></Link>

           <Footer></Footer>
        </div>
    );
};

export default Error;