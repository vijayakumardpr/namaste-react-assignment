import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantCard from "../utils/useRestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  
  const { restaurants, allRestaurants, resName, setResName, setRestaurants } =
    useRestaurantCard();

  const isOnline = useOnline();
  
  if (!isOnline)
      return <h1> 🗼Offline, Pls check your internet connection... </h1>;

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
