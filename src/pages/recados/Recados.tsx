import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../../components/appHeader/AppHeader"
import { CardRecado } from "../../components/cardRecado/CardRecado";
import { RecadosContainer } from "../../config/style/recadosContainer/RecadosContainer";
import { useAppSelector } from "../../store/modules/hooks";
import { selectAll } from "../../store/modules/recadosSlice/RecadosSlice";

export const Recados =()=>{
        const estaLogado: string = localStorage.getItem('usuarioLogado') || '';
        const recados = useAppSelector(selectAll);
        const recadosUsuarioLogado = recados.filter((recado) => recado.userId === estaLogado);
        const navigate = useNavigate();
    
    useEffect(() => {
    
            if (!estaLogado) {
                return navigate('/');
            }
    
        }, []);
    
        return (
            <RecadosContainer container >
                <AppHeader />
    
                <Grid item xs={12} md={11} sx={{ mt: 3 }}>
                    <Grid container spacing={3} >

                        {recadosUsuarioLogado.map((recados) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <CardRecado uid={recados.uid} userId={recados.userId}
                                    tarefa={recados.tarefa} descricao={recados.descricao}
                                    data={recados.data} key={recados.uid}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
            </RecadosContainer >
    )
}