import React,{useState} from "react";
// Se esta creando context
const CarritoContext = React.createContext();


const CartProvider = (props)=>{
    // Estado inicializado
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    // Agrega productos
    const addToCart = (item, qty) => {
        if(cart.some(el => el.id === item.id)){
            
            let index = cart.findIndex(el => el.id === item.id);
            let product = cart[index];
            product.qty = product.qty + qty;

            const newCart = [...cart];
            newCart.splice( index, 1, product );

            setCart([ ...newCart ]);

        }else{
            let product = {...item, qty};
            setCart([...cart, product ]);
        }
    }

    // Borra Cart por id
    const deleteCartById = ( id ) => {
        const newCart = [...cart];
        let index = newCart.findIndex(el => el.id === id);
        
        newCart.splice( index, 1 );

        setCart([...newCart]);
    }
     
    // Borra cart
    const deleteCart = () => {
        setCart([]);
    }


    return(
        <CarritoContext.Provider 
            value={{ 
                        cart, 
                        setCart,
                        addToCart,
                        deleteCartById,
                        deleteCart, 
                   }}
        >
            {props.children}
        </CarritoContext.Provider>
    )

    
}







export default CarritoContext;

