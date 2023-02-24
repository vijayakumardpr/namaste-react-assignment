import { useState, useEffect } from "react";
import {IMG_URL_RESTAURANTMENU} from "../constant"

const useRestaurant = (ids) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const response = await fetch(IMG_URL_RESTAURANTMENU + ids);
    const shop = await response.json();
    console.log(Object.values(shop?.data?.menu?.items));
    setRestaurant(shop?.data);
  }
  return restaurant;
};

export default useRestaurant;
