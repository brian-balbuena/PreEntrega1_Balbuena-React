import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cartDetail, setCartDetail] = useState([]);
    let carritoArray = [];
    const addToCart = (product) => {

        setCart((prevCart) => (Array.isArray(prevCart) ? [...prevCart, product] : [product]));
    }




    return <CartContext.Provider value={{ cart, addToCart }}>
        {children}
    </CartContext.Provider>
}

