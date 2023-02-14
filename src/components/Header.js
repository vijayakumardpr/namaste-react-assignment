import {IMG_URL} from "../constant"

const Header = () => {
    return (
      <div className="res-header">
        <a href="/">
          <img
            className="restaurent-logo"
            src={IMG_URL}
            alt="res-logo"
          />
        </a>
        <nav className="res-navbar">
          <ul className="res-list-items">
            <li>Offers</li>
            <li>Help</li>
            <li>Profile</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    );
  };

  export default Header