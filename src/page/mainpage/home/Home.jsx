import Feature from "../Feature/Feature";
import AboutUs from "../about/AboutUs";
import Bannar from "../bannar/Bannar";
import Classes from "../classes/Classes";
import Newsleter from "../newsleter/Newsleter";
import Successstory from "../successstory/Successstory";



const Home = () => {
    return (
        <div>
          <Bannar></Bannar>
          <Feature></Feature>
          <AboutUs></AboutUs>
          <Classes></Classes>
          <Successstory></Successstory>
          <Newsleter></Newsleter>
        </div>
    );
};

export default Home;