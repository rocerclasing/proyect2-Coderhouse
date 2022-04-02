import React, { useState,useContext } from 'react'

const ItemCount = ({initial,stock}) => {



  const[qty,setQty] = useState(initial=1);

    const addProduct = (num)=>{
         setQty(qty + num)
         
    }

    const onAdd = (num2)=>{
      setQty(qty - num2)
         
    }

    

  return (
         <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      
      >
        Añadir
      </button>
    </div>
      
  )
}

export default ItemCount
