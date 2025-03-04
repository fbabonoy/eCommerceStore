
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CartData from './component/CartData'
import ProductPage from './Page/ProductPage'
import CartPage from './Page/CartPage'

function App() {

  return (
    <>
    <CartData>
      <Routes>
        <Route path='/' element={<ProductPage />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </CartData>
    </>
  )
}

export default App
