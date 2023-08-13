import { useParams } from "react-router-dom";
import useData from "../database/useData";
import { CircularProgress } from "@mui/material";
import MediaCard from "./ProductDetail";


const ItemDetailContainer  = () => {
    const { id } = useParams();
    const { data, loading } = useData('products');

    if (loading) return (<div style={{ marginTop: "100px", display: "flex", justifyContent: "center", alignContent:"center" }}> <CircularProgress color="success" thickness={5.5} /> </div>);

    const itemId = data.filter(category => category.ID === parseInt(id));
    
    return ( 
        <>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent:"center" ,marginTop: "20px" , width:"100%", height:"700px"}}>
                
                {
                    itemId.map((element, index) => {
                        return <section style={{display: "flex", justifyContent: "center", height: "100%"}}><MediaCard key={index} product={element} /> </section>
                    })
                }
            </div>
        </>
     );
}
 
export default ItemDetailContainer ;