import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'
import { ProveedorCarrito} from'../Page/Context/Context';
// Context
import Context from '../Page/Context/Context';

const ListContainer = () => {

  return (
    <div>
    
      <h1>List of product</h1>
     <Products/>
     
      
    
    </div>
  )
}

export default ListContainer
