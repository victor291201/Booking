import React,{Component,createContext} from "react";
import axios from "axios";
import { redirect, useNavigate, Redirect} from "react-router-dom";

export const DataContext = createContext();

var authAxios = null;
export class DataProvider extends Component{
    constructor(args){
      super(args);
      this.state = {
        user:{loged:false,token:""},
        data:{},
        flights: []
      }
      this.getFligths = this.getFligths.bind(this);
      this.Login = this.Login.bind(this);
      this.Logout = this.Logout.bind(this);
      this.Register = this.Register.bind(this);
      this.AuthAxios = this.AuthAxios.bind(this);
    }   
    AuthAxios(token){
      authAxios =  axios.create({
      headers:{
          Authorization:"Bearer " +token
      }
    })}
    async getFligths(data){
      console.log(data)
      var res;
      var aprov = false;
      if(data.departure !== ''){
        if(data.arrival !== ''){
          await authAxios.get(
              "https://flightbookingjava.azurewebsites.net/api/model/flights/departureAirportName/arrivalAirportName/departureDate/?departureAirportName="+data.departure+"&arrivalAirportName="+data.arrival+"&departureDate="+data.date)
              .then(function (response) {
                if(response.status==404){
                  alert("no se encontraron vuelos con esos parametros")
                }
                else{
                  aprov=true;
                  console.log(response)
                  res=response.data
                }
            })
            .catch(function (error) {
                if(error.response.status==404){
                  alert("no se encontraron vuelos con esos parametros")
                }
                else{
                  console.log(error);
                  alert(error.response)
                }
            });
            if(aprov){
              this.setState((prevState)=>{
                  return{
                      ...prevState,
                      flights:res,
                      data:{departure:data.departure,arrival:data.arrival,date:data.date}
                  }
              })
              return new Promise((resolve,reject)=>{
                resolve({data:true})
                reject({data:true})
                }
              )
            }
        } else {
          alert('el arrival debe ser diferente de vacio');
        }
      } else {
        alert('El departure debe ser diferente de vacio');
      }
      
    return new Promise((resolve,reject)=>{
      resolve({data:false})
      reject({data:false})
      }
    )
  }
  async Login(data){
    console.log(data)
    var token = "";
    var aprov = false;
    if(data.username !== ''){
      if(data.password !== ''){
          await axios.post("https://flightbookingjava.azurewebsites.net/api/auth/signin",
              data
          ).then(function (response) {
              aprov=true;
              token=response.data.accessToken
              alert("Usuario logeado con exito");
          })
          .catch(function (error) {
              alert("error al iniciar sesion");
              console.log(error);
              alert(error.response.data.message)
          });
          if(aprov){
            this.setState((prevState)=>{
                return{
                    ...prevState,
                    user:{loged:true,token}
                }
            })
            this.AuthAxios(token);
          }
      } else {
        alert('La contraseña debe ser diferente de vacia');
      }
    } else {
      alert('El nombre de usuario debe ser diferente de vacio');
    }
}
async Logout(){
  this.setState((prevState)=>{
      return{
          ...prevState,
          user:{loged:false}
      }
  })
}
async Register(data){
  console.log(data)
  var aprov = false;
  if(data.username !== ''){
    if(data.correo !== ''){
      if(data.password !== ''){
        await axios.post("https://flightbookingjava.azurewebsites.net/api/auth/signup",
            data
        ).then(function (response) {
            aprov=true;
            alert("usuario con exito");
        })
        .catch(function (error) {
            alert("error al crear el usuario");
            console.log(error);
            alert(error.response.data.message)
        });
        if(aprov){
          return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
          )
        }
      } else {
        alert('La contraseña debe ser diferente de vacio');
      }
    } else {
      alert('El correo debe ser diferente de vacio');
    }
  } else {
    alert('El nombre de usuario debe ser diferente de vacio');
  }
  return new Promise((resolve,reject)=>{
    resolve({data:false})
    reject({data:false})
    }
  )
}
  
render(){
    const {state,getFligths,Login,Logout,Register} = this
    return(
        <DataContext.Provider value={{
            GlobalState:state,getFligths,Login,Logout,Register
          }}>
            {this.props.children}
        </DataContext.Provider>
    )
}

}
