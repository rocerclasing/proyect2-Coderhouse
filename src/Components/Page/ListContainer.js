import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'
const ListContainer = () => {
  return (
    <div>
    
      <h1>List of product</h1>
      <Link to="/Products/:id">See more detail </Link>
     <Products/>
    </div>
  )
}

export default ListContainer
