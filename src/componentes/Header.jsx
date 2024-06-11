import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <AppBar position = "static" className="header" sx={{ backgroundColor:'#f187c5'}}> {/*La posicion static deja la barra fija y que no se mueva cuando se scrollea*/}
            <Toolbar className="header-toolbar">   {/*Contenedor flexible de MUI*/}
                <Typography variant = "h6" className="header-title">MI PORTAFOLIO</Typography>   {/*Renderiza el texto con la tipografia de h2*/}
            </Toolbar>
        </AppBar>
    );
};

export default Header;