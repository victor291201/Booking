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
import { FormControl, Grid, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
const {Login} = useContext(DataContext);
const[data,setData]=useState({username:"",password:""});

const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

function handleChange(event) {
    const { name, value } = event.target
    console.log(typeof(value))
    setData({
        ...data,
        [name]: value
    })
}
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',width:"100%",background:"white"}}>
        <Grid container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"400px",height:"400px",background:"#F4F4F4",borderRadius:"5px",padding:"20px"}}>
                <Typography variant="h4" gutterBottom color="primary" style={{margin:"0px"}}>
                    Log In
                </Typography>
                <Grid item xs={12} md={12}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TextField id="departureAirport" name="username" onChange={(e)=>handleChange(e)} label="Username" variant="standard" style={{width:"100%"}}/>
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    
                    <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            style={{width:"100%"}}
                            id="standard-adornment-password"
                            name="password" onChange={(e)=>handleChange(e)}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'end', alignItems: 'center', width:"100%"}}>
                    <Link to={"/registrarse"}>Registrarse</Link>
                </Grid>
                <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <Button style={{color: "white"}} variant="contained" color="secondary" onClick={() => {Login(data)}}>Submit</Button>
                </Grid>
        </Grid>
    </div>
  );
}

export default Login;
