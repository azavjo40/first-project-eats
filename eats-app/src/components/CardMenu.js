import { useState ,useEffect, useCallback} from 'react'
import kebab from '../images/kebab.jpg'
import '../styleComp/cardMenu.css'
function CardMenu({addToCart}) {
  const [prod] = useState([
    {
      p: 'Stosowanie paragrafów i artykułów jest czasami wykorzystywane ',
  name: 'AA Battery',
  cost: '$2.99',
  imageSrc: kebab
  },{
    p: 'Stosowanie paragrafów i artykułów jest czasami wykorzystywane ',
      name: 'Blanket',
      cost: '$19.99',
      imageSrc: kebab
    },  {
      p: 'Stosowanie paragrafów i artykułów jest czasami wykorzystywane ',
      name: 'AA Battery',
      cost: '$2.99',
      imageSrc: kebab
        }
  ])
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
    {prod.map((product, i)=> (
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