import React, { useEffect, useState } from "react";
import "./css/profile_contrato.css";
import image1 from "./assets/1.jpg";
import image2 from "./assets/contrato.jpg";

function Contratar() {
  var id_ejemplo = "62aa7d42959a6bde1d556a7a";
  var id_ejemplop = "62a36b1b651d0057a427d486";

  const url3 = "https://apirest-streetpaws.herokuapp.com/api/owners";
  const [filtro, setFiltro] = useState();

  const url2 = "https://apirest-streetpaws.herokuapp.com/api/Users";
  const [paseadores, setPaseador] = useState();

  const fetchApi = async () => {
    const response = await fetch(url3);
    const responseJSON = await response.json();

    const responsep = await fetch(url2);
    const responseJSONp = await responsep.json();

    setFiltro(responseJSON.filter((i) => i._id === id_ejemplo));
    setPaseador(responseJSONp.filter((i) => i._id === id_ejemplop));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card2 p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img
                src="https://i.imgur.com/wvxPV9S.png"
                height={100}
                width={100}
              />
            </button>
            {!filtro
              ? "Cargando..."
              : filtro.map((dueño) => (
                  <>
                    <span className="name mt-3">{dueño.name}</span>
                    <div className="text mt-3">
                      <span>DNI : {dueño.dni}</span>
                      <br></br>
                      <span>Direccion : {dueño.address}</span>
                      <br></br>
                      <span>Email : {dueño.email}</span>
                      <br></br>
                    </div>
                  </>
                ))}

            <div className=" px-2 rounded mt-4 date ">
              <span className="join">Joined May,2021</span>
            </div>
          </div>
        </div>

        <center>
          <div>
            <img src={image2} height={100} width={100} />
            <div className=" d-flex mt-2">
              <button className="btn1 btn-dark">Contratar</button>
            </div>
            <div className=" d-flex mt-2">
              <a href="/paseadores">
                <button className="btn1 btn-dark">Volver</button>
              </a>
            </div>
          </div>
        </center>

        <div className="card2 p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img src={image1} height={100} width={100} />
            </button>
            {!paseadores
              ? "Cargando..."
              : paseadores.map((dueño) => (
                  <>
                    <span className="name mt-3">{dueño.name}</span>
                    <div className="text mt-3">
                      <span>DNI : {dueño.dni}</span>
                      <br></br>
                      <span>Direccion : {dueño.address}</span>
                      <br></br>
                      <span>Email : {dueño.email}</span>
                      <br></br>
                    </div>
                  </>
                ))}

            <div className=" px-2 rounded mt-4 date ">
              <span className="join">Joined May,2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contratar;
