import React, {useState} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Coffe from './components/coffe/coffe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [token,setToken]= useState();

  if (!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div className="wrapper">
      <h1>El Aroma Magico</h1>
      <headder></headder>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coffe />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
