import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, 
    DialogTitle, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/modules/hooks";
import { adicionarRecado } from "../../store/modules/recadosSlice/RecadosSlice";
import {v4 as uuid} from "uuid";


export const AppHeader = ()=>{
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [tarefa, setTarefa] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [data, setData] = React.useState('');
    const dispatch = useAppDispatch();

    const alerta =()=> alert(`Verifique se todos os campos estão preenchidos`);
    

    const addRecado = () => {
        const userLogado = localStorage.getItem('usuarioLogado');

        if (userLogado) {
            if (!descricao && !tarefa) {
                alerta();
                return
            }
            const novoRecado = {
                uid: uuid(),
                userId: userLogado,
                tarefa: tarefa,
                descricao: descricao,
                data: data,
            };

            dispatch(adicionarRecado(novoRecado));
            limparEstados();
            handleClose();
        }
    };

    const limparEstados = () => {
        setTarefa('');
        setDescricao('');
        setData('');
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function deslogar() {
        localStorage.removeItem('usuarioLogado');
        return navigate('/');
    };
    
  return(  
        <Box sx={{ flexGrow: 1, boxShadow: '0 0 20px 1px white' }}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton
                        size="large" edge="start"
                        color="inherit" aria-label="AddIcon"
                        onClick={handleClickOpen}
                    >
                        <AddIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: 0.5 }}>
                    Add a new message
                    </Typography>

                    <Button color="info" onClick={deslogar}>To Go Back</Button>
                </Toolbar>
            </AppBar>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New message</DialogTitle>

                <DialogContent>
                <TextField
                        autoFocus
                        margin="dense"
                        id="data"
                        type="date"
                        variant="standard"
                        onChange={((e) => setData(e.target.value))}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="task"
                        label="task"
                        type="text"
                        fullWidth
                        variant="filled"
                        sx={{ my: 1 }} 
                        onChange={((e) => setTarefa(e.target.value))}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="description"
                        type="text"
                        fullWidth
                        variant="filled"
                        onChange={((e) => setDescricao(e.target.value))}
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color='warning'>Cancel</Button>
                    <Button onClick={addRecado} color='success'>To Add</Button>
                </DialogActions>
            </Dialog>
        </Box>



    
)}

function uuidv4() {
    throw new Error("Function not implemented.");
}
