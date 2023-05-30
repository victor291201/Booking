import Typography from '@mui/material/Typography';
import { Grid, Card, CardContent, Divider } from "@mui/material";
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const CardAirline = (props) =>{

    
    return(
        <div style={{marginTop: `${props.marginTop}px`, marginBottom: `${props.marginBottom}px`, marginLeft: `20%`, marginRight: `20%`}}>
            <Card sx={{ borderRadius: '5px',border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"none", 
            '&:hover': {boxShadow:"0px 2px 2px -1px #ff3d00", cursor: "pointer"}}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            
                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                DEPARTURE
                            </Typography>

                            <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom>
                                {props.departureAirportHour}
                            </Typography>
                            
                        </Grid>

                        <Grid item xs={6} >

                            <Typography sx={{ fontSize: 16 }} gutterBottom style={{textAlign:"end"}}>
                                ARRIVAL
                            </Typography>

                            <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom style={{textAlign:"end"}}>
                                {props.arrivalAirportHour}
                            </Typography>

                        </Grid>  

                    </Grid>


                    <Divider />

                    <Grid container spacing={2}  justifyContent="space-between" marginTop={1} marginBottom={2}>

                        <Grid item marginLeft={4} style={{margin:"0px"}}>
                            <FlightTakeoffOutlinedIcon sx={{fontSize: 30 }} color="primary" />
                            <Typography sx={{ fontSize: 16 }} color="primary" gutterBottom>
                                {props.departureAirportCode}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <AccessTimeIcon sx={{fontSize: 30 }} color="primary" />
                            <Typography sx={{ fontSize: 16 }} color="primary" gutterBottom>
                                {props.EstimatedTime}
                            </Typography>
                        </Grid>

                        <Grid item marginRight={4} style={{margin:"0px"}}>
                            <FlightLandOutlinedIcon sx={{fontSize: 30 }} color="primary"/>
                            <Typography sx={{ fontSize: 16 }} color="primary" gutterBottom>
                                {props.arrivalAirportCode}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                $ {props.ticketPrice}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: 16 }} gutterBottom  style={{textAlign:"end"}}>
                                Flight {props.flightNumber}
                            </Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )

}

export default CardAirline;