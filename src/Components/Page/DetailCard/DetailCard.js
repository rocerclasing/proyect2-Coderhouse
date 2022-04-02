import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ItemCount from'../../ItemCount/ItemCount';
const DetailCard = ({producto}) => {
   console.log(producto)
   

    return(  
            <ContainerProducts>
              <Plantilla  key={producto.id}>
              <div key={producto.id}>
               <h2>{producto.name}</h2>
               <br/> <img  heigth="300px"width="300px"src={producto.img}/>
               <p>Lorem ipsum noxnsnxnsnnklxlxsknxklxnlkn</p>
               <ItemCount/>
              </div>
              </Plantilla>
            </ContainerProducts>
     
    )
    
      
  
  
}

const ContainerProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;
 
const Plantilla =  styled.div`
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



export default DetailCard
