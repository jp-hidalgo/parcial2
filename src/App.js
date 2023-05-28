import React, {useState} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Coffe from './components/coffe/coffe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [token,setToken]= useState();

  if (!token){
    return(
      <div className="wrapper">
      <h1>El aroma mágico</h1>
      <header><img src='https://github.com/jp-hidalgo/parcial2/blob/main/assets/coffe.png?raw=true' alt="coffe"/></header>
      <Login setToken={setToken}/>
      <footer style={{ textAlign: 'center' }}>
        <p>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
      </footer>
    </div>
    ) 
  }
  return (
    <div className="wrapper">
      <h1>El aroma mágico</h1>
      <header><img src='https://github.com/jp-hidalgo/parcial2/blob/main/assets/coffe.png?raw=true' alt="coffe"/></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coffe />}/>
        </Routes>
      </BrowserRouter>
      <footer style={{ textAlign: 'center' }}>
        <p>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
      </footer>
    </div>
  );
}

export default App;
