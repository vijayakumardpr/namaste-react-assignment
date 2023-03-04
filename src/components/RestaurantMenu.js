import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { IMGS_URL } from "../constant";

import useRestaurant from "../utils/useRestaurant";

import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../utils/cartSlice"
const RestaurantMenu = () => {
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


  // console.log(restaurant);
  return (
    <div className="flex flex-col ">
      <div className="bg-gray-900 flex justify-center p-10 text-white sticky top-0 z-10">
        <img
          className="w-64 rounded-lg"
          src={IMGS_URL + restaurant?.cloudinaryImageId}
        />
        <div className="flex flex-col gap-3 mx-12">
          <div className="text-3xl">{restaurant?.name}</div>
          <div className="text-gray-400 font-semibold text-sm">
            {restaurant?.cuisines.join(", ")}
          </div>
          <div className="text-gray-400 font-semibold text-sm">
            {restaurant?.locality}, {restaurant?.area}
          </div>
          <div className="flex gap-6">
            <div>
              <div className="font-bold text-[17px]">
                ⭐{restaurant?.avgRatingString}
              </div>
              <div className="text-sm text-gray-400">
                {restaurant?.totalRatingsString}
              </div>
            </div>
            <div>
              <div className="font-bold text-[17px]">
                {restaurant?.sla?.slaString.toLowerCase()}
              </div>
              <div className="text-sm text-gray-400">Delivery Time</div>
            </div>
            <div>
              <div className="font-bold text-[17px]">
                ₹{restaurant?.costForTwo / 100}
              </div>
              <div className="text-sm text-gray-400">Cost for two</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="border border-white h-44">
              <div className="text-lg font-bold p-2">OFFER</div>
              {restaurant?.offerMeta?.map((el, i) => (
                <div key={i}>
                  <div>{el.header}</div>
                  <div>{el.coupon_code}|{el.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* {console.log(Object.values(restaurant?.menu?.items))} */}

      {/* <button className="p-2 m-2 bg-blue-600" onClick={() => handleItem()}>Add Item</button>
      <button className="p-2 m-2 bg-red-600" onClick={() => clearCarts()}>clearCart</button> */}
      <div>
        {Object.values(restaurant?.menu?.items).map((item, i) => (
          <div
            key={i}
            className="my-5 py-5 flex justify-center items-center gap-4 "
          >
            <div className="w-2/6">
              <div>{item?.name}</div>
              <div>₹{item?.price / 100}.00</div>
              <div>{item?.description}</div>
            </div>
            <div>
              {item?.cloudinaryImageId != "" &&
                item?.cloudinaryImageId != undefined && (
                  <img
                    className="h-16 w-24 rounded-md"
                    src={IMGS_URL + item?.cloudinaryImageId}
                  />
                )}
              <button className="w-24 text-xs py-2 font-bold text-green-700 border-[1px] border-gray-300" onClick={() => handleItem(item)}>
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
