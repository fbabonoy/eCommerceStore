import { useEffect, useContext, useRef, useState } from "react"
import getData from "../model/data"
import InfoCard from "../component/InfoCard"
import "./ProductPage.css"
import { CartContent } from "../component/CartData"
import { Link, NavLink } from "react-router-dom";



function ProductPage() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const input = useRef(null)

    let arr = []

    filteredData.length === 0 ?
        arr = data :
        arr = filteredData


    useEffect(() => {
        getData(setData)
    }, [])

    function handleFilter(ref) {
        let newData = data.filter((item) => {
            const title = item.title.toLowerCase()
            return title.includes(ref.current.value)
        })

        setFilteredData(newData)
    }

    const { cartData, addToCart } = useContext(CartContent);


    return <div  >
        <div className="bar">
            <input ref={input} type="text" onChange={() => handleFilter(input)} />
                <Link to="/cart" >
                    <button>🛒 Cart {cartData.length > 0 ? `(${cartData.length})` : ""}</button>
                </Link>
        </div>
        <div className="ItemPage">
            {
                arr.map((item) => {
                    return <InfoCard key={item.id} item={item} handleClick={() => addToCart(item)} />

                })
            }
        </div>
    </div>
}

export default ProductPage

