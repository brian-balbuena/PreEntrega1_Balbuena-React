import Body from "./boby";
import NavBar from "./navbar";
import ShopBody from "./shop_body";




const Container = () => {
    //simulo un array con objetos que llamaria de una base de datos
    const recomendacion = [
        {
            "ID": 1,
            "family": "Suculentas",
            "nombre": "cactus",
            "vivienda": [
                "Depto",
                "Casa"
            ],
            "ubicacion": "Interior",
            "proposito": "Deco",
            "img": "../imagenes/imagenes_baseDatos/cactus.png",
            "propiedades": "Los cactus son plantas suculentas adaptadas a climas áridos. Tienen tallos carnosos, espinas en lugar de hojas y flores llamativas. Son resistentes y fáciles de cuidar. Almacenando agua en sus tejidos, sobreviven en condiciones de sequía. Sus propiedades medicinales varían, desde aliviar quemaduras solares y picaduras de insectos hasta tratar problemas digestivos y cutáneos.",
            "precio": 200
        },
        {
            "ID": 2,
            "family": "Suculentas",
            "nombre": "pata de oso",
            "vivienda": [
                "Depto",
                "Casa"
            ],
            "ubicacion": "Interior",
            "proposito": "Deco",
            "img": "../imagenes/imagenes_baseDatos/pata_oso.png",
            "propiedades": "La suculenta Pata de Oso, también conocida como Cotyledon tomentosa, es una planta de aspecto único y atractivo. Sus hojas carnosas y peludas se asemejan a las patas de un oso, de ahí su nombre. Es fácil de cuidar y puede adaptarse a diferentes condiciones de luz y agua. Además de ser una planta ornamental popular, se ha utilizado en la medicina tradicional para tratar quemaduras, heridas y problemas respiratorios.",
            "precio": 220
        },
        {
            "ID": 3,
            "family": "Suculentas",
            "nombre": "lithops",
            "vivienda": "Depto",
            "ubicacion": "Interior",
            "proposito": "Deco",
            "img": "../imagenes/imagenes_baseDatos/lithops.png",
            "propiedades": "Descubre los fascinantes Lithops, plantas suculentas conocidas como 'piedras vivas'. Su increíble capacidad de mimetismo y sus formas únicas te sorprenderán. Adéntrate en el mundo de estas joyas botánicas y descubre cómo cuidarlas en tu propio hogar. ¡Embárcate en una aventura verde con Lithops!",
            "precio": 210
        },
        {
            "ID": 4,
            "family": "Suculentas",
            "nombre": "aloe vera",
            "vivienda": [
                "Depto",
                "Casa"
            ],
            "ubicacion": "Interior",
            "proposito": "Deco",
            "img": "../imagenes/imagenes_baseDatos/aloe_vera.png",
            "propiedades": "Descubre el extraordinario poder del Aloe Vera. Esta planta milagrosa es conocida por sus increíbles propiedades y beneficios para la salud. El Aloe Vera es un hidratante natural que ayuda a rejuvenecer la piel y promover su elasticidad. Sus propiedades antiinflamatorias y cicatrizantes lo convierten en un aliado para aliviar quemaduras y irritaciones cutáneas. Además, su gel nutritivo es ideal para fortalecer el cabello y combatir la caspa. ¡Experimenta los múltiples beneficios del Aloe Vera y descubre una belleza y bienestar naturales!",
            "precio": 150
        },
    ];

    const message = "Aca iría el cuerpo del SHOP";
    
    return (
        <>
        <NavBar />
        <Body text={message}/>

        {/* <ShopBody recomendacion={ recomendacion }/> */}
        </>


    );
};

export default Container;