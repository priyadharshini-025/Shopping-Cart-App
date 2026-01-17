import { useState, useEffect } from "react"
import "./App.css"

import NavBar from "./components/NavBar"
import ProductList from "./components/ProductList"
import CartModal from "./components/CartModal"

function App() {
  // to maintain the list of products to show in UI
  const [product, setProduct] = useState([]);
  // to maintain the products that are added by user in the cart
  const [cart,setCart] = useState([]);
  //to open the cartModal if the user clicks Cart
  const [iscartOpen,setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
  }, [])

  const addToCart = (product)=>{
    console.log(product.id)
    let exists = cart.find(item=>item.id===product.id)
    if(exists)
    {
      alert("Item already added to the cart")
    }
    else
    {
      setCart([...cart,product])
      console.log(cart)
    }    
  }

  const removeFromCart = (id) =>{
    setCart(cart.filter(item=>item.id!==id))
  }

  return(
    <>
    <NavBar cart={cart.length} iscartOpen={()=>setIsCartOpen(true)}/>
    <ProductList product={product} addToCart={addToCart}/>
    {iscartOpen && <CartModal
    cart = {cart}
    removeFromCart = {removeFromCart}
    iscartOpen = {()=>setIsCartOpen(false)}
    />}
    </>
  )
}

export default App