import { Grid, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Grid container bgcolor={'black'}>
      <Grid item xs={12} md={12} p={3}>
          <Typography color={'white'} textAlign={'center'}>
            Reformes integrales <span style={{color: 'red'}}> Sierra </span> <br /> <span style={{fontSize: '14px'}}>©Todos los derechos reservados
              </span> </Typography>
      </Grid>

    </Grid>
  )
}
