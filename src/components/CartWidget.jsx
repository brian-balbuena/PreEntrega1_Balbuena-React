import { IconButton, Badge } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import IconUser from "./user_icon";




const CartWidget = () => {
    return (
        <>
            <IconButton style={{ color: '#263238', fontSize: 'large' }} aria-label="add to shopping cart" className="nav-icon">
                <Badge badgeContent={2} style={{ color: '#263238', fontSize: '4rem' }} >
                    <ShoppingCartRoundedIcon style={{ color: 'success', fontSize: '3rem' }} />
                </Badge>
            </IconButton>
            <IconUser />
        </>


    );
}

export default CartWidget;