import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MediaCard = ({ product }) => {
const {addToCart, cart} = useContext(CartContext);

  return (
    <Card  raised= "true" style={{ width:"50%", height:"95%" }}>
      
      <CardMedia
        sx={{ height: "55%", width:"50%", margin:"auto"}}
        image={`${product.img}`}
        title={`${product.nombre}`}
      />
      <CardContent >
      <Typography gutterBottom variant="h3" component="div">
          {`${product.nombre}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${product.propiedades}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(product)}>Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;