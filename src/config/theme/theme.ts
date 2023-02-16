import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

export const Theme = createTheme(
    {
        typography:{
            fontFamily:'ubuntu'
        },

        palette: {
            mode: 'dark',
            primary: {
                // grey 50
                main: '#fafafa'
            },

            secondary: {
                //deep purple 400
                main: '#7e57c2'
            },

            error: {
                //pink A400
                main: '#f50057'
            },

            warning: {
                //orange 400
                main: '#ffa726'
            },

            info: {
                //blue grey 300
                main: '#90a4ae'
            },

            success: {
                //teal A400
                main: '#1de9b6'
            },
        },
    },
    ptBR
);