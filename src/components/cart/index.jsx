import './style.css'
import CardCart from "../cardCart"
import useGetProducts from '../../hooks/useGetProducts'
import { useSelector } from 'react-redux'

const Cart = ({active}) => {
  const data = useGetProducts()
  let products = []
  const { currentCart, totalCart } = useSelector(rootReducer => rootReducer.useCartReducer)
  
  const filterProduct = () => {
    for(let cart of currentCart){
      for(let db of data){
        if(db.id === cart.id){
          products.push(db)
        }
      }
    }
  }

  if(data){
    filterProduct()
  }
  
  const outCart = () => {
    document.getElementById("cart").classList.add("outAside")
  }

  const removeClass = () => {
    let cart = document.getElementById("cart")
    cart.classList.remove("outAside")
    cart.remove()
    document.getElementById("cartContainer").classList.add("outScreen")
  }

  const removeScreen = () => {
    active(false)
  }  

  return (
    <div className='cartContainer' id='cartContainer' onClick={(e) => e.target.id === "cartContainer" && outCart()} onAnimationEnd={removeScreen}>
        <aside id='cart' onAnimationEnd={removeClass}>
          <div className="content">
          {
            products.length > 0 ? products.map((product) => (
              <CardCart 
                  key={product.id}
                  productId={product.id}
                  title={product.title} 
                  productPrice={product.price}
                  imgUrl={product.imgUrl} 
              />
            )) : <h3 className='titleEmpty'>Nenhum produto encontrado!</h3>
          }
          </div>
          <div className="price">
            <span>Valor total: R$ {totalCart}</span>
            <button>COMPRAR</button>
          </div>
        </aside>
    </div>
  )
}

export default Cart