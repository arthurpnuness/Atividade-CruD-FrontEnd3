import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MeuContainer } from "../../config/style/meuContainer/MeuContainer";
import { MeuPaper } from "../../config/style/meuPaper/MeuPaper";
import { useAppSelector } from "../../store/modules/hooks";
import { selectAll, User } from "../../store/modules/userSlice/UserSlice";



export const Login =()=>{
    const logado = localStorage.getItem('usuarioLogado') || '';
    const [email,setEmail] = useState("");
    const [senha,setPassword] = useState("");
    const navigate=useNavigate();
    const cadastrados = useAppSelector(selectAll);


    useEffect(()=>{

        if(logado) {
            alert(`Você já está logado`)
            navegaRecados();
            return 
        }

    },[])



    const alerta =()=> alert(`Verifique as credenciais digitadas`);

    function logaClick(){
        if (!email) {
            alerta();
            return
        }

        if (!senha) {
            alerta();
            return
        }

        const emailCadastrado = cadastrados.some((cadastrados: User) => cadastrados.email === email && cadastrados.senha === senha)

        if (!emailCadastrado) {
            alerta();
            return
        }

        localStorage.setItem('usuarioLogado', email);
        navegaRecados();
    }

    function navegaCadastro(){
        return navigate('/cadastro')

    }

    function navegaRecados(){
        return navigate('/recados')

    }

    
    return(

        <MeuContainer container>
            <Grid item xs={6} md={4}>
                <MeuPaper elevation={24}>

                    <Typography variant="h4" align="center">
                        Login
                    </Typography>

                    <TextField variant="outlined" label='E-mail' 
                        placeholder="E-mail" type='email' 
                        sx={{my: 2}} value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                
                    <TextField variant="outlined" label='password' 
                        placeholder="password" type='password'
                        value={senha}
                        onChange={(e)=> setPassword(e.target.value)}
                    />

                    <Button variant="outlined" sx={{my: 2}} onClick={logaClick} >To Enter</Button>
                    <Button variant="text" size="small" onClick={navegaCadastro}>Create an account</Button>

                </MeuPaper>
            </Grid>
        </MeuContainer>
     )
}