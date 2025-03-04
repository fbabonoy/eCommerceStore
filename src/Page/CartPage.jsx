import { useContext } from "react";
import { CartContent } from "../component/CartData";
import { Link } from "react-router-dom";
import InfoCard from "../component/InfoCard";

function CartPage() {

    const { cartData, addToCart } = useContext(CartContent);

    console.log(cartData);
    

    return <div>
        <Link to="/">
        <button>back</button>
        </Link>
        {
            cartData.map((item) => {
                return <InfoCard key={item.id} item={item} handleClick={() => addToCart(item)} />

            })
        }
    </div>
}

export default CartPage