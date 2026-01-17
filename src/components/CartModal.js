function CartModal({ cart, removeFromCart, iscartOpen }) {
    console.log("cart model")
    return (
        <div className="cartModal">
            <div className="cartItems">
                {cart.length ===0 && <p>No items added in the cart</p>}
                {cart.length!==0 && cart.map((product) => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.image} />
                        <p>{product.title}</p>
                        <p><b>&#8377; {product.price}</b></p>
                        <button className= "remove-button" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                    </div>
                ))}                
                <button className="close-button" onClick={iscartOpen}>Close</button>
                </div>
            
        </div>
    )
}

export default CartModal