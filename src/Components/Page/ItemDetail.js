import React,{useState,useEffect,useContext} from 'react'
import { useParams } from "react-router-dom";
import DetailCard from './DetailCard/DetailCard';
const ItemDetail = () => {
    const [fruit,setFruit] = useState(null)
    const {id}= useParams();
   console.log(id)
   
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
     { fruit && <DetailCard producto={fruit}/>}

    </div>
  )
}

export default ItemDetail
