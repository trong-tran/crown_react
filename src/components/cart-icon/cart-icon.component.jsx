import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"

const CardIcon = () => {
    const  {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleIsCartOpen}></ShoppingIcon>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon; 