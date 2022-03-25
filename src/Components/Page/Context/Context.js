// estado global 
import React,{useState,useEffect} from'react'
// Creamos contexto = estado global
const ContextoCarrito =React.createContext();

const ProveedorCarrito = ({children}) => {
  const[Carrito,setcambiarCarrito] = useState([
      
  ])

     useEffect(()=>{
        getProducts()
     },[])


    const getProducts = async ()=>{
        const url = "data.json"
        try{
            const res = await fetch(url);
            const data = await res.json();
            setcambiarCarrito(data)
        }
        catch(error)
        {
          console.log(error)
    
        }
    }
  return(
      <ContextoCarrito.Provider value={{Carrito}}>
          {children}
          {
              // Carrito.length >=0 ? Carrito.map(fruta=><div key={fruta.id}>{fruta.name}</div>) 
              // : <p>Aun no has agregado producto al carrito</p>
          }
      </ContextoCarrito.Provider>
  );
}
export{ContextoCarrito,ProveedorCarrito}

