async function getData(setData) {
    const data = await fetch("https://fakestoreapi.com/products")
    const json = await data.json()
    // console.log(json)
    setData(json)
}

export default getData


// gr produc data

// cor on the user

// user cart in formation

