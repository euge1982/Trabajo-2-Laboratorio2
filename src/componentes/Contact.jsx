import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Box className="contact-container">
            <Typography variant='h4' gutterBottom style={{fontWeight:'bold'}}>Contacto</Typography>
            <Box className="contact-item">
                <Typography variant='body1'>
                    Email: <Link href= "mailto.la23euge77@gmail.com">la23euge77@gmail.com</Link>
                </Typography>
            </Box>
            <Box className="contact-item">
                <Typography variant='body1'>
                    Telefono: <Link href= "tel:+5492995111445">+5492995111445</Link>
                </Typography>
            </Box>
        </Box>        
    );
};

export default Contact;