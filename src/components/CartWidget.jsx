import { IconButton, Badge, Modal, Box, Typography } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import IconUser from "./user_icon";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import DetailCart from "./DetailCart";




const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   
    return (
        <>
            <IconButton style={{ color: '#263238', fontSize: 'large' }} onClick={handleOpen} aria-label="add to shopping cart" className="nav-icon">
                <Badge style={{ color: '#263238', fontSize: '1.5rem' }} >{cart.length}
                    <ShoppingCartRoundedIcon style={{ color: 'success', fontSize: '3rem' }} />
                </Badge>
            </IconButton>
            {/* <IconUser /> */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
               <DetailCart/>
            </Modal>
        </>


    );
}

export default CartWidget;