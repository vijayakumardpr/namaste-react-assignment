import { useState, useEffect } from "react";
import { API_URL } from "../constant";

const useRestaurantCard = () => {
  const [resName, setResName] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(API_URL);
    const result = await response.json();
    setRestaurants(result?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(result?.data?.cards[2]?.data?.data?.cards);
  }

  return { restaurants, allRestaurants, resName, setRestaurants, setResName };
};

export default useRestaurantCard;
