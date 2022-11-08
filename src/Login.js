import React from 'react'
import './css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';

import Contratar from "./Contratar";
import Registrar from "./Registrar";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Login() {

    const showAlert =()=>{
        swal({
          title: "BIENVENIDO",
          text : "(>‿◠)✌",
          icon: "success",
          button : "Aceptar"
        }).then(function(){
          window.location = "./contratar";
        })
      }

  return (
    <Router>
    <div className="fondo">
        <div className="containerPrincipal">
        <h1>STREETPASS</h1>
        <br/>
        <div className="containerSecundario">
            <div className="form-group">
            <label>Usuario</label>
            <br/>
            <input type="text" className="form-control" id="User"/>
            <br/>
            <label>Contraseña</label>
            <br/>
            <input type="password" className="form-control" id="Pass"/> 
            <br/>         
            <button
                className="btn btn-primary"
                onClick={() => {
                  fetch("https://streetpaws-backend.herokuapp.com/api/owner", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: document.querySelector("#User").value,
                      password: document.querySelector("#Pass").value,
                    }),
                  });
                  showAlert();
                }}
              >
                Iniciar Sesion
              </button>
            <br/> <br/> 
            <label>¿No tiene una cuenta? <Link to="/Registrar">Crear aqui</Link></label>
            </div>
        </div>
        </div>

    </div>

    </Router>
  );
}

export default Login;