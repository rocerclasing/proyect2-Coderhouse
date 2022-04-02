import React, { useContext } from 'react'
import CarritoContext from'../../Components/CartWidget/CartWidget';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
const CartWidget = () => {
    const caritoContext = useContext(CarritoContext);
    console.log(caritoContext)
    const{cart} = useContext();
    console.log(cart)
  return (
      <div>
          <FontAwesomeIcon icon={faCartShopping} />
          <div>{cart.length}</div>
      </div>
  )
}

export default CartWidget
