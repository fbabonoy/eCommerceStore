import { useEffect, useReducer, useRef, useState } from "react"
import getData from "../model/data"
import InfoCard from "../component/InfoCard"
import "./ProductPage.css"


function ProductPage() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const input = useRef(null)

    let arr = []

    filteredData.length === 0 ?
        arr = data :
        arr = filteredData


    useEffect(()=>{
        getData(setData)
    },[])

    function handleFilter (ref) {
        let newData = data.filter((item)=> {
            const title = item.title.toLowerCase()
            return title.includes(ref.current.value)
        })
        
        setFilteredData(newData)
    }

    function handleOnClick(item) {
        
    }


    return <div  >
        <div className="bar">
        <input ref={input} type="text" onChange={()=> handleFilter(input)}/>
        <button>🛒 Cart (1)</button>
        </div>
        <div className="ItemPage">
        {
        arr.map((item)=>{
            return <InfoCard key={item.id} item={item} handleClick={()=>handleOnClick(item)}/>

        })
        }
        </div>
    </div>
}

export default ProductPage

