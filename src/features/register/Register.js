import "../../global/styles/globalStyles.css";
import { useContext, useState } from 'react';
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
import { DataContext } from "../../controllers/Context";
import { redirect, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const[data,setData]=useState({
        username:"",
        email:"",
        password:""
    });
    const {Register,GlobalState} = useContext(DataContext);
    async function register() {
        var res = await Register(data);
        if(res.data){
            console.log("llegue")
            navigate("/")
        }
    }
    function handleChange(event) {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',width:"100%",background:"white"}}>
        <Grid container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"400px",height:"400px",background:"#F4F4F4",borderRadius:"5px",padding:"20px"}}>
                <Typography variant="h4" gutterBottom color="primary" style={{margin:"0px"}}>
                    Sign In
                </Typography>
                <Grid item xs={12} md={12}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TextField required onChange={(e)=>handleChange(e)} id="arrivalAirport" name="username" label="Username" variant="standard" style={{marginRight:"10px"}}/>
                    <TextField required onChange={(e)=>handleChange(e)} id="departureAirport" name="email" label="Email" variant="standard"  style={{marginLeft:"10px"}} />
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%", marginBottom:"54px"}}>
                    <TextField required onChange={(e)=>handleChange(e)} id="arrivalAirport" name="password" label="Password" variant="standard"  style={{marginRight:"10px",width:"100%"}}/>
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <Button style={{color: "white"}} variant="contained" color="secondary" onClick={() => {register()}}>Submit</Button>
                </Grid>
        </Grid>
    </div>
  );
}

export default Register;
