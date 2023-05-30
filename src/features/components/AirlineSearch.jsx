import React, { useContext, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../controllers/Context";
import { Search } from "@mui/icons-material";


const AirlineSearch = (props) => {
    const navigate = useNavigate();

    const initialDefaults = {departureAirport : '', arrivalAirport : ''}; // valores por defecto de los campos de texto
    

    const [valueDate, setValueDate] = useState(new Date()); // valor inicial de la fecha
    const[data,setData]=useState({departure:"",arrival:"",date:""});

    const {getFligths,GlobalState} = useContext(DataContext);
    async function Search(){
        var res =  await getFligths(data);
        if(res.data){
            navigate("/search");
        }
    }
    
    const handleDateChange = (newValueDate) => { // funcion que se ejecuta al cambiar la fecha
        let day = newValueDate.getDate()
        if(parseInt(day)<9){
            day = "0"+day
        }
        let month = (parseInt(newValueDate.getMonth())+1).toString()
        if(parseInt(month)<9){
            month = "0"+month
        }
        let year = newValueDate.getFullYear()

        setData({
            ...data,
            date: month+"/"+day+"/"+year
        })
    };
function handleChange(event) {
    const { name, value } = event.target
    console.log(typeof(value))
    setData({
        ...data,
        [name]: value
    })
}
    return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',width:"100%",background:"white"}}>
        <Grid container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"400px",height:"400px",background:"#F4F4F4",borderRadius:"5px",padding:"20px"}}>
                <Typography variant="h4" gutterBottom color="primary" style={{margin:"0px"}}>
                        Where next?
                </Typography>
                    <Grid item xs={12} md={12}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <FlightTakeoffOutlinedIcon sx={{fontSize: 60 }} color="primary" />
                        <TextField required id="departureAirport" style={{ width:"100%"}} name="departure" onChange={(e)=>{handleChange(e)}} label="Departure Airport" variant="standard"/>
                    </Grid>
                    <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                        <FlightLandOutlinedIcon sx={{fontSize: 60 }} color="primary"/>
                        <TextField required id="arrivalAirport" style={{ width:"100%"}} name="arrival" onChange={(e)=>{handleChange(e)}} label="Arrival airport" variant="standard"/>
                    </Grid>
                    <Grid item xs={12} md={12}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} style={{ width:"100%"}}>
                            <InsertInvitationIcon sx={{fontSize: 60 }} color="primary" />
                            <MobileDatePicker style={{ width:"100%"}}
                            className="customDatePickerWidth"
                            id="departureDate"
                            label="Pick a date"
                            value={valueDate}
                            onChange={handleDateChange}
                            inputFormat="EEEE, MMM d, yyyy"
                            renderInput={(params) => <TextField {...params}size="small" variant="standard"  style={{ width:"100%"}}/> }/>
                        </LocalizationProvider>  
                    </Grid>
                    <Grid item xs={12} md={12}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                        <Button style={{color: "white"}} onClick={()=>Search()} variant="contained" color="secondary">Search Flights <ArrowForwardIosIcon/></Button>
                    </Grid>
                </Grid>
        </div>
    )
}


export default AirlineSearch;