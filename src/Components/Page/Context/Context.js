// estado global 
import React,{useState,useEffect} from'react'
import ListContainer from '../ListContainer';
// Creamos contexto = estado global
const ContextoCarrito =React.createContext();

const ProveedorCarrito = ({children}) => {
 
  return(
      <ContextoCarrito.Provider value={{}}>
          {children}    
        
      </ContextoCarrito.Provider>
  );
}
export{ContextoCarrito,ProveedorCarrito}

