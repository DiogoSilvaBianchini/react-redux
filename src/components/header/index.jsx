import { useState } from 'react'
import Cart from '../cart'
import './style.css'

const Header = () => {
  const [cart, setCart] = useState(false)
  return (
    <header>
      {cart ? <Cart active={setCart} />:""}
      <ul>
          <li><button>Login</button></li>
          <li><button onClick={() => setCart(true)}>Carrinhos</button></li>
      </ul>
    </header>
  )
}

export default Header