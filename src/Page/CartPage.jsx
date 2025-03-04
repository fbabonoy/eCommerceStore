import { useContext } from "react";
import { CartContent } from "../component/CartData";
import { Link } from "react-router-dom";
import InfoCard from "../component/InfoCard";

function CartPage() {
    const { state, dispatch } = useContext(CartContent);    

    return <div>
        <Link to="/">
        <button>back</button>
        </Link>
        {
            state.map((item) => {
                return <InfoCard key={item.id} item={item} handleClick={() => dispatch({action: "delete", payload: item})} displayDelete={true}/>
            })
        }
    </div>
}

export default CartPage