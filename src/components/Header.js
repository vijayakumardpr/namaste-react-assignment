import { IMG_URL } from "../constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import logo from "../assets/images/logo.png";
import DarkLightMode from "../utils/DarkLightMode";

const Header = ({ isLogging }) => {

  const { isDark, setIsDark } = useContext(DarkLightMode)



  return (
    <div className={isDark ? "flex justify-between bg-white shadow sticky top-0 z-10 max-sm:flex-col" : "flex justify-between bg-gray-800 text-white shadow sticky top-0 z-10 max-sm:flex-col"}>
      <a href="/">
        <img className="h-[80px] max-sm:my-0 mx-auto" src={logo} alt="res-logo" />
      </a>
      <nav>
        <ul className="flex m-2 max-sm:flex-col">
          <Link className="p-3" to="/">
            <li >Home</li>
          </Link>
          <li className="p-3">Help</li>
          <Link className="p-3" to="/profile">
            <li>Profile</li>
          </Link>
          <li className="p-3">Cart</li>
          <Link className="p-3" to="instamart"><li>Instamart</li></Link>

          <button className={useOnline() ? "bg-green-500 p-3 text-white" : "bg-red-500 p-3 text-white"}
            // style={{ backgroundColor: useOnline() ? "green" : "red" }}
            onClick={() => isLogging(true)}
          >
            Logout
          </button>
          <button className="p-3" onClick={() => setIsDark(!isDark)}>Dark Mode</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
