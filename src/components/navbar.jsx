import Header from "./Header";
import About from "../pages/About";
import Herosection from "./Herosection";
import { ShootingStarsAndStarsBackgroundDemo } from "./ShootingStarsAndStarsBackgroundDemo";

const Navbar = ({ children }) => {
  return (

     

      <div className="navmain flex flex-col md:flex-row w-full  overflow-hidden   ">
        <div className=" w-full md:w-[15%] md:h-[79vh] h-auto ">
          <Header />

        </div>
        <div className="children w-full m-0 p-0  md:overflow-auto md:h-[86vh] bg-[#0e2527]">
          <div className="lg:overflow-auto lg:h-[75vh] h-auto  my-5 ">
            <ShootingStarsAndStarsBackgroundDemo>
            {children}
            </ShootingStarsAndStarsBackgroundDemo>
          </div>
        </div>
      </div>
  
  );
};

export default Navbar;
