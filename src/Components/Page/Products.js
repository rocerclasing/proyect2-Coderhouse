import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

  
const Products = ({id}) => {

  const [fruit,setFruit] = useState([])


  useEffect(()=>{
    getFruits ()
},[])

  const getFruits = async()=>{
    const url = "data.json"
    try{
        const res = await fetch(url);
        const data = await res.json();
        setFruit(data)
    }
    catch(error)
    {
      console.log(error)

    }
  }
  return (
    <div>
       <h3>Products</h3>
       <p>Here are the products</p>
       <ContainerProducts>
            {fruit.map((products,index)=>{
              return(
                <Producto key={products.id}>
                        <div key={products.id}>
                            <h2><Link to={`/Products/${products.id}`}>{products.name}</Link></h2>
                            
                        <br/> <img  heigth="300px"width="300px"src={products.img}/>
                        </div>
                        <Link to={`/Products/${products.id}`}>See more detail</Link>
                </Producto>  
              );

            })}
       </ContainerProducts>
    </div>
  )
}

const ContainerProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;
 
const Producto =  styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;
 
const Boton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;


export default Products
