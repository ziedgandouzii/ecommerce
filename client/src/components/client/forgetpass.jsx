
import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Le Pneumatique
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Forgetpass() {
  const history = useHistory()
  const [isdiconnected,setdisconnected]=useState('false')
  const handleSubmit = (event) => {
    localStorage.setItem('logged',true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user={
      email: data.get('email'),
      password: data.get('password'),
    };  
    axios.post("http://localhost:3001/signin", user)
        .then(res => {
            if(res.data.user)
            {
            window.localStorage.setItem('token',JSON.stringify(res.data.user))
            window.location.href='/'
            }
            else{
              setdisconnected(true)
              alert("login invalid")
          }
        })

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonSearchIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrer Votre Email
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Recuperer Mon Compte
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={() => history.push("/signup")}>
                  Vous n'avez pas d'un compte?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => history.push("/signup")}>
                   Se connecter
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}