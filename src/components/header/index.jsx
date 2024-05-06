import { useState } from 'react'
import Cart from '../cart'
import './style.css'
import ToggleBtn from '../toggleBtn'

const Header = () => {
  const [cart, setCart] = useState(false)
  console.log(cart)
  return (
    <header>
      {cart ? <Cart active={setCart} />:""}
      <ul>
          <li>
            <ToggleBtn setCart={setCart} cart={cart}/>
          </li>
      </ul>
    </header>
  )
}

export default Header