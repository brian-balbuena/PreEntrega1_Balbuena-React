import CardRecomm from "./recommendation_card";

const ShopBody = ({ recomendacion }) => {
    return (


        <section className="card_recommendation" style={{ backgroundColor: '#CCD6A6', width: '100%', height: '750px' }}>

           { recomendacion.map((element, index) => {
                return <CardRecomm element= {element}/>;
                
           })};
        </section>
    );
}

export default ShopBody