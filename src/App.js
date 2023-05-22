import logo from './logo.svg';
import './App.css';
import Login from './features/login/Login';
import Register from './features/register/Register';
import AirlineSearch from "./features/components/AirlineSearch"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from 'react';
import { DataContext } from './controllers/Context';


function App() {
  const {GlobalState} = useContext(DataContext);
  if(!GlobalState.user.loged){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registrarse' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<AirlineSearch/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
