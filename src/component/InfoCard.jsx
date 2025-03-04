import { useState } from "react"
import "./card.css"

function InfoCard({item, handleClick, displayDelete = false}) {
    const [selected, setSelected] = useState(false)
    return <div className="ItemCard">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <h4>rating: {item.rating.rate}   count: {item.rating.count}</h4>
        <h4>${item.price}</h4>
        {item.ammount > 1 && <h4>ammount: {item.ammount}</h4>}
        <button onClick={()=>{
            setSelected((selected)=>!selected)
            handleClick()
            }}>{(displayDelete || selected) ? "Delete" : "Add to cart"}</button>
    </div>
}

export default InfoCard