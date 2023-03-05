import { useSelector } from "react-redux"
import RestaurantCard from "./RestaurantCard";

const Favourite = () => {

    const favouriteItems = useSelector(store => store.favourite.items)
    console.log(favouriteItems);

    return (
        <div className="flex flex-wrap">
            {
                favouriteItems.map((item, i) => {
                    return <RestaurantCard key={i} {...item} />
                })
            }
        </div>
    )
}


export default Favourite