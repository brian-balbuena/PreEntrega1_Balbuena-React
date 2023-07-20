import { CircularProgress, Typography } from "@mui/material";
import product from "../database/data.json";
import { useEffect, useState } from "react";
import ProductCard from "./product_card";
import useData from "../database/useData";



const ItemListContainer = () => {
    // uso el useData para simular el llamado a la api 
    const { data, error, loading } = useData(product);

    // creo un spinner para el tiempo de carga ,simulando una llamada a la api 
    if (loading) return (<div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}> <CircularProgress color="success" thickness={5.5} /> </div>);

    return (
        <>
            <section to="/" >
                <Typography variant="h2" align="center" marginTop={"10px"}> Productos </Typography>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {/* hago un .map de todos los elementos para mostrarlos como productos  */}
                    {
                        data.map((element, index) => {
                            return <ProductCard key={index} product={element} />
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default ItemListContainer