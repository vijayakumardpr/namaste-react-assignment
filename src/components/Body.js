import RestaurantCard from "../components/RestaurantCard";
import { listOfRes } from "../constant";
import { useState } from "react";

function filterData(resName, restaurants) {
  if (resName === "") {
    return listOfRes;
  } else {
    let filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(resName.toLowerCase())
    );
    return filterData;
  }
}

function add(){
  console.log("add");
}
const Body = () => {
  //let food = "briyani"

  const [resName, setResName] = useState("");
  const [restaurants, setRestaurants] = useState(listOfRes);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={resName}
          onChange={(e) => {
            setResName(e.target.value);
          }}
        />
        <button
          onClick={()=> {setRestaurants(filterData(resName, restaurants))}
            // const data = filterData(resName, restaurants);
            // console.log(data);
            // setRestaurants(data);
            
          }
        >
          Search
        </button>
      </div>

      <div className="restaurant-container">
        {restaurants.map((items, i) => {
          return <RestaurantCard key={items.data.id} {...items.data} />;
        })}
      </div>
    </>
  );
};

export default Body;



