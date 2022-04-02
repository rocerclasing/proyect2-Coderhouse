import React,{useContext} from'react';
import CarritoContext from './Page/Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const cartContext = useContext(CarritoContext);
    const { cart } = cartContext;
  

  return (
    <div>
              <FontAwesomeIcon cart={cart} icon={faShoppingCart} size="2x" color="white" />

    </div>
  )
}
export default CartWidget