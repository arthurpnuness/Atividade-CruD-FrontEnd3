import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MeuContainer } from "../../config/style/meuContainer/MeuContainer";
import { MeuPaper } from "../../config/style/meuPaper/MeuPaper";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { adicionarUser, selectAll } from "../../store/modules/userSlice/UserSlice";



export const Cadastro =()=>{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [reSenha, setReSenha] = useState("");
    const navigate=useNavigate();
    const usuarios = useAppSelector(selectAll);
    const dispatch = useAppDispatch();

    function navegaLogin(){
        return navigate('/')
    };

    const alerta =()=> alert(`Verifique as credenciais digitadas`);

    const CadastrarClick = () => {
        if (!email) {
            alerta();
            return;
        }

        if (!senha) {
            alerta();
            return;
        }

        if (senha !== reSenha) {
            alerta();
            return;
        }

        if (!email.match(/\S+@\S+\.\S/)) {
            alerta();
            return;
        }

        const existeEmail = usuarios.some((usuarios) => usuarios.email === email);

        if (existeEmail) {
            alerta();
            return
        }

        cadastraUsuario();
        alert(`usuario cadastrado`)
        limparCampos();
        
        
        setTimeout(() => {
            navegaLogin();
        }, 1500);

    }

   function cadastraUsuario(){
        const novoUsuario={
            email: email,
            senha: senha,
        }

    dispatch(adicionarUser(novoUsuario));
    
   }

   function limparCampos() {
    setEmail('');
    setSenha('');
    setReSenha('');
}



    return(
        
        <MeuContainer container>
            <Grid item xs={6} md={4}>
                <MeuPaper elevation={24}>

                    <Typography variant="h4" align="center">
                        Create an account
                    </Typography>

                    <TextField variant="outlined" label='E-mail' 
                    placeholder="E-mail" type='email' sx={{my: 2}}
                    value={email} onChange={(e)=> setEmail(e.target.value)}
                    />
                    <TextField variant="outlined" label='Password' 
                    placeholder="Password" type='password'
                    value={senha} onChange={(e)=> setSenha(e.target.value)}
                    />
                    <TextField variant="outlined" label='Confirm Password' 
                    placeholder="Confirm Password" 
                    type='password' sx={{my: 2}}
                    value={reSenha} onChange={(e)=> setReSenha(e.target.value)}
                    />

                    <Button variant="outlined" sx={{mb: 2}} onClick={CadastrarClick}>Register</Button>
                    <Button variant="text" size="small" onClick={navegaLogin}>already have account</Button>

                </MeuPaper>
            </Grid>
        </MeuContainer>
    )
}