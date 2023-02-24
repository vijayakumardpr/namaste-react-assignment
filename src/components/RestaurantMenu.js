import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { IMGS_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { ids } = useParams();

  const restaurant = useRestaurant(ids);

 

  if (!restaurant) return <Shimmer />;

  return (
    <div className="restaurantMenu-card">
      <div>
        <img src={IMGS_URL + restaurant?.cloudinaryImageId} />
        <div>{restaurant?.name}</div>
      </div>
      <ul>
        {Object.values(restaurant?.menu?.items).map((el, i) => (
          <li key={i}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
