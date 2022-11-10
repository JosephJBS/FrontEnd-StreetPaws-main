import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import image1 from "./assets/1.jpg";
import Contactos from "./Contactos";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Paseadores from "./Paseadores";
import Contratar from "./Contratar";

function App() {
  const url2 = "https://apirest-streetpaws.herokuapp.com/api/users";
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <Contactos></Contactos>
      <Router>
        <Routes>
          <Route path="/paseadores" element={<Paseadores />}></Route>
          <Route path="/contratar" element={<Contratar />}></Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
