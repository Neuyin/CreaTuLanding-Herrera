import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(producto){
        console.log("Vas a agregar el producto: ", producto)
        let carritoAuxiliar = [...carrito];
        carritoAuxiliar.push(producto);
        setCarrito(carritoAuxiliar);

        console.log("Agregaste correctamente. Tu carrito se ve así: ", carritoAuxiliar);

        // // ESTO TAMBIÉN ERA VÁLIDO

        // setCarrito([...carrito, producto]);
    };

    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito }}>
            {props.children}
        </AppContext.Provider>
    );
};