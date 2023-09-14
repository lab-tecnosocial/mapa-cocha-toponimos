import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Mapa from './Mapa';

export default function Inicio() {
  return (
    <>
      <AppBar position="relative" sx={{ alignItems: 'center' }} >
        <Toolbar className="header">
          <img src="https://labtecnosocial.org/wp-content/uploads/2023/09/detalles.png" alt="logo" width="80px" style={{ marginTop: '2px', marginRight: '4px' }} />
          <Typography variant="h5" color="inherit" >
            <b>Topónimos indígenas de Quchapampa</b>
          </Typography>
          <img src="https://labtecnosocial.org/wp-content/uploads/2023/09/detalles.png" alt="logo" width="80px" style={{ marginTop: '2px', marginLeft: '4px' }} />


        </Toolbar>
      </AppBar >
      <main>
        <Mapa />
      </main>
      <Box className='footer'>
        <Typography variant="subtitle2" color="inherit" align="center" gutterBottom >
          <Link href="https://labtecnosocial.org/" color="inherit" underline="hover" target="_blank" rel="noopener" >
            <img src="https://labtecnosocial.org/wp-content/uploads/2021/07/cropped-logo-claro-300x149.png" alt="logo" width="80px" style={{ marginTop: '2px' }} />
          </Link>
        </Typography>
      </Box>
    </>
  );
}