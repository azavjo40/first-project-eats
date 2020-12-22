import { useState ,useEffect, useCallback} from 'react'
import '../styleComp/cardMenu.css'
function CardMenu({addToCart}) {
const [products, setProducts] = useState([])
const fetchProducts = useCallback( async () => {
const requestOptions = {
method: 'GET',
redirect: 'follow'
}
try {
  const res = await fetch('/api/allcreate',requestOptions)
const data = await res.json()
setProducts(data)
} catch (e) {}
},[])
// вызваем функцию
useEffect(()=>{
fetchProducts()
},[fetchProducts])

return(
  <div className="products">
    {products.map((product, i)=> (
     <div className="product" key={ i}>
       <div key={product._id}>
        <img src={product.imageSrc } alt={product.name} className="imgProduct" />
        <h5>{product.name}</h5>
        <p>{product.p}{product.length}</p>
        <p>{product.cost}-PL <button onClick={()=> addToCart(product)} > Add</button> </p>
      </div>
      </div>
    ))}
  </div>
)
}

export default CardMenu