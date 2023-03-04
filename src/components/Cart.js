import { useSelector, useDispatch } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    //console.log(cartItems);
    const dispatch = useDispatch()

    function removeAll() {
        dispatch(clearCart())
    }

    if (cartItems.length === 0) return <div className="text-center text-2xl">Your cart is empty</div>
    return (
        <div className="flex flex-col m-5">
            {cartItems.map((item, i) => {
                return <CartItem key={i} {...item} />
            })}
            {(cartItems.length != 0) && <button className="p-2 m-5 bg-red-900" onClick={() => removeAll()}>Clear Cart</button>}
        </div>
    )
}

export default Cart