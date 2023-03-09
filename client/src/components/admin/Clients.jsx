import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveAlt1RoundedIcon from '@mui/icons-material/PersonRemoveAlt1Rounded';
import { TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
// Generate Order Data



export default function Clients() {
    const [iseditable, seteditable] = useState(null);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.post("http://localhost:3001/users")
          .then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }, []);
  function edit(id) {
      seteditable(id)
    }
  return (
    <Grid item xs={5} sx={{p:20}}>
    <Paper sx={{ p: 10, display: 'flex', flexDirection: 'column'}}>
    <React.Fragment>
      <Title>Clients</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Prenom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Modifier</TableCell>
            <TableCell>Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users) => (
            <TableRow key={users._id}>
                  {iseditable ?(<>
          <TableCell><TextField id="standard-basic" variant="standard"/></TableCell>
          <TableCell><TextField id="standard-basic"  variant="standard"/></TableCell>
          <TableCell><TextField id="standard-basic"  variant="standard"/></TableCell>
          <TableCell style={{cursor:'pointer'}} onClick={(()=>{seteditable(null)})}><DoneIcon/></TableCell>
          <TableCell style={{cursor:'pointer'}}><PersonRemoveAlt1RoundedIcon/></TableCell>
                  </>) :
                      (<>
           <TableCell>{users.firstname}</TableCell>
          <TableCell>{users.lastname}</TableCell>
          <TableCell>{users.email}</TableCell>
          <TableCell style={{cursor:'pointer'}} onClick={(users_id)=>edit(users_id)}><EditIcon/></TableCell>
          <TableCell style={{cursor:'pointer'}}><PersonRemoveAlt1RoundedIcon/></TableCell>
                      </>
                      )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
    </Paper>
  </Grid>
  );
}