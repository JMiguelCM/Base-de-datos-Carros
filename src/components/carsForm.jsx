import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCars, updateCar } from "../features/carsSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router";

function CarsForm() {
  const [car, setCar] = useState({
    marca: "",
    modelo: "",
    placa: "",
    numeroSerie: "",
    kilometraje: "",
    tipo: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const carsSelector = useSelector((state) => state.cars.cars || state.cars); // Asegura que siempre obtienes un array

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(updateCar({ ...car, id: params.id }));
    } else {
      dispatch(addCars({ ...car, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const foundCar = carsSelector.find(
        (car) => String(car.id) === String(params.id)
      );
      if (foundCar) {
        setCar(foundCar);
      }
    }
  }, [params.id, carsSelector]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md w-96 mx-auto"
    >
      <h2 className="text-xl font-bold text-white mb-4">
        {params.id ? "Editar Auto" : "Agregar Auto"}
      </h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          value={car.marca}
          onChange={handleChange}
          required
          className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="modelo"
          placeholder="Modelo"
          value={car.modelo}
          onChange={handleChange}
          required
          className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="placa"
          placeholder="Placa"
          value={car.placa}
          onChange={handleChange}
          required
          className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="numeroSerie"
          placeholder="Número de serie"
          value={car.numeroSerie}
          onChange={handleChange}
          required
          className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          name="kilometraje"
          placeholder="Kilometraje"
          value={car.kilometraje}
          onChange={handleChange}
          required
          className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          name="tipo"
          value={car.tipo}
          onChange={handleChange}
          required
          className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Selecciona un tipo</option>
          <option value="gasolina">Gasolina</option>
          <option value="diesel">Diésel</option>
          <option value="electrico">Eléctrico</option>
          <option value="hibrido">Híbrido</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition duration-200"
      >
        Guardar
      </button>
    </form>
  );
}

export default CarsForm;
