import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const Favourite = () => {

    const favouriteItems = useSelector(store => store.favourite.items)
    console.log(favouriteItems);

    return (
        <div className="flex flex-wrap">
            {
                favouriteItems.map((item, i) => {
                    return (
                        <Link to={"/restaurants/" + item.id} key={item.id}>
                            <RestaurantCard  {...item} />
                        </Link>)
                })
            }
        </div>
    )
}


export default Favourite