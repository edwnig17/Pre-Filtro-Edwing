import React from "react";

const ReservasList = ({ reservas }) => {
  return (
    <div>
      <h4>Reservas Disponibles:</h4>
      <ul>
        {reservas.map((reserva, index) => (
          <li key={index}>
            Fecha: {reserva.fecha}, Personas: {reserva.personas}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservasList;
