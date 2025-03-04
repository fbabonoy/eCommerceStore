import { createContext, useState } from "react"


export const CartContent = createContext()

export function CartData({children}) {

    const [cartData, setCartData]= useState([])

    const addToCart = (item) => {
        console.log(item);
        
        const newCart = [...cartData]
        newCart.push(item)
        setCartData(newCart)
    }

    return <CartContent.Provider value={{cartData, addToCart}}>
        {children}
    </CartContent.Provider>
}

export default CartData