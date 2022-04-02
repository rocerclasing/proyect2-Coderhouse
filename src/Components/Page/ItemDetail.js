import React,{useState,useEffect,useContext} from 'react'
import { useParams } from "react-router-dom";
import DetailCard from './DetailCard/DetailCard';
import CarritoContext from './Context/Context';
const ItemDetail = () => {
    const [fruit,setFruit] = useState(null)
    const {id}= useParams();
   console.log(id)

   const cartContext = useContext(CarritoContext);
   const { addToCart} = CarritoContext;
   
    useEffect(()=>{
      fetch('../data.json') 
        .then((res)=>{
          console.log(res)
         return  res.json();
        })
        .then((data)=>{
          console.log(data)
          const result = data.find(dato=>dato.id==id)
           setFruit(result)
        })
        .catch((error)=>{
           console.log(error)
        })
  },[])
  

  
  
  return (
    <div>
       <h1>Detalle de la plantilla</h1>
     { fruit && <DetailCard producto={fruit} addToCart={addToCart}/>}

    </div>
  )
}

export default ItemDetail
