import React, { useEffect, useState } from "react";
import "./App.css";
import Contactos from "./Contactos";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Paseadores from "./Paseadores";
import Contratar from "./Contratar";

function App() {
  
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
