import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCars } from "../features/carsSlice";
import { Link } from "react-router";

function CarsList() {
  const cars = useSelector((state) => state.cars);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCars(id));
  };
  return (
    <div>
      <header>
        <Link to="/create-car">Crear auto</Link>
      </header>

      {cars.map((car) => (
        <div key={car.id}>
          <h2>
            {car.marca} {car.modelo}
          </h2>
          <p>Placa: {car.placa}</p>
          <p>Número de serie: {car.numeroSerie}</p>
          <p>Kilometraje: {car.kilometraje}</p>
          <p>Tipo: {car.tipo}</p>
          <button onClick={() => handleDelete(car.id)}>Eliminar</button>
          <Link to={`/edit-cars/${car.id}`}>Editar</Link> si ya teiene
        </div>
      ))}
    </div>
  );
}

export default CarsList;

