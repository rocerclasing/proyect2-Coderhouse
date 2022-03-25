// estado global 
import React from'react'
// Creamos contexto = estado global
const ContextoCarrito =React.createContext();

const ProveedorCarrito = ({children}) => {
  return(
      <ContextoCarrito.Provider>
          {children}
      </ContextoCarrito.Provider>
  );
}
export{ContextoCarrito,ProveedorCarrito}

