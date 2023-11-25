import Feature from "../Feature/Feature";
import AboutUs from "../about/AboutUs";
import Bannar from "../bannar/Bannar";



const Home = () => {
    return (
        <div>
          <Bannar></Bannar>
          <Feature></Feature>
          <AboutUs></AboutUs>
        </div>
    );
};

export default Home;