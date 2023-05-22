import "../../global/styles/globalStyles.css";
import "./utils/login.css"
import { Link } from 'react-router-dom';
import { DataContext } from '../../controllers/Context';
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

function Login() {
const {Login} = useContext(DataContext);
const[data,setData]=useState({username:"",password:""});

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
                    <TextField required id="departureAirport" name="username" label="Username" variant="standard"  />
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TextField required id="arrivalAirport" name="password" label="Password" variant="standard" />
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'end', alignItems: 'center', width:"100%"}}>
                    <Link to={"/registrarse"}>Registrarse</Link>
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <Button style={{color: "white"}} variant="contained" color="secondary" onClick={() => {Login(data.username,data.password)}}>Iniciar Sesion</Button>
                </Grid>
        </Grid>
    </div>
  );
}

export default Login;
