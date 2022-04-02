import React, { useContext } from 'react'
// Context
import CarritoContext from'../Page/Context/Context';
// Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
const CartWidget = () => {
    // Se usa el context
    const caritoContext = useContext(CarritoContext);
    console.log(caritoContext)
    // se destructuracion del context
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
