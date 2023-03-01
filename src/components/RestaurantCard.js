import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  //console.log(cloudinaryImageId);
  // console.log(useState);

  const { user } = useContext(UserContext)
  return (
    <div className="w-72 p-3 flex flex-col gap-2 shadow-lg overflow-hidden">
      <img
        className="hover:scale-105 rounded-lg"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="dish"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <h5 className="text-sm text-gray-500">{cuisines.join(", ")}</h5>
      <h5 className="text-sm">{avgRating}</h5>
      <h5>QUICK VIEW</h5>
      <div>{user.user.name}</div>
    </div>
  );
};

export default RestaurantCard;
