import { useDispatch, useSelector } from 'react-redux'
import cartActions from '../../redux/cart/cartActions'
import './style.css'
import { useState } from 'react'

const CardCart = ({productId, title, productPrice, imgUrl}) => {
  const { currentCart } = useSelector(rootSelector => rootSelector.useCartReducer)
  const product = currentCart.filter(product => product.id === productId)
  const [quantity, setQuantity] = useState(product[0].quantity)


  const dispatch = useDispatch()  

  const agreeQuantity = () => {
    dispatch({
      type: cartActions.addQuant,
      payload: {id: productId, productPrice: productPrice} 
    })
    setQuantity(product[0].quantity)
  }
  
  const subQuantity = () => {
    dispatch({
      type: cartActions.subQuant,
      payload: {id: productId, productPrice: productPrice} 
    })
    setQuantity(product[0].quantity)
  }

  const removeItem = () => {
    const valor = product[0].quantity * productPrice
    dispatch({
      type: cartActions.toSub,
      payload: {id: productId, productPrice: valor}
    })
  }

  return (
    <div className='cardCart'>
      <button className='closeBtn' onClick={removeItem}>X</button>
      <div className="imgContainer">
        <img src={imgUrl} alt="product Image" />
      </div>
      <div className="describe">
        <h2>{title}</h2>
        <span>R$ {productPrice}</span>
        <div className="quantity">
          <button onClick={agreeQuantity}>+</button>
          <span>{quantity}</span>
          <button onClick={subQuantity}>-</button>
      </div>
      </div>
    </div>
  )
}

export default CardCart