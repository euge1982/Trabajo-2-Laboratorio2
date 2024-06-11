import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const projectsData = [
    {title: 'Proyecto 1', description: 'Este es un proyecto de una pagina web de una concesionaria', githubLink: 'https://github.com/JessiRomi/proyecto-de-its-motors'},
    {title: 'Proyecto 2', description: 'Este es un proyecto de una pagina web que muestra un santo grial', githubLink:'https://github.com/euge1982/Trabajo-1-Laboratorio2'},
    {title: 'Proyecto 1', description: 'Este es un proyecto de una pagina web de un Portfolio', githubLink:'https://github.com/euge1982/Trabajo-2-Laboratorio2.git'},
];

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        setProjects (projectsData);
    }, []);

    return (
        <Box className="projects-container">
            <Typography variant="h4" gutterBottom style={{fontWeight:'bold'}}>Proyectos</Typography>
            <Box className="project-list">
                {projects.map( (project, index) => (
                    <Card className="project-card" key={index}>
                        <CardContent>
                            <Typography variant="h5">{project.title}</Typography>
                            <Typography variant="body1">{project.description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button href= {project.githubLink} target="_blank" noopener noreferrer>Link</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
