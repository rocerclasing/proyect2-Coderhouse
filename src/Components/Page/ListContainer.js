import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'
import { ProveedorCarrito} from'../Page/Context/Context';
// Context
import {ContextoCarrito} from'../Page/Context/Context';
import { useContext } from 'react';

const ListContainer = () => {
  const dato= useContext(ContextoCarrito);
 console.log(dato)
  return (
    <div>
    
      <h1>List of product</h1>
      <Link to="/Products/:id">See more detail </Link>
     <Products/>
     
        <button>AddtoCarrito</button>
    
    </div>
  )
}

export default ListContainer
