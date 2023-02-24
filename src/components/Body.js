import RestaurantCard from "../components/RestaurantCard";
import Authentication from "../components/Authentication";
import Shimmer from "../components/Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

import { listOfRes } from "../constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.163008225945527&lng=77.35719759017229&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
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

  const isOnline = useOnline()

  if(!isOnline) return <h1> 🗼Check your internet connection... </h1>

  //if (restaurants.length === 0) return <h1>No result found</h1>;

  if (allRestaurants?.length === 0) return <Shimmer />;

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          value={resName}
          onChange={(e) => {
            setResName(e.target.value);
            setRestaurants(filterData(e.target.value, allRestaurants));
          }}
        />
        <button
          onClick={
            () => {
              setRestaurants(filterData(resName, allRestaurants));
            }
            // const data = filterData(resName, restaurants);
            // console.log(data);
            // setRestaurants(data);
          }
        >
          Search
        </button>
      </div>
      {restaurants?.length === 0 ? (
        <h1> No data found</h1>
      ) : (
        <div className="restaurant-container">
          {restaurants?.map((items, i) => {
            return (
              <Link
                className="decoration"
                to={"/restaurants/" + items.data.id}
                key={items.data.id}
              >
                <RestaurantCard {...items.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
