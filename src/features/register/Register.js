import "../../global/styles/globalStyles.css";
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Grid } from "@mui/material";
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Register() {
    const[data,setData]=useState({
        firstName:"",lastName:"",
        userName:"",password:"",
        date:"",telefono:"",
    });
    function handleChange(event) {
        const { name, value } = event.target
        console.log(typeof(value))
        setData({
            ...data,
            [name]: value
        })
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',width:"100%"}}>
        <Grid container xd={4} md={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                <Grid item xs={12} md={12}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TextField required id="arrivalAirport" name="firstName" label="First Name" variant="standard" />
                    <TextField required id="departureAirport" name="lastName" label="Last Name" variant="standard"  />
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TextField required id="arrivalAirport" name="username" label="Username" variant="standard" />
                    <TextField required id="arrivalAirport" name="password" label="Password" variant="standard" />
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                            id="departureDate"
                            label="Fecha De Nacimiento"
                            value={data.date}
                            onChange={handleChange}
                            inputFormat="EEEE, MMM d, yyyy"
                            renderInput={(params) => <TextField {...params} variant="standard"/> }/>
                        </LocalizationProvider>  
                    <TextField required id="arrivalAirport" name="telefono" label="Telefono" variant="standard" />
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <Button style={{color: "white"}} variant="contained" color="secondary" onClick={() => {alert("hey")}}>Registrarse</Button>
                </Grid>
        </Grid>
    </div>
  );
}

export default Register;
