import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/'


function Contact() {


  return (
    <div className="App"> 
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "2px auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Nous contactez
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Completer le formulaire suivant et nous vous repondre avant 24 heures.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="Nom" variant="outlined" fullWidth  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Prenom" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Telephone" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="secondary" fullWidth>Envoyer</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Contact;