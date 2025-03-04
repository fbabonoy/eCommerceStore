import { useContext } from "react";
import { CartContent } from "../component/CartData";

function CartPage() {

    const { cartData, addToCart } = useContext(CartContent);

    return <>
        {
            cartData.map((item) => {
                return <InfoCard key={item.id} item={item} handleClick={() => addToCart(item)} />

            })
        }
    </>
}

export default CartPage