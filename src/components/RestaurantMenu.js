import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { IMGS_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { ids } = useParams();

  const restaurant = useRestaurant(ids);

  if (!restaurant) return <Shimmer />;

  return (
    <div className="flex flex-col">
      <div className="bg-gray-800 flex justify-between text-white sticky top-0 z-10">
        <img className="w-80" src={IMGS_URL + restaurant?.cloudinaryImageId} />
        <div>
          {restaurant?.name}
          {restaurant?.cuisines.join(",")}
        </div>
        <div></div>
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
