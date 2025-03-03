import "./card.css"

function InfoCard({item, handleClick}) {
    return <div className="ItemCard">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <h4>rating: {item.rating.rate}   count: {item.rating.count}</h4>
        <h4>${item.price}</h4>
        <button onClick={handleClick}>Add to cart</button>
    </div>
}

export default InfoCard