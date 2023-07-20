import { useParams } from "react-router-dom";
import useData from "../database/useData";
import { CircularProgress } from "@mui/material";
import product from "../database/data.json";
import MediaCard from "./ProductDetail";


const ItemDetailContainer  = () => {
    const { id } = useParams();
    const { data, loading } = useData(product);

    if (loading) return (<div style={{ marginTop: "100px", display: "flex", justifyContent: "center", alignContent:"center" }}> <CircularProgress color="success" thickness={5.5} /> </div>);

    const itemId = data.filter(category => category.ID === parseInt(id));
    
    console.log("itemmmmmmmm", itemId)
    return ( 
        <>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent:"center" ,marginTop: "20px" , width:"100%", height:"700px"}}>
                
                {
                    itemId.map((element, index) => {
                        return <MediaCard key={index} product={element} />
                    })
                }
            </div>
        </>
     );
}
 
export default ItemDetailContainer ;