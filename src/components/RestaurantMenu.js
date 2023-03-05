import Shimmer from "../components/Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMGS_URL } from "../constant";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { IoIosTime } from "react-icons/io"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../utils/cartSlice"
import { favouriteItem } from "../utils/favouriteSlice"

const RestaurantMenu = () => {
  const [isFavourite, setIsFavourite] = useState(true)

  const { ids } = useParams();

  const dispatch = useDispatch()

  const restaurant = useRestaurant(ids);

  if (!restaurant) return <Shimmer />;


  function handleItem(item) {
    dispatch(addItem(item))
  }

  function clearCarts() {
    dispatch(clearCart())
  }

  function favouriteShop(item) {
    dispatch(favouriteItem(item))
    setIsFavourite(!isFavourite)
  }
  console.log(isFavourite);
  return (
    <div className="flex flex-col p-10 max-w-4xl my-0 mx-auto overflow-hidden">
      <div className="flex flex-col ">
        <div className="flex justify-end text-2xl" onClick={() => favouriteShop(restaurant)}>{isFavourite ? <AiOutlineHeart /> : <AiFillHeart />}</div>
        <div className="flex justify-between border-dashed border-b border-gray-400 py-4">
          <div>
            <div className="font-bold text-gray-800 text-lg mb-2">{restaurant?.name}</div>
            <div className="text-sm text-gray-500">{restaurant?.cuisines.join(",")}</div>
            <div className="text-sm text-gray-500">{restaurant?.area},{restaurant?.sla?.lastMileTravel} km</div>
          </div>
          <div className="px-2 border rounded-lg flex flex-col justify-center items-center gap-2">
            <div className="flex items-center text-green-600 font-bold"><AiFillStar />{restaurant?.avgRatingString}</div>
            <div className="w-12 h-[1px] bg-gray-300"></div>
            <div className="text-[11px] text-gray-400 font-bold tracking-tighter ">{restaurant?.totalRatingsString}</div>
          </div>
        </div>
        <div className="flex py-4 font-bold text-gray-700">
          <div className="flex items-center text-sm"><IoIosTime /><div className="ml-1">{restaurant?.sla?.slaString} </div></div>
          <div className="flex items-center ml-5 text-sm"><HiOutlineCurrencyRupee /><div className="ml-1">{restaurant?.costForTwoMsg}</div></div>
        </div>
        <div className="flex gap-3">
          {restaurant?.offerMeta?.map((el, i) => (
            <div key={i} className="border rounded-lg py-2">
              <div className="flex items-center">
                <img className="w-6" src={IMGS_URL + el.offer_logo} alt="" />
                <div className="text-[12px] font-bold text-gray-700 ml-1">{el.header}</div>
              </div>
              <div className="text-[10px] font-semibold text-gray-500">{el.coupon_code} | {el.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* {console.log(Object.values(restaurant?.menu?.items))} */}

      {/* <button className="p-2 m-2 bg-blue-600" onClick={() => handleItem()}>Add Item</button>
      <button className="p-2 m-2 bg-red-600" onClick={() => clearCarts()}>clearCart</button> */}
      <div>
        <div className="text-xl font-bold text-gray-800 my-4">Recommand({restaurant?.menu?.widgets[0].entities?.length})</div>
        {Object.values(restaurant?.menu?.items).map((item, i) => (
          <div
            key={i}
            className="my-5 py-5 flex justify-between gap-4 "
          >

            <div className="max-w-xl flex flex-col gap-2">
              <div>
                <div className="font-semibold text-gray-800 mb-1">{item?.name}</div>
                <div className="text-sm">₹{item?.defaultPrice / 100 || item?.price / 100}</div>
              </div>
              <div className="text-gray-400 text-sm">{item?.description}</div>
            </div>
            <div>
              {item?.cloudinaryImageId != "" &&
                item?.cloudinaryImageId != undefined && (
                  <img
                    className="h-16 w-24 rounded-md"
                    src={IMGS_URL + item?.cloudinaryImageId}
                  />
                )}
              <button className="w-24 text-xs py-2 font-bold text-green-700 shadow rounded-md border border-gray-300" onClick={() => handleItem(item)}>
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
