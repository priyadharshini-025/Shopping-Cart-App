function ProductCard({product,addToCart})
{
    return(
        <div className="product-card" key={product.id}>
            <img src={product.image}/>
            <p>{product.title}</p>
            <p><b>&#8377; {product.price}</b></p>
            <button className="add-to-cart" onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard