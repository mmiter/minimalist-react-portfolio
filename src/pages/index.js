import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { MainLayout } from '../components/main-layout';
import { Home, Social, Projects, ScrollDown, Footer } from "../sections"

const Main = () => (
    <>
        <Head>
            <title>
                Portfolio
            </title>
        </Head>
        <Box sx={{
            minHeight: '93vh',
            width: '100%',
            backgroundColor: 'background.paper',
            display: 'grid',
            placeItems: 'center',
        }}>
            <Container>
                <Grid
                    container
                    item
                    justifyContent="center"
                    flexDirection="column"
                    sx={{ mx: "auto" }}
                >
                    <Home />
                </Grid>
                <ScrollDown />
            </Container>
        </Box>
        <Container sx={{ marginTop: '2em'}}>
            <Projects />
        </Container>
        <Box pb={3} px={1} mt={6}>
            <Footer />
        </Box>
    </>
);

Main.getLayout = (page) => (
    <MainLayout>
        {page}
    </MainLayout>
);

export default Main;