import React, { useState } from 'react';
import{BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Login from './Components/AgriAcePage';
import Signup from './Components/Login'
import './App.css';


function App() {
  
  return (
    <div className="App">

<Router>
          <Routes>
          <Route exact path="/" element= {<Login/>}/>
            <Route exact path="/Signup" element = {<Signup/>}/>
            <Route exact path="/" element= {<Login/>}/>
            

          </Routes>
        </Router>
      
      </div>
  );

     }
export default App;


