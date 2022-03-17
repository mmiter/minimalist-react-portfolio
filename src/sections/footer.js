import {Box, Container } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Footer() {
    return (
        <Container>
            <Box sx={{
                textAlign: 'center'
            }}>
                Made with <FavoriteBorderIcon sx={{color: '#e74c3c', fontSize: 'inherit'}}/> by <a href="https://mtmcode.eu">me ツ</a>
            </Box>
        </Container>
    )
}