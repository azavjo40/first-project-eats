import { useState ,useEffect, useCallback, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useMesaage } from '../hooks/message.hook'
import {useHistory} from 'react-router-dom'
import '../styleComp/cardMenu.css'
function MyMenu() {
const [checked, setChecked] = useState(false)
const history = useHistory()
const message = useMesaage()
const auth = useContext(AuthContext)
const [del, setDel] = useState([])
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

const deletehandler = useCallback( async()=>{
const raw = JSON.stringify(del);
const requestOptions = {
method: 'POST',
headers: {
"Authorization": auth.token,
'Content-Type': 'application/json'
},
body: raw,
redirect: 'follow'
}
try{
const res = await fetch('/api/delete/menu',requestOptions )
const date = await res.json()
message(date.message)
history.push('/')
}catch(e){message(e)}
},[message, auth.token,del, history])
const addCont = (product)=>{
setDel(product)
}
const inputchange = (e)=>{
const check = e.target.checked
    setChecked(check)  
}
return(
<div className="contMy">
    {products.map((product, i)=> (
    <div className="product" key={ i}>
        <div key={product._id}>
            <img src={product.imageSrc } alt={product.name} className="imgProduct" />
            <h5>{product.name}</h5>
            <p>{product.p}{product.length}</p>
            <label style={{marginRight: '10px'}} >
                <input type="checkbox" onChange={(e)=>inputchange(e)}
                onClick={()=>addCont(product)}
                />
                Confirm Deletion!</label>
            <button disabled={!checked} style={{marginLeft: '10px'}} onClick={()=>deletehandler()}
                > Delete</button>
        </div>
    </div>
    ))}
</div>
)
}

export default MyMenu