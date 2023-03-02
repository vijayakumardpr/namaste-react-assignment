import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurantCard from "../utils/useRestaurantCard";
import { Link } from "react-router-dom";
import OwlCarousel from "./OwlCarousel";
import Task from "./Task"
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const { restaurants, allRestaurants, resName, setResName, setRestaurants } =
    useRestaurantCard();

  const { isDark, setIsDark } = useContext(UserContext);


  const isOnline = useOnline();

  if (!isOnline) return <Task />

  // if (!isOnline)
  //   return <h1> 🗼Offline, Pls check your internet connection... </h1>;

  if (allRestaurants?.length === 0) return <Shimmer />;


  return (
    <div className={isDark ? "bg-white text-gray-800" : "bg-gray-800 text-white"}>
      <div className="flex justify-center">
        <input
          type="search"
          placeholder="Search"
          className="border border-gray-500 focus:outline-none p-2 w-2/4 text-gray-800"
          value={resName}
          onChange={(e) => {
            setResName(e.target.value);
            setRestaurants(filterData(e.target.value, allRestaurants));
          }}
        />
        <button
          className="py-2 px-4 text-white font-bold bg-orange-400 hover:bg-orange-600"
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
        {/* <input type="text" value={user.user.name}
          onChange={(e) => setUser({ user: { name: e.target.value } })}
        /> */}
      </div>
      {/* <OwlCarousel /> */}
      {restaurants?.length === 0 ? (
        <h1> No data found</h1>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center align-middle my-0 mx-auto">
          {restaurants?.map((items, i) => {
            return (
              <Link to={"/restaurants/" + items.data.id} key={items.data.id}>
                <RestaurantCard {...items.data} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
