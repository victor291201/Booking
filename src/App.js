import logo from './logo.svg';
import './App.css';
import Login from './features/login/Login';
import Register from './features/register/Register';
import AirlineSearch from "./features/components/AirlineSearch"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from 'react';
import { DataContext } from './controllers/Context';
import AirlineSearchResult from './features/components/AirlineSearchResult';


function App() {
  const {GlobalState} = useContext(DataContext);
  if(!GlobalState.user.loged){
    return(
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registrarse' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<AirlineSearch/>}/>
        <Route path='/search' element={<AirlineSearchResult data={[{ticketPrice:10,
                                          departureAirportCode:12,
                                          arrivalAirportCode:8,
                                          flightNumber:6,
                                          fligdepartureDate:Date.now()}]}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
