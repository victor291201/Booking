import Typography from '@mui/material/Typography';
import CardAirline from "./CardAirline";
import NavBar from "./NavBar";
import { DataContext } from '../../controllers/Context';
import { useContext } from 'react';



const AirlineSearchResult = (props) =>{
    
    const {GlobalState} = useContext(DataContext);
    
    const flights = GlobalState.flights.map((flight, index) => <CardAirline key={index} marginTop="30" marginBottom="10" 
                                    ticketPrice={flight.ticketPrice} departureAirportCode={flight.departure.departureCity}
                                    arrivalAirportCode={flight.arrival.arrivalCity} flightNumber={flight.flightNumber} 
                                    departureAirportHour={flight.departure.departureTime}
                                    arrivalAirportHour={flight.arrival.arrivalTime}
                                    EstimatedTime={flight.duration}/>)
                                .sort((a, b) => {   
                                    if(a.props.flightNumber === b.props.flightNumber) return 0;
                                    else if(a.props.flightNumber < b.props.flightNumber) return -1;
                                    else return 1;
                                });
    return(
        
        <div style={{background:"white"}}>
            <NavBar departureAirportCode={props.data[0].departureAirportCode} arrivalAirportCode={props.data[0].arrivalAirportCode}
                    departureDate={props.data[0].departureDate} />

            <div style={{padding:"20px 0px",marginTop:"84px"}} >
            <Typography variant="h4" gutterBottom color="primary" align="center" style={{margin:"20px 0px 40px"}}>
                Select your flight
            </Typography>

            {
                flights
            }
            </div>

        </div>
    )

}

export default AirlineSearchResult;