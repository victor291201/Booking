import 'bootstrap/dist/css/bootstrap.css';
import "../../global/styles/globalStyles.css";
import "./utils/login.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
        <div class="row align-items-center" style={{position:"relative",top:"-25px"}}>
            <div className='d-flex flex-column align-items-center'>
                <div className="lgLogo mb-2"></div>
                <div className='lgFormContainer'>
                    <form style={{width:"330px"}}>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-check d-flex align-items-center p-0">
                                <input type="checkbox" className="form-check-input m-0" id="exampleCheck1"/>
                                <label className="form-check-label my-0 ms-1 " style={{fontSize:"12px"}} for="exampleCheck1">Guardar contraseña</label>
                            </div>
                            <div className="d-flex align-items-center">
                                <Link to="register"><p className="m-0"style={{fontSize:"12px"}}>Registrarse</p></Link>
                            </div>
                        </div>
                    </form>
                    <button type="submit" class="btn btn-primary my-2">Iniciar sesion</button>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Login;
