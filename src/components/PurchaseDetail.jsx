import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { json } from "react-router-dom";

const PurchaseDetail = () => {
//llamo al localStorage para mostrar la compra en el carrito 

const arrayRecuperado = localStorage.getItem('carrito');
const carrito = JSON.parse(arrayRecuperado);

   // const { cart } = useContext(CartContext);

console.log('carrritoLocal', carrito);

//total compra
    let total = 0;
    carrito.forEach(element => {
        total = total + (element.precio * element.cantidad)
    })
    return (<>

<Typography variant="h5" style={{marginTop: "20px"}}>Detalles de compra</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Producto
                    </TableCell>
                    <TableCell>
                        Cantidad
                    </TableCell>
                    <TableCell>
                        Precio
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    carrito.map((element, index) => {
                        return <TableRow>
                            <TableCell key={index}> {element.nombre}</TableCell>
                            <TableCell key={index}> x{element.cantidad}</TableCell>
                            <TableCell key={index}> ${element.precio}</TableCell>
                        </TableRow>
                    })
                }
                <TableCell style={{ backgroundColor: "#DFE8CC" }}>Total</TableCell>
                <TableCell style={{ backgroundColor: "#DFE8CC" }}> ${total}</TableCell>

            </TableBody>
        </Table>

    </>);
}

export default PurchaseDetail;