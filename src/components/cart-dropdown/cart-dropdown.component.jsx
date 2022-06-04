import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../card-item/card-item.component";
import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItems>
      {
        cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        )) : <EmptyMessage>Your Cart is empty</EmptyMessage>
      }
      </CartItems>
      <div className="cart-item"></div>
      <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
      </CartDropdownContainer>
  );
};

export default CartDropDown;
