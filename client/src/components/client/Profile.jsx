import React, { useState,useEffect } from "react";
import "./Profile.css"; // Import the CSS file for this component
import {TextField,Button} from '@mui/material/';

function Profile() {
    const [currentfirstname,setcurrentfirstname]=useState('');
    const [currentlastname,setcurrentlastname]=useState('');
    const [currentemail,setcurrentemail]=useState('');

    const [firstname,setfirstname]=useState();
    const [lastname,setlastname]=useState();
    const [email,setemail]=useState();
    const [lastpassword,setlastpassword]=useState();
    const [newpassword,setnewpassword]=useState();

    useEffect(() =>{
        let token=localStorage.getItem("token");
        if(token)
        {
            const data = JSON.parse(token)
            setcurrentfirstname(data.firstname)
            setcurrentlastname(data.lastname)
            setcurrentemail(data.email)
        }
    },[])
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const edit={
            firstname:firstname,
            lastname:lastname,
            email:email,
            lastpassword:lastpassword,
            newpassword:newpassword
        }
       console.log(edit)
      };
return (
<div className="profile">
			<div className="user-profile">
				<div className="user-avatar">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
				</div>
				<h5 className="fullname">{currentfirstname} {currentlastname}</h5>
                <br/>

                <h5 className="Email">Email: {currentemail} </h5>
			</div>
            <div className="edit">
				<h5 className="mb-2 text-primary">Modifier les Details Personnels</h5>
			<div className="details">
            <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              className="field"
              id="firstname"
              label="Nom"
              name="firstname"
              autoComplete="firstname"
              onChange={((e)=>{setfirstname(e.target.value)})}
            />
             <TextField
              margin="normal"
              className="field"
              id="lastname"
              label="Prenom"
              name="lastname"
              autoComplete="lastname"
              onChange={((e)=>{setlastname(e.target.value)})}
            />
            <TextField
              margin="normal"
              className="field"
              id="email"
              label="Adresse email"
              name="email"
              autoComplete="email"
              onChange={((e)=>{setemail(e.target.value)})}

            />
            <TextField
              margin="normal"
              className="field"
              name="lastpassword"
              label="Ancien Mot de passe"
              type="password"
              id="lastpassword"
              autoComplete="last-password"
              onChange={((e)=>{setlastpassword(e.target.value)})}
            />
            <TextField
              margin="normal"
        
              className="field"
              name="newpassword"
              label="Nouveau Mot de passe"
              type="password"
              id="newpassword"
              autoComplete="new-password"
              onChange={((e)=>{setnewpassword(e.target.value)})}
            />
            		<div className="button">
                    <Button type="submit" variant="contained" color="secondary" fullWidth>Changer</Button>
				</div>
            </form>
			</div>
		</div>
</div>
);
}

export default Profile;