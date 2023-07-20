import { Button, colors } from "@mui/material";
import './style_navbar_icon.css';
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from "./CartWidget";
import BasicMenu from "./navbar_productos";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
            <section className="navBar">
                <nav className="navbar-up">
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        <Button className="navbar-up-title" variant="text" style={{ fontSize: '2.5rem', color: '#263238' }} >mi PLANta</Button>
                        <div style={{display: 'flex', justifyContent: 'space-evenly' }}>
                            <Button className="navbar-text-body" variant="text" style={{color: '#263238'}} component={Link} to="/">Home</Button>
                            <BasicMenu />
                        </div>
                    </div>
                </nav>

                <nav style={{width: '100%'}}>
                    <div className="navbar-bottom" style={{display: 'flex', justifyContent: 'center'}}>
                       <CartWidget/>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default NavBar;

