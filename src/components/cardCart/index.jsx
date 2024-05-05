import { useDispatch, useSelector } from 'react-redux'
import cartActions from '../../redux/cart/cartActions'
import './style.css'
import { useState } from 'react'

const CardCart = ({productId, title, productPrice, imgUrl, setTotalCart}) => {
  const { currentCart, totalCart } = useSelector(rootSelector => rootSelector.useCartReducer)
  const product = currentCart.filter(product => product.id === productId)
  const [quantity, setQuantity] = useState(product[0].quantity)


  const dispatch = useDispatch()  

  const agreeQuantity = () => {
    dispatch({
      type: cartActions.addQuant,
      payload: {id: productId, productPrice: productPrice} 
    })
    setQuantity(product[0].quantity)
    setTotalCart(totalCart)
  }
  
  const subQuantity = () => {
    dispatch({
      type: cartActions.subQuant,
      payload: {id: productId, productPrice: productPrice} 
    })
    console.log(currentCart)
    setQuantity(product[0].quantity)
    setTotalCart(totalCart)
  }

  return (
    <div className='cardCart'>
      <button className='closeBtn'>X</button>
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