import ProductCard from "./ProductCard"
function ProductList({product,addToCart})
{
    return(
        <div className="all-cards">
        {product.map(item=>(
            <ProductCard product={item} addToCart={addToCart}/>
        ))}
        </div>
    )
}

export default ProductList