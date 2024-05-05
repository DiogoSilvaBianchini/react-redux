import './style.css'
import useGetProducts from '../hooks/useGetProducts'
import Card from '../components/card'

const Home = () => {
  const data = useGetProducts()
     
  return (
    <div className='homeContainer'>      
      <div className="slideCards">
        {data && data.map(product => (
          <Card
            key={product.id} 
            productId={product.id}
            title={product.title} 
            price={product.price} 
            imgUrl={product.imgUrl}
          />
        ))}
        </div>
    </div>
  )
}

export default Home