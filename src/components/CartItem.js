import { IMGS_URL } from "../constant"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../utils/cartSlice"

const CartItem = ({ cloudinaryImageId, name, price, id, defaultPrice, quantity }) => {

    let cartItems = useSelector(store => store.cart.items)

    // const dispatch = useDispatch()


    // function deleteItem(id) {
    //     dispatch(removeItem(id))
    // }

    const total = cartItems.find(item => item.id === id)

    console.log(cartItems);

    return (
        <div className="flex my-3 p-2 border border-gray-700 justify-between items-center">
            <img className="w-24" src={IMGS_URL + cloudinaryImageId} alt={name} />
            <div className="flex flex-col items-center">
                <div>{name}</div>
                <div>₹{defaultPrice / 100 | price / 100}  * {quantity}</div>
            </div>
            <div>₹{(defaultPrice / 100 | price / 100) * total.quantity} </div>
        </div>
    )
}

export default CartItem