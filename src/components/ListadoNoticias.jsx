import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"
import { Pagination, Stack } from "@mui/material"

const ListadoNoticias = () => {
    const {noticias} = useNoticias()

    console.log(noticias)

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component = {'h2'}
        >
            Ultimas Noticias
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia=>(
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        
        <Stack
            sx={{
                marginY: 5,
                color: 'white',
                backgroundColor: 'white' 
            }}
            spacing={2}
            direction={'row'}
            justifyContent='center'
            alignItems='center'
        >
            <Pagination 
                count={10}
                color="secondary"
            />
        </Stack>
    </>
  )
}


export default ListadoNoticias