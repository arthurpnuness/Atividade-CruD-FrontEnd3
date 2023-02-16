import styled from "@emotion/styled";
import { Grid } from "@mui/material";



export const MeuContainer = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundImage: 'radial-gradient(circle, #5900ad)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));