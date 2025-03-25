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
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-white">
          Lista de autos del concesionario
        </h1>

        <Link
          to="/create-car"
          className="bg-indigo-600 px-2 py-1 rounde-sm text-sm"
        >
          Crear Auto
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-gray-800 p-4 rounded-md">
            <header className="flex">
              <h2 className="text-xl">
                {car.marca} {car.modelo}
              </h2>
              <div className="flex ml-auto flex gap-x-2">
                <Link
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  to={`/edit-car/${car.id}`}
                >
                  Editar
                </Link>
                <button
                  className="bg-red-600 px-2 py-1 text-xs rounded-md self-center"
                  onClick={() => handleDelete(car.id)}
                >
                  Eliminar
                </button>
              </div>
            </header>
            <div className="mt-4 bg-gray-700 p-3 rounded-lg text-gray-300 text-sm">
              <p className="font-semibold">
                Placa: <span className="font-normal">{car.placa}</span>
              </p>
              <p className="font-semibold">
                Número de serie:{" "}
                <span className="font-normal">{car.numeroSerie}</span>
              </p>
              <p className="font-semibold">
                Kilometraje:{" "}
                <span className="font-normal">{car.kilometraje}</span>
              </p>
              <p className="font-semibold">
                Tipo: <span className="font-normal">{car.tipo}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarsList;
