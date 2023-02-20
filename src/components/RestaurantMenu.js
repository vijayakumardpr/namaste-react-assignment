import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { restaurantShop, IMGS_URL } from "../constant";

const RestaurantMenu = () => {
  const path = useParams();

  

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const response = await fetch(restaurantShop + path.ids);
    const shop = await response.json();
    console.log(Object.values(shop?.data?.menu?.items));
    setRestaurant(shop?.data);
  }

  if (!restaurant) return <Shimmer />;

  return (
    <div className="restaurantMenu-card">
      <div>
        {restaurant?.cloudinaryImageId && (
          <img src={IMGS_URL + restaurant?.cloudinaryImageId} />
        )}
        <div>{restaurant?.name}</div>
      </div>
      {restaurant?.name && (
        <ul>
          {Object.values(restaurant?.menu?.items).map((el,i) => (
            <li key={i}>{el.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
