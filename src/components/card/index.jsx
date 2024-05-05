import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import cartActions from '../../redux/cart/cartActions'
const Card = ({productId, title, price, imgUrl}) => {
  const { currentCart } = useSelector(rootSelector => rootSelector.useCartReducer)
  const dispatch = useDispatch()

  const toAddCart = () => {
    const check = currentCart.filter(product => product.id === productId)
    if(check.length > 0){
      dispatch({
        type: cartActions.addQuant,
        payload: {id: productId, productPrice: price},
      })
    }else{
      dispatch({
        type: cartActions.toAdd,
        payload: {id: productId, quantity: 1, productPrice: price} 
      })
    }
  }

  return (
    <div className='cardContainer'>
        <div className="imgContainer">
          <img src={imgUrl} alt="Product image" />
        </div>
        <div className="describe">
          <h2>{title}</h2>
          <span>R$ {price}</span>
        </div>
        <button onClick={() => toAddCart(productId)}>Adicionar ao carrinho</button>
    </div>
  )
}

export default Card