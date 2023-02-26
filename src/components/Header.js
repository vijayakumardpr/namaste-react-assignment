import { IMG_URL } from "../constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = ({ isLogging }) => {
  let isTrue = true;
  return (
    <div className="flex justify-between bg-white shadow sticky top-0 z-10">
      <a href="/">
        <img className="h-[80px]" src={IMG_URL} alt="res-logo" />
      </a>
      <nav>
        <ul className="flex m-2">
          <li className="p-3">Offers</li>
          <li className="p-3">Help</li>
          <Link className="p-3" to="/profile">
            <li>Profile</li>
          </Link>
          <li className="p-3">Cart</li>
          <Link className="p-3" to="instamart"><li>Instamart</li></Link>
          
          <button className={useOnline()?"bg-green-500 p-3 text-white":"bg-red-500 p-3 text-white"}
            // style={{ backgroundColor: useOnline() ? "green" : "red" }}
            onClick={() => isLogging(isTrue)}
          >
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
