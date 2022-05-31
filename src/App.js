import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from "./components/Greeting";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/greetings" element={ <Greeting greeting="Hi Peeps!" />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
