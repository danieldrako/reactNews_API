import { Container, Grid, Typography } from "@mui/material"
import Formulario from "./components/Formulario"
import { NoticiasProvider } from "./context/NoticiasProvider"
import ListadoNoticias from "./components/ListadoNoticias"

function App() {
  
  return (
    <NoticiasProvider>
      <Container  style={{ 
        background: "linear-gradient(45deg, rgba(11,32,149,0.9556197478991597) 8%, rgba(7,50,172,1) 26%, rgba(0,159,255,1) 100%)", 
        padding: '4rem',
        boxShadow: "2px -8px 35px 22px rgba(0,0,0,0.53)",
        borderRadius: "7% 93% 6% 94% / 91% 10% 90% 9% ",
        marginTop: '2rem',
        marginBottom:'2rem',
        paddingBottom:'10rem' }} >
      <header >
        <Typography align='center' marginY={5} component="h1" variant="h3">
          Buscador de Noticias
        </Typography>
      </header>

      <Grid
        container
        direcetion='row'
        justifyContent='center'
        alignItems='center'
        padding='5rem'
        borderRadius= "7% 93% 6% 94% / 91% 10% 90% 9% "
        style={{background:'linear-gradient(45deg, rgba(122,10,10,0.9556197478991597) 5%, rgba(172,70,7,1) 31%, rgba(255,158,0,0.7903536414565826) 91%)'}}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Formulario/>
        </Grid>
      </Grid>

      <ListadoNoticias/>


      </Container>
    </NoticiasProvider>

  )
}

export default App
