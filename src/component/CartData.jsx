import { createContext, useReducer, useState } from "react"


export const CartContent = createContext()

function handleCart(state, action) {
    switch (action.action) {
        case "add":
            const newCart = [...state]
            newCart.push(action.payload)
            return newCart
        case "delete" :
            return state.filter((item)=> {
                return item.title !== action.payload.title
            })
        default:
            return state
    }
}

export function CartData({ children }) {

    // const [cartData, setCartData] = useState([])

    // const addToCart = (item) => {
    //     const newCart = [...cartData]
    //     newCart.push(item)
    //     setCartData(newCart)
    // }

    // add use reduce to add or remove from the list

    const [state, dispatch] = useReducer(handleCart, [])
    return <CartContent.Provider value={{ state, dispatch }}>
        {children}
    </CartContent.Provider>
}

export default CartData