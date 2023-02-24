import { IMG_URL } from "../constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = ({ isLogging }) => {
  let isTrue = true;
  return (
    <div className="res-header">
      <a href="/">
        <img className="restaurent-logo" src={IMG_URL} alt="res-logo" />
      </a>
      <nav className="res-navbar">
        <ul className="res-list-items">
          <li>Offers</li>
          <li>Help</li>
          <Link className="decoration" to="/profile">
            <li>Profile</li>
          </Link>
          <li>Cart</li>
          <Link to="instamart"><li>Instamart</li></Link>
          
          <button
            style={{ backgroundColor: useOnline() ? "green" : "red" }}
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
