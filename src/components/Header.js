import { IMG_URL } from "../constant";
import {Link} from "react-router-dom"

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
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <li>Cart</li>
          <button onClick={() => isLogging(isTrue)}>Logout</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
