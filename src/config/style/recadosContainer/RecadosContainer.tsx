import styled from "@emotion/styled";
import { Grid } from "@mui/material";


export const RecadosContainer = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    width: '100vw',
    height: '100vh',
    backgroundImage: 'linear-gradient(to top left, #580d7c)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));