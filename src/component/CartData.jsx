import { createContext, useReducer, useState } from "react"

function handleCart(state, action) {
    switch (action.action) {
        case "add":
            //need to account for multiples of the same insted of adding to array increate the counter
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

export const CartContent = createContext()

export function CartData({ children }) {
    const [state, dispatch] = useReducer(handleCart, [])

    return <CartContent.Provider value={{ state, dispatch }}>
        {children}
    </CartContent.Provider>
}

export default CartData