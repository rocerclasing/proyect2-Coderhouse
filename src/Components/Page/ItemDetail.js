import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import DetailCard from './DetailCard/DetailCard';
const ItemDetail = ({id}) => {
    const [fruit,setFruit] = useState()
    const {ID}= useParams();
  
   
    useEffect(()=>{
      getfruits()
  },[])
  
  const getfruits = new Promise(res=>{
    res(fruit)
  })
  
  getfruits.then(data=>{
  if(id){
   setFruit(data.filter(fruta=>fruta.id === ID)) 
  }
  else
  {
   setFruit(data) 
  }
  })
  return (
    <div>
       <h1>Detalle de la plantilla</h1>
      <DetailCard producto={id}  id={id} Category={ID}/>
    </div>
  )
}

export default ItemDetail
