import React, { useEffect, useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Coffe(){
    const [coffes, setCoffes]= useState([]);
    const [selectedCafe, setSelectedCafe] = useState(null);

    const handleClick = async (cafe) => {
        try {
            const { data } = await Axios.get(`http://localhost:3001/cafes/${cafe.id}`);
            setSelectedCafe(data);
          } catch (error) {
            console.error(error);
          }
    };

    const fetchCoffe = async ()=>{
        const {data} = await Axios.get(
            "http://localhost:3001/cafes"
        );
        setCoffes(data);
        console.log(coffes)
    };
    useEffect(()=>{
        fetchCoffe();
    }, [])

    return(
        
        <div>
            <h2>Coffe</h2>
            <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {coffes.map((cafe) => (
          <tr key={cafe.id} onClick={() => handleClick(cafe)}>
            <td>{cafe.id}</td>
            <td>{cafe.nombre}</td>
            <td>{cafe.tipo}</td>
            <td>{cafe.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {selectedCafe && (
        <div className="card">
          <img className="card-img-top" src={selectedCafe.imagen} alt={selectedCafe.nombre} />
          <div className="card-body">
            <h5 className="card-title">{selectedCafe.nombre}</h5>
            <p className="card-text">
              Tipo: {selectedCafe.tipo}<br />
              Region: {selectedCafe.region}<br />
              Notas: {selectedCafe.notas}<br />
              Fecha de cultivo: {selectedCafe.fecha_cultivo}<br />
              Altura: {selectedCafe.altura}<br />
            </p>
          </div>
        </div>
      )}
        </div>
    )
}