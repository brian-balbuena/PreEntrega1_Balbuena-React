import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PurchaseRecord from "./PurchaseRecord";
import PurchaseDetail from "./PurchaseDetail";


const DetailCart = () => {
    const { cart } = useContext(CartContext);

    //creo una funcion para crear un array en el localStorage donde se va a guardar el detalle de la compra
    function addLocalStorage(array) {
        const idsVistos = {};


            console.log('existe')
            const arraySinRepeticiones = array.filter(objeto => {
                let addCantidad = 1;
    
                if (!idsVistos[objeto.id]) {
                    objeto.cantidad = addCantidad
                    idsVistos[objeto.id] = true;
                    console.log("agrega");
                    return true;
                }else {
                    //console.log("entra en repetido", objeto.cantidad, addCantidad)
                    objeto.cantidad = objeto.cantidad + addCantidad;
                    return false;
                }
               
            });
    
            const arrayJson = JSON.stringify(arraySinRepeticiones);
    
            localStorage.setItem('carrito', arrayJson);
     
        }
       
   // console.log('cart', cart)
    addLocalStorage(cart);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };



    return (<>
        <Box sx={style}>

            <PurchaseRecord />
            <PurchaseDetail />
            <div style={{ display: "flex", alignItems: "center" }}>
                <Button variant="outlined" type="button" color="success" size="large" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "10px" }}>Finalizar Pedido</Button>
            </div>

        </Box>
    </>);
}

export default DetailCart;