import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes,Route} from "react-router-dom";
//import {Routes,Route} from "react-router-dom";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Details from "./components/Details";

const App = () => {
  return (
  <>
      <Navbar />

      <Routes>
      
          <Route exact path="/" Component={Home} />
          <Route exact path="/register" Component={Register} />
        <Route exact path="/edit/:id" Component={Edit} />
        <Route exact path="/view/:id" Component={Details}/>
      </Routes>
  </>
  );
};

export default App;
