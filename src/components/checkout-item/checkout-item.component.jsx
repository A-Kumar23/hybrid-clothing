import { useContext } from 'react'
import './checkout-item.style.scss'
import { CartContext } from '../../contexts/cart.context'


const CheckoutItem = ({cartItem}) => {
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
    const clearItemFromCartHandler = () => { clearItemFromCart(cartItem) }
    const increment = () => {addItemToCart(cartItem)}
    const decrement = () => {removeItemFromCart(cartItem)}
    const {name, imageUrl, price, quantity} = cartItem
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={decrement} >&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={increment} >&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={clearItemFromCartHandler} >&#10005;</span>
        </div>
    )
}

export default CheckoutItem;