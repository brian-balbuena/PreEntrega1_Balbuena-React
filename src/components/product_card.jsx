import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './style_navMenu.css';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { CardContent } from '@mui/material';





const ProductCard = ({product}) => {
 const {addToCart} = useContext(CartContext);
 
  return (
    <Card  className='nav-menu' sx={{ width: "300px"}} raised= "true" style={{margin: "15px"}} component={Link} to={`item/${product.ID}`}> 
      <CardMedia
      component="img"
        sx={{ height: "200px", width: "100%" }}
        image= {product.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.precio}
        </Typography>
      </CardContent>
 
    </Card>
    
  );
}
export default ProductCard;