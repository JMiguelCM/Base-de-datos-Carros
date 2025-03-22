import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCars } from "../features/carsSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router";

function CarsForm() {
  const [cars, setCars] = useState({
    marca: "",
    modelo: "",
    placa: "",
    numeroSerie: "",
    kilometraje: "",
    tipo: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCars({
      ...cars,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCars({ ...cars, id: uuid() }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="marca"
        placeholder="Marca"
        onChange={handleChange}
      />
      <input
        type="text"
        name="modelo"
        placeholder="Modelo"
        onChange={handleChange}
      />
      <input
        type="text"
        name="placa"
        placeholder="Placa"
        onChange={handleChange}
      />
      <input
        type="text"
        name="numeroSerie"
        placeholder="Número de serie"
        onChange={handleChange}
      />
      <input
        type="number"
        name="kilometraje"
        placeholder="Kilometraje"
        onChange={handleChange}
      />
      <select name="tipo" onChange={handleChange} required>
        <option value="">Selecciona un tipo</option>
        <option value="gasolina">Gasolina</option>
        <option value="diesel">Diésel</option>
        <option value="electrico">Eléctrico</option>
        <option value="hibrido">Híbrido</option>
      </select>

      <button type="submit">Guardar</button>
    </form>
  );
}

export default CarsForm;
