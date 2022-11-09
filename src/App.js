import React, { useEffect, useState } from "react";
import "./App.css";
import Contactos from "./Contactos";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Paseadores from "./Paseadores";
import Contratar from "./Contratar";
import Login from "./Login";
import Registrar from "./Registrar";
import Principal from "./Principal";

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/paseadores" element={<Paseadores />}></Route>
          <Route path="/contratar" element={<Contratar />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Registrar" element={<Registrar />}></Route>
          <Route path="/principal" element={<Principal/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
