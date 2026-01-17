function NavBar({cart,iscartOpen})
{
    return(
        <div className="nav-bar">
        <h2 className="heading">Shopping Site</h2>
        <button onClick={()=>iscartOpen()} className="cartButton">Cart ({cart})</button>
        </div>
    )
}

export default NavBar