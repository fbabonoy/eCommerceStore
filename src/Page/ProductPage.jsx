import { useEffect, useRef, useState } from "react"
import getData from "../model/data"
import InfoCard from "../component/InfoCard"


function ProductPage() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const input = useRef(null)

    useEffect(()=>{
        getData(setData)
    },[])

    function handleFilter (ref) {
        console.log(ref.current.value);
        let newData = data.filter((item)=> {
            const title = item.title.toLowerCase()
            return title.includes(ref.current.value)
        })
        
        setFilteredData(newData)
    }
    return <div>
        <input ref={input} type="text" onChange={()=> handleFilter(input)}/>
        {
        filteredData.length === 0 ?
        data.map((item)=>{
            return <InfoCard key={item.id} item={item}/>

        }) :
        filteredData.map((item)=>{
            return <InfoCard key={item.id} item={item}/>

        })
        }
    </div>
}

export default ProductPage