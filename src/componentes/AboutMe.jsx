import React from "react";
import foto_perfil from "../assets/foto_perfil.jpg"
import { Avatar, Box, Typography } from "@mui/material";

const AboutMe = () => {
    return (
        <Box className = "about-me" > /*Es un contenedor como el div*/
            <Avatar src = {foto_perfil} alt = "foto-de-perfil" className = "foto" sx={{width: 200, height: 200}}/>
            <Typography variant= "h4" gutterBottom style={{fontWeight:'bold'}}>Acerca de Mi</Typography>
            <Typography variant="body1" className="about-me-text">
                Hola, mi nombre es Eugenia Mora. Soy estudiante de la carrera Tecnico Superior en Desarrollo FullStack, 
                en el Instituto Tecnico Superior Cipolletti
            </Typography>
        </Box>
    );
};

export default AboutMe;