
export default function Product(props) {

    const {product} = props; //destructuring

    return(
        <div className="product">
            <div className="productImage">
                <img src={product.image} alt={product.name}/>
            </div>
            <p>
                <span className="pr-name">{product.name}</span>
                <span className="pr-price">${product.price}</span>
            </p>
            <button className="add-to-cart">Add to cart</button>
            <button>
                <span>&#129293;</span>
                <span>Add to Wishlist</span>
            </button>
        </div>
    )
}