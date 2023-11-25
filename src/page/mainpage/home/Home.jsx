import Feature from "../Feature/Feature";
import AboutUs from "../about/AboutUs";
import Bannar from "../bannar/Bannar";
import Classes from "../classes/Classes";



const Home = () => {
    return (
        <div>
          <Bannar></Bannar>
          <Feature></Feature>
          <AboutUs></AboutUs>
          <Classes></Classes>
        </div>
    );
};

export default Home;