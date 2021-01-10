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
const res = await fetch('https://azam-app-tj-js.pl/api/allcreate',requestOptions)
const data = await res.json()
setProducts(data)
} catch (e) {}
},[])
// вызваем функцию
useEffect(()=>{
fetchProducts()
},[fetchProducts])
return(
<>
  {products.map((product, i)=> (
  <div className="product" key={ i}>
    <div key={product._id} className="intent">20-30 M</div>
    <div>
      <img src={product.imageSrc } alt={product.name} className="imgProduct" />
    </div>
    <div>
      <p>{product.name}</p>
      <p>{product.cost}-PL</p>
      <p>{product.p}</p>
      <button onClick={()=> addToCart(product)} >Dodaj</button>
    </div>
  </div>
  ))}
</>
)
}

export default CardMenu