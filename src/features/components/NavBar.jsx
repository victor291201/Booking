import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Grid, TextField, Button } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Link } from 'react-router-dom';
import { DataContext } from '../../controllers/Context';

const NavBar = (props) => {

    const {GlobalState} = useContext(DataContext);
  return (
    <div>
        <AppBar position="fixed" style={{background:"#F4F4F4",padding:"10px 0px",boxShadow:"none"}}>
          <Toolbar disableGutters>
            <Grid style={{display:"flex", justifyContent:"center", width:'100%'}}>
                    <Grid item xs={3} md={3} style={{paddingRight:'2%'}}>
                        <TextField                       
                                id="departureAirport"
                                label="From"
                                value={GlobalState.data.departure}
                                InputProps={{ style:{
                                    readOnly: true
                                }}}
                                variant="standard"/>
                    </Grid>
                    
                    <Grid item xs={3} md={3} style={{paddingRight:'2%'}}>
                        <TextField
                            id="arrivalAirport"
                            name="arrivalAirport"
                            label="To"
                            value={GlobalState.data.arrival}
                            InputProps={{ style:{
                                readOnly: true
                            }}}
                            focused
                            variant="standard"/>
                    </Grid>

                    <Grid item xs={3} md={3} style={{paddingRight:'2%'}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                id="departureDate"
                                name="departureDate"
                                value={new Date(GlobalState.data.date)}
                                label="Date"
                                inputFormat="EEEE, MMM d, yyyy"
                                renderInput={(params) => 
                                            <TextField {...params} 
                                            variant="standard" 
                                            InputProps={{   
                                                            style:{
                                                            color: '#00F890',
                                                        }}}/> }/>
                            </LocalizationProvider> 
                    </Grid>

                    <Grid item xs={3} md={3} sx={{margin:'10px'}}>
                        <Link to={"/"} style={{height:"100%",display:"flex",alignItems:"center",textDecoration:"none",color:"#9c27b0"}}>
                            ATRAS
                        </Link>
                    </Grid>

                </Grid>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;