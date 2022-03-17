import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainNavbar from "./main-navbar";

const MainLayoutRoot = styled('div')(() => ({
    margin: 'auto',
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
}));

export const MainLayout = (props) => {
    const { children } = props;

    return (
        <>
            <MainNavbar/>
            <MainLayoutRoot>
                <Box
                    sx={{
                       display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children}
                </Box>
            </MainLayoutRoot>
        </>
    );
};
