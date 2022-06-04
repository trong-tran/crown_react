import "./checkout-item.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {
    const {imageUrl, name, price, description, quantity, id} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
    
    const addItemHandler = () => {addItemToCart(cartItem)}
    const removeItemHandler = () => {removeItemFromCart(cartItem)}
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => {clearItemFromCart(cartItem)}}className="remove-button">&times;</div>
        </div>
    
    )

}

export default CheckoutItem;