import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Products from './Products';
const Category = ({producto}) => {
  const[Category,setCategory] = useState(null);
  const{id} = useParams();
 //  todo lo que entra en la url es un string 
  useEffect(()=>{
   getfruits(id);
  },[])

  const getfruits = async(id)=>{
   const url = "https://run.mocky.io/v3/ed8ee268-e8f3-43e5-ae3e-cc4d1521ed79"
    try{
     const res = await fetch(url);
     const data = await res.json();
     if(id){
       const results = data.find(fruta=>fruta.id ==id)
       setCategory(results)
     }
     else{
      setCategory(data)
     }



    }
    catch(error){

      console.log(error)

    }
  }



  return (
    <div>
      <ContainerCategory>
               <h1>Category</h1>
               {Category&& <div key={Category.id}><Products Category={id}/>{Category.name}</div>}
      </ContainerCategory>
    </div>
  )
}

const ContainerCategory = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;
 
 
export default Category
