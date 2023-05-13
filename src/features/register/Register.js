import 'bootstrap/dist/css/bootstrap.css';
import "../../global/styles/globalStyles.css";

function Register() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
        <div class="row align-items-center">
            <div className=''>
                <div className='lgFormContainer'>
                    <form style={{width:"670px"}}>
                        <div className="mb-2 d-flex justify-content-between">
                            <div style={{width:"330px"}}>
                                <label for="exampleInputEmail1" class="form-label">First name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div style={{width:"330px"}}>
                                <label for="exampleInputPassword1" class="form-label">Last name</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                        <div className="mb-2 d-flex justify-content-between">
                            <div style={{width:"330px"}}>
                                <label for="exampleInputEmail1" class="form-label">User name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div style={{width:"330px"}}>
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                        <div className="mb-2 d-flex justify-content-between">
                            <div style={{width:"330px"}}>
                                <label for="exampleInputEmail1" class="form-label">Fecha de nacimiento</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div style={{width:"330px"}}>
                                <label for="exampleInputPassword1" class="form-label">Telefono</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                    </form>
                    <button type="submit" class="btn btn-primary my-2">Registrarse</button>
                    
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Register;
