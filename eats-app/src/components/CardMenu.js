import { useState } from 'react'
import '../styleComp/cardMenu.css'
import kebab from '../images/kebab.jpg'
function CardMenu({addToCart}) {
  const [products] = useState([
    {
      p: 'Stosowanie paragrafów i artykułów jest czasami wykorzystywane ',
  name: 'AA Battery',
  cost: '$2.99',
  image: kebab
  },{
    p: 'Stosowanie paragrafów i artykułów jest czasami wykorzystywane ',
      name: 'Blanket',
      cost: '$19.99',
      image: kebab
    },  {
      p: 'Stosowanie paragrafów i artykułów jest czasami wykorzystywane ',
      name: 'AA Battery',
      cost: '$2.99',
      image: kebab
        }
  ])

 

return(
<>
<div className="products" >
{products.map((product, i)=> (
<>
<div className="product" key={i} >
  <img  src={product.image }  alt={product.name} className="imgProduct" />
  <h5   >{product.name}</h5> 
<p>{product.p}</p>
<p >{product.cost}<button onClick={()=> addToCart(product)}  > Add</button> </p>
</div>
</>
))}
</div>
</>
)
}

export default CardMenu