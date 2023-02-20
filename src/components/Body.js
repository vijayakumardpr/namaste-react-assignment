import RestaurantCard from "../components/RestaurantCard";
import Authentication from "../components/Authentication";
import Shimmer from "../components/Shimmer";

import { listOfRes } from "../constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.163008225945527&lng=77.35719759017229&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  //let food = "briyani"

  const [resName, setResName] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(API_URL);
    const result = await response.json();
    //console.log(result.data.cards[2].data.data.cards);
    setRestaurants(result?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(result?.data?.cards[2]?.data?.data?.cards);
  }

  function filterData(resName, restaurants) {
    if (resName === "") {
      return allRestaurants;
    } else {
      let filterData = restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(resName.toLowerCase())
      );
      return filterData;
    }
  }

  //if (restaurants.length === 0) return <h1>No result found</h1>;

  if (allRestaurants.length === 0) return <Shimmer />;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={resName}
          onChange={(e) => {
            setResName(e.target.value);
            //setRestaurants(filterData(resName, restaurants));
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
      {restaurants.length === 0 ? (
        <h1> No data found</h1>
      ) : (
        <div className="restaurant-container">
          {restaurants.map((items, i) => {
            return(
                <Link className="decoration" to={"/restaurants/" + items.data.id} key={items.data.id}>
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
