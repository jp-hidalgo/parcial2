import React, { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormattedMessage } from "react-intl";

export default function Coffe() {
  const [coffes, setCoffes] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);

  const handleClick = async (cafe) => {
    try {
      const { data } = await Axios.get(
        `http://localhost:3001/cafes/${cafe.id}`
      );
      setSelectedCafe(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCoffe = async () => {
    const { data } = await Axios.get("http://localhost:3001/cafes");
    setCoffes(data);
    console.log(coffes);
  };
  useEffect(() => {
    fetchCoffe();
  });

  return (
    <div className="row">
      <div className="col-8 p-4">
        <h2>Coffee</h2>
        <table className="table">
          <h2 className="text-dark">
            <FormattedMessage id="coffeeTitle" defaultMessage="Coffee" />
          </h2>

          <thead className="table-dark">
            <tr>
              <th>
                <FormattedMessage id="tableHeaderId" defaultMessage="#" />
              </th>
              <th>
                <FormattedMessage id="tableHeaderName" defaultMessage="Name" />
              </th>
              <th>
                <FormattedMessage id="tableHeaderType" defaultMessage="Type" />
              </th>
              <th>
                <FormattedMessage
                  id="tableHeaderRegion"
                  defaultMessage="Region"
                />
              </th>
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
      </div>
      {selectedCafe && (
        <div className="col-4">
          <div className="card">
            <img
              className="card-img-top"
              src={selectedCafe.imagen}
              alt={selectedCafe.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{selectedCafe.nombre}</h5>
              <p className="card-text">
                <FormattedMessage
                  id="coffeeType"
                  defaultMessage="Type: {type}"
                  values={{ type: selectedCafe.tipo }}
                />
                <br />
                <FormattedMessage
                  id="coffeeRegion"
                  defaultMessage="Region: {region}"
                  values={{ region: selectedCafe.region }}
                />
                <br />
                <FormattedMessage
                  id="coffeeNotes"
                  defaultMessage="Notes: {notes}"
                  values={{ notes: selectedCafe.notas }}
                />
                <br />
                <FormattedMessage
                  id="coffeeCultivationDate"
                  defaultMessage="Cultivation Date: {date}"
                  values={{ date: selectedCafe.fecha_cultivo }}
                />
                <br />
                <FormattedMessage
                  id="coffeeAltitude"
                  defaultMessage="Altitude: {altitude}"
                  values={{ altitude: selectedCafe.altura }}
                />
                <br />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
