import React from "react";
import Header from "./componentes/Header";
import AboutMe from "./componentes/AboutMe";
import Projects from "./componentes/Projects";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";
import { Container, CssBaseline } from "@mui/material";

const App = () => {
    
    return (
        <Container className="app">
            <CssBaseline/>
            <Header/>
            <main>
                <AboutMe/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </Container>  
    );
};

export default App;