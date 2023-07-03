import { IconButton, Badge, Button, colors } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonIcon from '@mui/icons-material/Person';
import './style_navbar_icon.css';
import BasicMenu from "./navbar_productos";
import IconUser from "./user_icon";

const NavBar = () => {

    return (
        <>
            <section className="navBar">
                <nav className="navbar-up">
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        <Button className="navbar-up-title" variant="text" style={{ fontSize: '2.5rem', color: '#263238' }} >mi PLANta</Button>
                        <div style={{display: 'flex', justifyContent: 'space-evenly' }}>
                            <Button className="navbar-text-body" variant="text" style={{color: '#263238'}}>Home</Button>
                            <BasicMenu />
                        </div>

                    </div>
                </nav>

                <nav style={{width: '100%'}}>
                    <div className="navbar-bottom" style={{display: 'flex', justifyContent: 'center'}}>
                        <IconButton style={{color :'#263238' , fontSize: 'large'}} aria-label="add to shopping cart" className="nav-icon">
                            <Badge badgeContent={2} style={{color :'#263238', fontSize: '4rem'}} >
                                <ShoppingCartRoundedIcon style={{color: 'success', fontSize: '3rem'}}/>
                            </Badge>
                        </IconButton>

                        {/* <PersonIcon style={{color :'#263238', fontSize: '4rem', marginLeft: '20px'}}/> */}

                        <IconUser/>
                    </div>
                </nav>

            </section>


        </>
    );
};

export default NavBar;

