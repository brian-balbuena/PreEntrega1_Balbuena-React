import { useParams } from "react-router-dom";
import useData from "../database/useData";
import product from "../database/data.json";
import { CircularProgress, Typography } from "@mui/material";
import ProductCard from "./product_card";

const ItemCategoryContainer = () => {

    const { family } = useParams();
    const { data, loading } = useData(product);


    if (loading) return (<div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}> <CircularProgress color="success" thickness={5.5} /> </div>);

    const familyCategory = data.filter(category => category.family === family);

    console.log("esto", familyCategory)

    return (
        <>

            <Typography variant="h2" align="center" marginTop={"10px"}> {`${family}`} </Typography>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                
                {
                    familyCategory.map((element, index) => {
                        return <ProductCard key={index} product={element} />
                    })
                }
            </div>
        </>
    );
}

export default ItemCategoryContainer;