import React,{Component,createContext} from "react";
import axios from "axios";
import { redirect, useNavigate, Redirect} from "react-router-dom";

export const DataContext = createContext();
export class DataProvider extends Component{
    constructor(args){
      super(args);
      this.state = {
        user:{loged:false},
        flights: []
      }
      this.getFligths = this.getFligths.bind(this);
      this.Login = this.Login.bind(this);
      this.Logout = this.Logout.bind(this);
    }   
    async getFligths(departureAirport, arrivalAirport, departureDate){
      if(departureAirport !== '' && arrivalAirport !== ''){
        
        if(true){
          redirect("/");
        }
        else{
          alert("No hay ningún vuelo para ese origen y destino en esa fecha");
        }
        
    } else {
      alert('Uno de los campos está vacío, por favor completelo');
    }
  }
  async Login(username, password){
    this.setState((prevState)=>{
        return{
            ...prevState,
            user:{loged:true}
        }
    })
}
async Logout(){
  this.setState((prevState)=>{
      return{
          ...prevState,
          user:{loged:false}
      }
  })
}
async Register(departureAirport, arrivalAirport, departureDate){
  if(departureAirport !== '' && arrivalAirport !== ''){
    
    if(true){
      redirect("/");
    }
    else{
      alert("No hay ningún vuelo para ese origen y destino en esa fecha");
    }
    
} else {
  alert('Uno de los campos está vacío, por favor completelo');
}
}
  
render(){
    const {state,getFligths,Login,Logout} = this
    return(
        <DataContext.Provider value={{
            GlobalState:state,getFligths,Login,Logout
          }}>
            {this.props.children}
        </DataContext.Provider>
    )
}

}
