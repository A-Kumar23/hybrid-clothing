import React, { useContext } from "react";
import './cart-dropdown.style.scss'
import Button from "../button/button.componrnt";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";



const  CartDropdown = () =>{

    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()


    const goToCheckOutHandler = () => {
        navigate('/checkout')
    }
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)
                }
            </div>
            <Button onClick={ goToCheckOutHandler }>Go to checkout</Button>
        </div>
    )
};

export default CartDropdown;